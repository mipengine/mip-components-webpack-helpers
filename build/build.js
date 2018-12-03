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
const uglify = require('uglify-es')
const zlib = require('zlib')
const babel = require('rollup-plugin-babel')

const root = path.resolve(__dirname, '..')
const babelHelpersPath = path.resolve(root, 'node_modules', 'babel-runtime', 'helpers')
const babelHelpersFiles = fs.readdirSync(babelHelpersPath)

let sourcePath = path.resolve(root, 'source.js')
let distPath = path.resolve(root, 'dist', 'mip-components-webpack-helpers.js')

function preHandleSourceFile () {
  let importHeader = ''
  let moduleRef = `var BABEL_RUNTIME_HELPERS = 'babel-runtime/helpers/'`

  babelHelpersFiles.forEach(file => {
    let fileName = file.replace('.js', '')
    let modulePath = 'babel-runtime/helpers/' + fileName
    let moduleName = '_' + fileName.replace(/-/g, '_')
    importHeader += `\nimport ${moduleName} from '${modulePath}'`
    moduleRef += `\nhelpers[BABEL_RUNTIME_HELPERS + '${fileName}'] = ${moduleName}`
  })

  fs.writeFileSync(
    sourcePath,
    fs.readFileSync(path.resolve(root, 'index.js'), 'utf-8')
      .replace('// __INJECT_BABEL_RUNTIME_HELPERS_IMPORT__', importHeader)
      .replace('// __INJECT_BABEL_RUNTIME_HELPERS_REF__', moduleRef)
  )
}

function write (dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report (extra) {
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }

    fs.writeFile(dest, code, err => {
      if (err) return reject(err)
      if (zip) {
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err)
          report(' (gzipped: ' + getSize(zipped) + ')')
        })
      } else {
        report()
      }
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

async function build () {
  rollup.rollup({
    input: path.resolve(root, 'source.js'), // sourcePath,
    plugins: [
      resolve(),
      cjs(
        {
          include: 'node_modules/**'
        }
      ),
      babel()
    ]
  })
    .then(bundle => bundle.generate({
      file: distPath,
      format: 'es',
      name: 'installMipComponentsPolyfill'
    }))
    .then(({ code }) => {
      code = uglify.minify(code).code
      write(distPath, code, true)
      fs.unlinkSync(sourcePath)
    })
}

preHandleSourceFile()
build()
