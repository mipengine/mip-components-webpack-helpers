/**
 * @file external.js
 * @author clark-t (clarktanglei@163.com)
 */

const {externalList, prefix} = require('./data')
const path = require('path')
const {pathFormat} = require('./utils')

module.exports = function (ctx) {
  return function (context, request, callback) {
    request = pathFormat(request)
    let req
    if (/^\.?\.?\//.test(request)) {
      req = path.resolve(context, request)
      if (req.indexOf('node_modules') === -1) {
        return callback()
      }
    } else if (externalList.some(extern => extern.indexOf(request) > -1)) {
      req = request
    }

    if (!req) {
      return callback()
    }

    try {
      req = require.resolve(req, {paths: [ctx]})
    } catch (e) {
      return callback()
    }

    req = pathFormat(req)

    for (let i = 0; i < externalList.length; i++) {
      let index = req.indexOf(externalList[i])
      if (index > -1) {
        return callback(null, `root ${prefix}['${req.slice(index, -3)}']`)
      }
    }
    callback()
  }
}
