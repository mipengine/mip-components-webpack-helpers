/**
 * @file helpers & polyfill for mip custom component
 * @author mj(zoumiaojiang@gmail.com)
 */


import __async_generator_delegate from 'babel-runtime/helpers/_async-generator-delegate'
import __async_generator from 'babel-runtime/helpers/_async-generator'
import __async_iterator from 'babel-runtime/helpers/_async-iterator'
import __async_to_generator from 'babel-runtime/helpers/_async-to-generator'
import __class_call_check from 'babel-runtime/helpers/_class-call-check'
import __create_class from 'babel-runtime/helpers/_create-class'
import __defaults from 'babel-runtime/helpers/_defaults'
import __define_enumerable_properties from 'babel-runtime/helpers/_define-enumerable-properties'
import __define_property from 'babel-runtime/helpers/_define-property'
import __extends from 'babel-runtime/helpers/_extends'
import __get from 'babel-runtime/helpers/_get'
import __inherits from 'babel-runtime/helpers/_inherits'
import __instanceof from 'babel-runtime/helpers/_instanceof'
import __interop_require_default from 'babel-runtime/helpers/_interop-require-default'
import __interop_require_wildcard from 'babel-runtime/helpers/_interop-require-wildcard'
import __jsx from 'babel-runtime/helpers/_jsx'
import __new_arrow_check from 'babel-runtime/helpers/_new-arrow-check'
import __object_destructuring_empty from 'babel-runtime/helpers/_object-destructuring-empty'
import __object_without_properties from 'babel-runtime/helpers/_object-without-properties'
import __possible_constructor_return from 'babel-runtime/helpers/_possible-constructor-return'
import __self_global from 'babel-runtime/helpers/_self-global'
import __set from 'babel-runtime/helpers/_set'
import __sliced_to_array_loose from 'babel-runtime/helpers/_sliced-to-array-loose'
import __sliced_to_array from 'babel-runtime/helpers/_sliced-to-array'
import __tagged_template_literal_loose from 'babel-runtime/helpers/_tagged-template-literal-loose'
import __tagged_template_literal from 'babel-runtime/helpers/_tagged-template-literal'
import __temporal_ref from 'babel-runtime/helpers/_temporal-ref'
import __temporal_undefined from 'babel-runtime/helpers/_temporal-undefined'
import __to_array from 'babel-runtime/helpers/_to-array'
import __to_consumable_array from 'babel-runtime/helpers/_to-consumable-array'
import __typeof from 'babel-runtime/helpers/_typeof'
import _async_generator_delegate from 'babel-runtime/helpers/async-generator-delegate'
import _async_generator from 'babel-runtime/helpers/async-generator'
import _async_iterator from 'babel-runtime/helpers/async-iterator'
import _async_to_generator from 'babel-runtime/helpers/async-to-generator'
import _asyncGenerator from 'babel-runtime/helpers/asyncGenerator'
import _asyncGeneratorDelegate from 'babel-runtime/helpers/asyncGeneratorDelegate'
import _asyncIterator from 'babel-runtime/helpers/asyncIterator'
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator'
import _class_call_check from 'babel-runtime/helpers/class-call-check'
import _classCallCheck from 'babel-runtime/helpers/classCallCheck'
import _create_class from 'babel-runtime/helpers/create-class'
import _createClass from 'babel-runtime/helpers/createClass'
import _defaults from 'babel-runtime/helpers/defaults'
import _define_enumerable_properties from 'babel-runtime/helpers/define-enumerable-properties'
import _define_property from 'babel-runtime/helpers/define-property'
import _defineEnumerableProperties from 'babel-runtime/helpers/defineEnumerableProperties'
import _defineProperty from 'babel-runtime/helpers/defineProperty'
import _extends from 'babel-runtime/helpers/extends'
import _get from 'babel-runtime/helpers/get'
import _inherits from 'babel-runtime/helpers/inherits'
import _instanceof from 'babel-runtime/helpers/instanceof'
import _interop_require_default from 'babel-runtime/helpers/interop-require-default'
import _interop_require_wildcard from 'babel-runtime/helpers/interop-require-wildcard'
import _interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault'
import _interopRequireWildcard from 'babel-runtime/helpers/interopRequireWildcard'
import _jsx from 'babel-runtime/helpers/jsx'
import _new_arrow_check from 'babel-runtime/helpers/new-arrow-check'
import _newArrowCheck from 'babel-runtime/helpers/newArrowCheck'
import _object_destructuring_empty from 'babel-runtime/helpers/object-destructuring-empty'
import _object_without_properties from 'babel-runtime/helpers/object-without-properties'
import _objectDestructuringEmpty from 'babel-runtime/helpers/objectDestructuringEmpty'
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties'
import _possible_constructor_return from 'babel-runtime/helpers/possible-constructor-return'
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn'
import _self_global from 'babel-runtime/helpers/self-global'
import _selfGlobal from 'babel-runtime/helpers/selfGlobal'
import _set from 'babel-runtime/helpers/set'
import _sliced_to_array_loose from 'babel-runtime/helpers/sliced-to-array-loose'
import _sliced_to_array from 'babel-runtime/helpers/sliced-to-array'
import _slicedToArray from 'babel-runtime/helpers/slicedToArray'
import _slicedToArrayLoose from 'babel-runtime/helpers/slicedToArrayLoose'
import _tagged_template_literal_loose from 'babel-runtime/helpers/tagged-template-literal-loose'
import _tagged_template_literal from 'babel-runtime/helpers/tagged-template-literal'
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral'
import _taggedTemplateLiteralLoose from 'babel-runtime/helpers/taggedTemplateLiteralLoose'
import _temporal_ref from 'babel-runtime/helpers/temporal-ref'
import _temporal_undefined from 'babel-runtime/helpers/temporal-undefined'
import _temporalRef from 'babel-runtime/helpers/temporalRef'
import _temporalUndefined from 'babel-runtime/helpers/temporalUndefined'
import _to_array from 'babel-runtime/helpers/to-array'
import _to_consumable_array from 'babel-runtime/helpers/to-consumable-array'
import _toArray from 'babel-runtime/helpers/toArray'
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray'
import _typeof from 'babel-runtime/helpers/typeof'
import regenerator from 'babel-runtime/regenerator'
import cssBase from 'css-loader/lib/css-base'
import componentNormalizer from 'vue-loader/lib/runtime/componentNormalizer'
import addStylesClient from './add-styles-client'
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

var BABEL_RUNTIME_HELPERS = 'babel-runtime/helpers/'
helpers[BABEL_RUNTIME_HELPERS + '_async-generator-delegate'] = __async_generator_delegate
helpers[BABEL_RUNTIME_HELPERS + '_async-generator'] = __async_generator
helpers[BABEL_RUNTIME_HELPERS + '_async-iterator'] = __async_iterator
helpers[BABEL_RUNTIME_HELPERS + '_async-to-generator'] = __async_to_generator
helpers[BABEL_RUNTIME_HELPERS + '_class-call-check'] = __class_call_check
helpers[BABEL_RUNTIME_HELPERS + '_create-class'] = __create_class
helpers[BABEL_RUNTIME_HELPERS + '_defaults'] = __defaults
helpers[BABEL_RUNTIME_HELPERS + '_define-enumerable-properties'] = __define_enumerable_properties
helpers[BABEL_RUNTIME_HELPERS + '_define-property'] = __define_property
helpers[BABEL_RUNTIME_HELPERS + '_extends'] = __extends
helpers[BABEL_RUNTIME_HELPERS + '_get'] = __get
helpers[BABEL_RUNTIME_HELPERS + '_inherits'] = __inherits
helpers[BABEL_RUNTIME_HELPERS + '_instanceof'] = __instanceof
helpers[BABEL_RUNTIME_HELPERS + '_interop-require-default'] = __interop_require_default
helpers[BABEL_RUNTIME_HELPERS + '_interop-require-wildcard'] = __interop_require_wildcard
helpers[BABEL_RUNTIME_HELPERS + '_jsx'] = __jsx
helpers[BABEL_RUNTIME_HELPERS + '_new-arrow-check'] = __new_arrow_check
helpers[BABEL_RUNTIME_HELPERS + '_object-destructuring-empty'] = __object_destructuring_empty
helpers[BABEL_RUNTIME_HELPERS + '_object-without-properties'] = __object_without_properties
helpers[BABEL_RUNTIME_HELPERS + '_possible-constructor-return'] = __possible_constructor_return
helpers[BABEL_RUNTIME_HELPERS + '_self-global'] = __self_global
helpers[BABEL_RUNTIME_HELPERS + '_set'] = __set
helpers[BABEL_RUNTIME_HELPERS + '_sliced-to-array-loose'] = __sliced_to_array_loose
helpers[BABEL_RUNTIME_HELPERS + '_sliced-to-array'] = __sliced_to_array
helpers[BABEL_RUNTIME_HELPERS + '_tagged-template-literal-loose'] = __tagged_template_literal_loose
helpers[BABEL_RUNTIME_HELPERS + '_tagged-template-literal'] = __tagged_template_literal
helpers[BABEL_RUNTIME_HELPERS + '_temporal-ref'] = __temporal_ref
helpers[BABEL_RUNTIME_HELPERS + '_temporal-undefined'] = __temporal_undefined
helpers[BABEL_RUNTIME_HELPERS + '_to-array'] = __to_array
helpers[BABEL_RUNTIME_HELPERS + '_to-consumable-array'] = __to_consumable_array
helpers[BABEL_RUNTIME_HELPERS + '_typeof'] = __typeof
helpers[BABEL_RUNTIME_HELPERS + 'async-generator-delegate'] = _async_generator_delegate
helpers[BABEL_RUNTIME_HELPERS + 'async-generator'] = _async_generator
helpers[BABEL_RUNTIME_HELPERS + 'async-iterator'] = _async_iterator
helpers[BABEL_RUNTIME_HELPERS + 'async-to-generator'] = _async_to_generator
helpers[BABEL_RUNTIME_HELPERS + 'asyncGenerator'] = _asyncGenerator
helpers[BABEL_RUNTIME_HELPERS + 'asyncGeneratorDelegate'] = _asyncGeneratorDelegate
helpers[BABEL_RUNTIME_HELPERS + 'asyncIterator'] = _asyncIterator
helpers[BABEL_RUNTIME_HELPERS + 'asyncToGenerator'] = _asyncToGenerator
helpers[BABEL_RUNTIME_HELPERS + 'class-call-check'] = _class_call_check
helpers[BABEL_RUNTIME_HELPERS + 'classCallCheck'] = _classCallCheck
helpers[BABEL_RUNTIME_HELPERS + 'create-class'] = _create_class
helpers[BABEL_RUNTIME_HELPERS + 'createClass'] = _createClass
helpers[BABEL_RUNTIME_HELPERS + 'defaults'] = _defaults
helpers[BABEL_RUNTIME_HELPERS + 'define-enumerable-properties'] = _define_enumerable_properties
helpers[BABEL_RUNTIME_HELPERS + 'define-property'] = _define_property
helpers[BABEL_RUNTIME_HELPERS + 'defineEnumerableProperties'] = _defineEnumerableProperties
helpers[BABEL_RUNTIME_HELPERS + 'defineProperty'] = _defineProperty
helpers[BABEL_RUNTIME_HELPERS + 'extends'] = _extends
helpers[BABEL_RUNTIME_HELPERS + 'get'] = _get
helpers[BABEL_RUNTIME_HELPERS + 'inherits'] = _inherits
helpers[BABEL_RUNTIME_HELPERS + 'instanceof'] = _instanceof
helpers[BABEL_RUNTIME_HELPERS + 'interop-require-default'] = _interop_require_default
helpers[BABEL_RUNTIME_HELPERS + 'interop-require-wildcard'] = _interop_require_wildcard
helpers[BABEL_RUNTIME_HELPERS + 'interopRequireDefault'] = _interopRequireDefault
helpers[BABEL_RUNTIME_HELPERS + 'interopRequireWildcard'] = _interopRequireWildcard
helpers[BABEL_RUNTIME_HELPERS + 'jsx'] = _jsx
helpers[BABEL_RUNTIME_HELPERS + 'new-arrow-check'] = _new_arrow_check
helpers[BABEL_RUNTIME_HELPERS + 'newArrowCheck'] = _newArrowCheck
helpers[BABEL_RUNTIME_HELPERS + 'object-destructuring-empty'] = _object_destructuring_empty
helpers[BABEL_RUNTIME_HELPERS + 'object-without-properties'] = _object_without_properties
helpers[BABEL_RUNTIME_HELPERS + 'objectDestructuringEmpty'] = _objectDestructuringEmpty
helpers[BABEL_RUNTIME_HELPERS + 'objectWithoutProperties'] = _objectWithoutProperties
helpers[BABEL_RUNTIME_HELPERS + 'possible-constructor-return'] = _possible_constructor_return
helpers[BABEL_RUNTIME_HELPERS + 'possibleConstructorReturn'] = _possibleConstructorReturn
helpers[BABEL_RUNTIME_HELPERS + 'self-global'] = _self_global
helpers[BABEL_RUNTIME_HELPERS + 'selfGlobal'] = _selfGlobal
helpers[BABEL_RUNTIME_HELPERS + 'set'] = _set
helpers[BABEL_RUNTIME_HELPERS + 'sliced-to-array-loose'] = _sliced_to_array_loose
helpers[BABEL_RUNTIME_HELPERS + 'sliced-to-array'] = _sliced_to_array
helpers[BABEL_RUNTIME_HELPERS + 'slicedToArray'] = _slicedToArray
helpers[BABEL_RUNTIME_HELPERS + 'slicedToArrayLoose'] = _slicedToArrayLoose
helpers[BABEL_RUNTIME_HELPERS + 'tagged-template-literal-loose'] = _tagged_template_literal_loose
helpers[BABEL_RUNTIME_HELPERS + 'tagged-template-literal'] = _tagged_template_literal
helpers[BABEL_RUNTIME_HELPERS + 'taggedTemplateLiteral'] = _taggedTemplateLiteral
helpers[BABEL_RUNTIME_HELPERS + 'taggedTemplateLiteralLoose'] = _taggedTemplateLiteralLoose
helpers[BABEL_RUNTIME_HELPERS + 'temporal-ref'] = _temporal_ref
helpers[BABEL_RUNTIME_HELPERS + 'temporal-undefined'] = _temporal_undefined
helpers[BABEL_RUNTIME_HELPERS + 'temporalRef'] = _temporalRef
helpers[BABEL_RUNTIME_HELPERS + 'temporalUndefined'] = _temporalUndefined
helpers[BABEL_RUNTIME_HELPERS + 'to-array'] = _to_array
helpers[BABEL_RUNTIME_HELPERS + 'to-consumable-array'] = _to_consumable_array
helpers[BABEL_RUNTIME_HELPERS + 'toArray'] = _toArray
helpers[BABEL_RUNTIME_HELPERS + 'toConsumableArray'] = _toConsumableArray
helpers[BABEL_RUNTIME_HELPERS + 'typeof'] = _typeof
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
