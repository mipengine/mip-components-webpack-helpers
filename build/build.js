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
// try {
//   const nodeModules = path.resolve(root, '../minify/mip2/packages/mip/node_modules/mip-components-webpack-helpers')
//   fs.removeSync(path.resolve(nodeModules, 'dist'))
//   fs.removeSync(path.resolve(nodeModules, 'package.json'))
//   fs.copySync(path.resolve(root, 'dist'), path.resolve(nodeModules, 'dist'))
//   fs.copySync(path.resolve(root, 'package.json'), path.resolve(nodeModules, 'package.json'))
// }
// catch (e) {
//   console.log(e)
// }
// @TEST
