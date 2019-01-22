/**
 * @file webpack build 脚本
 * @author mj(zoumiaojiang@gmail.com)
 */

'use strict'

process.env.NODE_ENV = 'production'

const fs = require('fs')
const path = require('path')
const rollup = require('rollup')
const cjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
// const uglify = require('uglify-es')
// const zlib = require('zlib')
const replace = require('rollup-plugin-replace')

const root = path.resolve(__dirname, '..')

let distPath = path.resolve(root, 'dist', 'mip-components-webpack-helpers.js')

function preHandleSourceFile () {
  const babelHelpersPath = path.resolve(root, 'node_modules', 'babel-runtime', 'helpers')
  const babelHelpersFiles = fs.readdirSync(babelHelpersPath)

  let importHeader = ''
  let moduleRef = `var BABEL_RUNTIME_HELPERS = 'babel-runtime/helpers/'`

  babelHelpersFiles.forEach(file => {
    let fileName = file.replace('.js', '')
    let modulePath = 'babel-runtime/helpers/' + fileName
    let moduleName = '_' + fileName.replace(/-/g, '_')
    importHeader += `\nimport ${moduleName} from '${modulePath}'`
    moduleRef += `\nhelpers[BABEL_RUNTIME_HELPERS + '${fileName}'] = ${moduleName}`
  })

  return {
    imports: importHeader,
    refs: moduleRef
  }
}

function build () {
  let {imports, refs} = preHandleSourceFile()

  rollup.rollup({
    input: path.resolve(root, 'src/index.js'), // sourcePath,
    plugins: [
      replace({
        __INJECT_BABEL_RUNTIME_HELPERS_IMPORT__: imports,
        __INJECT_BABEL_RUNTIME_HELPERS_REF__: refs
      }),
      resolve(),
      cjs(
        {
          include: 'node_modules/**'
        }
      )
    ]
  })
  .then(bundle => bundle.write({
    file: distPath,
    format: 'es',
    name: 'installMipComponentsPolyfill'
  }))

    // .then(({ code }) => {
    //   console.log(code)
    //   // code = uglify.minify(code).code
    //   write(distPath, code, true)
    // })
}

// preHandleSourceFile()
build()
