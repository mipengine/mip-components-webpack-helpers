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

// __INJECT_BABEL_RUNTIME_HELPERS_REF__
helpers['babel-runtime/regenerator'] = regenerator
helpers['css-loader/lib/css-base'] = cssBase
helpers['vue-loader/lib/runtime/componentNormalizer'] = {__esModule: true, default: componentNormalizer}
helpers['vue-style-loader/lib/addStylesClient'] = {__esModule: true, default: addStylesClient}
helpers['vue-style-loader/lib/listToStyles'] = {__esModule: true, default: listToStyles}

export default function runMipComponentsPolyfill () {
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
