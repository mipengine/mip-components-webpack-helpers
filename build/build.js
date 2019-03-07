/**
 * @file webpack build 脚本
 * @author mj(zoumiaojiang@gmail.com)
 */

'use strict'

// process.env.NODE_ENV = 'production'

const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')
const {prefix} = require('../lib/data')
const generate = require('../lib/generate')

const root = path.resolve(__dirname, '..')

const srcDir = path.resolve(root, 'src')
const distDir = path.resolve(root, 'dist')

try {
  fs.mkdirSync(distDir, {recursive: true})
} catch (e) {}

const {imports, vars, statements} = generate()

const srcPaths = glob.sync('**/*', {
  cwd: srcDir,
  root: srcDir
})

srcPaths.forEach(srcPath => {
  let file = fs.readFileSync(path.resolve(srcDir, srcPath), 'utf-8')
  file = file
    .replace('__INJECT_PREFIX__', prefix)
    .replace('__INJECT_BABEL_RUNTIME_HELPERS_IMPORT__', imports)
    .replace('__INJECT_BABEL_RUNTIME_HELPERS_VARIABLES__', vars)
    .replace('__INJECT_BABEL_RUNTIME_HELPERS_STATEMENTS__', statements)
  fs.writeFileSync(path.resolve(distDir, srcPath), file, 'utf-8')
})

// @TEST
try {
  const nodeModules = path.resolve(root, '../minify/mip2/packages/mip/node_modules/mip-components-webpack-helpers')
  fs.removeSync(path.resolve(nodeModules, 'dist'))
  fs.removeSync(path.resolve(nodeModules, 'package.json'))
  fs.copySync(path.resolve(root, 'dist'), path.resolve(nodeModules, 'dist'))
  fs.copySync(path.resolve(root, 'package.json'), path.resolve(nodeModules, 'package.json'))
}
catch (e) {
  console.log(e)
}
// @TEST

// let distPath = path.resolve(root, 'dist', 'mip-components-webpack-helpers.js')

// function preHandleSourceFile () {
//   const babelHelpersPath = path.resolve(root, 'node_modules', 'babel-runtime', 'helpers')
//   const babelHelpersFiles = fs.readdirSync(babelHelpersPath)

//   let importHeader = ''
//   let moduleRef = `var BABEL_RUNTIME_HELPERS = 'babel-runtime/helpers/'`

//   babelHelpersFiles.forEach(file => {
//     let fileName = file.replace('.js', '')
//     let modulePath = 'babel-runtime/helpers/' + fileName
//     let moduleName = '_' + fileName.replace(/-/g, '_')
//     importHeader += `\nimport ${moduleName} from '${modulePath}'`
//     moduleRef += `\nhelpers[BABEL_RUNTIME_HELPERS + '${fileName}'] = ${moduleName}`
//   })

//   return {
//     imports: importHeader,
//     refs: moduleRef
//   }
// }


function preHandleSourceFile () {
  const helpers = [
    // "babel-runtime/core-js/array/from",
    // "babel-runtime/core-js/get-iterator",
    // "babel-runtime/core-js/json/stringify",
    // "babel-runtime/core-js/number/is-finite",
    // "babel-runtime/core-js/object/assign",
    // "babel-runtime/core-js/object/create",
    // "babel-runtime/core-js/object/define-properties",
    // "babel-runtime/core-js/object/get-own-property-descriptor",
    // "babel-runtime/core-js/object/get-own-property-names",
    // "babel-runtime/core-js/object/get-prototype-of",
    // "babel-runtime/core-js/object/keys",
    // "babel-runtime/core-js/promise",
    // "babel-runtime/core-js/set",
    "babel-runtime/helpers/asyncToGenerator",
    "babel-runtime/helpers/classCallCheck",
    "babel-runtime/helpers/createClass",
    "babel-runtime/helpers/defineProperty",
    "babel-runtime/helpers/extends",
    "babel-runtime/helpers/get",
    "babel-runtime/helpers/inherits",
    "babel-runtime/helpers/possibleConstructorReturn",
    "babel-runtime/helpers/slicedToArray",
    "babel-runtime/helpers/toConsumableArray",
    "babel-runtime/helpers/typeof",
    "babel-runtime/regenerator",
  ]

  const map = [
    {
      origin: '@babel/runtime/helpers/esm/',
      dist: 'babel-runtime/helpers/',
      esm: true,
      originIdentifierPrefix: '__AT_BABEL_RUNTIME_HELPERS_ESM_',
      distIdentifierPrefix: '__BABEL_RUNTIME_HELPERS_'
    },
    {
      origin: '@babel/runtime/regenerator/index',
      dist: 'babel-runtime/regenerator',
      esm: false
    }
  ]

  let mapper = helpers.map(helper => {
    for (let i = 0; i < map.length; i++) {
      if (helper.indexOf(map[i].dist) === 0) {
        let moduleName = '_' + helper.replace(/[-/]/g, '_')
        let rest = helper.slice(map[i].dist.length)
        let originPath = map[i].origin + rest
        let restIdentifier = rest && `__STRING_OF_${rest.replace(/[-/]/g, '_')}__` || ''
        let distIdentifier = map[i].distIdentifierPrefix && `${map[i].distIdentifierPrefix} + ${restIdentifier}` || `'${map[i].dist}'`
        let originIdentifier = map[i].originIdentifierPrefix && `${map[i].originIdentifierPrefix} + ${restIdentifier}` || `'${map[i].origin}'`
        return {
          imports: `import ${map[i].esm ? '* as' : ''} ${moduleName} from '${originPath}'`,
          vars: rest && `var ${restIdentifier} = '${rest}'` || '',
          statements: [
            `helpers[${distIdentifier}] = ${moduleName}`,
            `helpers[${originIdentifier}] = ${moduleName}`
          ].join('\n')
        }
      }
    }
  })

  return {
    imports: mapper
      .map(m => m.imports).join('\n'),
    vars: mapper
      .map(m => m.vars)
      .concat(
        map
        .filter(m => m.originIdentifierPrefix || m.distIdentifierPrefix)
        .map(m => {
          let result = ''
          if (m.originIdentifierPrefix) {
            result += `var ${m.originIdentifierPrefix} = '${m.origin}'\n`
          }
          if (m.distIdentifierPrefix) {
            result += `var ${m.distIdentifierPrefix} = '${m.dist}'\n`
          }
          return result
        })
      )
      .join('\n'),
    statements: mapper
      .map(m => m.statements).join('\n'),
  }
  // const babelHelpersPath = path.resolve(root, 'node_modules', 'babel-runtime', 'helpers')
  // const babelHelpersFiles = fs.readdirSync(babelHelpersPath)

  // let importHeader = ''
  // let moduleRef = `var BABEL_RUNTIME_HELPERS = 'babel-runtime/helpers/'`

  // babelHelpersFiles.forEach(file => {
  //   let fileName = file.replace('.js', '')
  //   let modulePath = 'babel-runtime/helpers/' + fileName
  //   let moduleName = '_' + fileName.replace(/-/g, '_')
  //   importHeader += `\nimport ${moduleName} from '${modulePath}'`
  //   moduleRef += `\nhelpers[BABEL_RUNTIME_HELPERS + '${fileName}'] = ${moduleName}`
  // })

  // return {
  //   imports: importHeader,
  //   refs: moduleRef
  // }
}


