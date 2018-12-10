/**
 * @file helpers & polyfill for mip custom component
 * @author mj(zoumiaojiang@gmail.com)
 */

// __INJECT_BABEL_RUNTIME_HELPERS_IMPORT__
import regenerator from 'babel-runtime/regenerator'
import cssBase from 'css-loader/lib/css-base'
import componentNormalizer from 'vue-loader/lib/runtime/componentNormalizer'
import addStylesClient from 'vue-style-loader/lib/addStylesClient'
import listToStyles from 'vue-style-loader/lib/listToStyles'

import symbol from 'babel-runtime/core-js/symbol'
import set from 'babel-runtime/core-js/set'
import arrayFrom from 'babel-runtime/core-js/array/from'

// import promise from 'babel-runtime/core-js/promise'
// import objectAssign from 'babel-runtime/core-js/object/assign'
// import objectCreate from 'babel-runtime/core-js/object/create'
// import objectFreeze from 'babel-runtime/core-js/object/freeze'
// import objectGetPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of'

function mount (obj, name, host) {
  host = host || window
  if (typeof host[name] === 'undefined') {
    host[name] = obj
  }
}

let helpers = {}
let cssLoaderKey = 'css-loader/lib/css-base'
let regeneratorKey = 'babel-runtime/regenerator'

// __INJECT_BABEL_RUNTIME_HELPERS_REF__
helpers[cssLoaderKey] = cssBase
helpers[regeneratorKey] = regenerator
helpers['vue-loader/lib/runtime/componentNormalizer'] = componentNormalizer
helpers['vue-style-loader/lib/addStylesClient'] = addStylesClient
helpers['vue-style-loader/lib/listToStyles'] = listToStyles

// 兼容 mip-cli 里的 commonjs 写法。。
for (let key in helpers) {
  let ret = helpers[key]
  if (key !== regeneratorKey && key !== cssLoaderKey && !ret.__esModule) {
    helpers[key] = {__esModule: true, default: ret}
  }
}

export default function installMipComponentsPolyfill () {
  mount(symbol, 'Symbol')
  mount(set, 'Set')
  mount(arrayFrom, 'from', Array)
  mount(helpers, '__mipComponentsWebpackHelpers__')

  // mount(promise, 'Promise')
  // mount(objectAssign, 'assign', Object)
  // mount(objectCreate, 'create', Object)
  // mount(objectFreeze, 'freeze', Object)
  // mount(objectGetPrototypeOf, 'getPrototypeOf', Object)
}
