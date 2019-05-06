/**
 * @file babel-external-list
 * @author clark-t (clarktanglei@163.com)
 */

const prefix = '__mipComponentsWebpackHelpers__'

const babelExternalList = [
  // '@babel/runtime/helpers/esm/asyncToGenerator.js',
  // '@babel/runtime/helpers/esm/classCallCheck.js',
  // '@babel/runtime/helpers/esm/createClass.js',
  // '@babel/runtime/helpers/esm/defineProperty.js',
  // '@babel/runtime/helpers/esm/get.js',
  // '@babel/runtime/helpers/esm/getPrototypeOf.js',
  // '@babel/runtime/helpers/esm/inherits.js',
  // '@babel/runtime/helpers/esm/objectSpread',
  // '@babel/runtime/helpers/esm/possibleConstructorReturn.js',
  // '@babel/runtime/helpers/esm/slicedToArray.js',
  // '@babel/runtime/helpers/esm/toConsumableArray.js',
  // '@babel/runtime/helpers/esm/typeof.js',
  // '@babel/runtime/regenerator/index.js',

  '@babel/runtime/helpers/esm/arrayWithoutHoles.js',
  '@babel/runtime/helpers/esm/assertThisInitialized.js',
  '@babel/runtime/helpers/esm/AsyncGenerator.js',
  '@babel/runtime/helpers/esm/asyncGeneratorDelegate.js',
  '@babel/runtime/helpers/esm/asyncIterator.js',
  '@babel/runtime/helpers/esm/asyncToGenerator.js',
  '@babel/runtime/helpers/esm/classCallCheck.js',
  '@babel/runtime/helpers/esm/construct.js',
  '@babel/runtime/helpers/esm/createClass.js',
  '@babel/runtime/helpers/esm/defaults.js',
  '@babel/runtime/helpers/esm/defineEnumerableProperties.js',
  '@babel/runtime/helpers/esm/defineProperty.js',
  '@babel/runtime/helpers/esm/extends.js',
  '@babel/runtime/helpers/esm/get.js',
  '@babel/runtime/helpers/esm/getPrototypeOf.js',
  '@babel/runtime/helpers/esm/inherits.js',
  '@babel/runtime/helpers/esm/instanceof.js',
  '@babel/runtime/helpers/esm/isNativeFunction.js',
  '@babel/runtime/helpers/esm/iterableToArray.js',
  '@babel/runtime/helpers/esm/interopRequireDefault.js',
  '@babel/runtime/helpers/esm/interopRequireWildcard.js',
  '@babel/runtime/helpers/esm/newArrowCheck.js',
  '@babel/runtime/helpers/esm/nonIterableSpread.js',
  '@babel/runtime/helpers/esm/objectDestructuringEmpty.js',
  '@babel/runtime/helpers/esm/objectSpread.js',
  '@babel/runtime/helpers/esm/objectWithoutProperties.js',
  '@babel/runtime/helpers/esm/possibleConstructorReturn.js',
  // '@babel/runtime/helpers/esm/selfGlobal.js',
  '@babel/runtime/helpers/esm/set.js',
  '@babel/runtime/helpers/esm/setPrototypeOf.js',
  '@babel/runtime/helpers/esm/slicedToArray.js',
  '@babel/runtime/helpers/esm/slicedToArrayLoose.js',
  '@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
  '@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js',
  '@babel/runtime/helpers/esm/temporalRef.js',
  '@babel/runtime/helpers/esm/temporalUndefined.js',
  '@babel/runtime/helpers/esm/toArray.js',
  '@babel/runtime/helpers/esm/toConsumableArray.js',
  '@babel/runtime/helpers/esm/typeof.js',
  '@babel/runtime/helpers/esm/wrapNativeSuper.js',
  '@babel/runtime/regenerator/index.js',

  // 'core-js/modules/core.get-iterator-method.js',
  'core-js/modules/es6.array.from.js',
  'core-js/modules/es6.array.iterator.js',
  // 'core-js/modules/es6.function.name.js',
  // 'core-js/modules/es6.number.constructor.js',
  'core-js/modules/es6.object.assign.js',
  'core-js/modules/es6.object.create.js',
  'core-js/modules/es6.object.freeze.js',
  'core-js/modules/es6.object.get-prototype-of.js',
  'core-js/modules/es6.object.keys.js',
  'core-js/modules/es6.promise.js',
  'core-js/modules/es7.promise.finally.js',
  'core-js/modules/es7.promise.try.js',
  // 'core-js/modules/es6.regexp.constructor.js',
  // 'core-js/modules/es6.regexp.exec.js',
  // 'core-js/modules/es6.regexp.flags.js',
  // 'core-js/modules/es6.regexp.match.js',
  // 'core-js/modules/es6.regexp.replace.js',
  // 'core-js/modules/es6.regexp.search.js',
  // 'core-js/modules/es6.regexp.split.js',
  // 'core-js/modules/es6.regexp.to-string.js',
  'core-js/modules/es6.set.js',
  'core-js/modules/es6.symbol.js',
  // 'core-js/modules/es7.symbol.async-iterator.js',
  'core-js/modules/web.dom.iterable.js',
  'core-js/modules/_a-function.js',
  'core-js/modules/_an-object.js',
  'core-js/modules/_core.js',
  'core-js/modules/_ctx.js',
  'core-js/modules/_defined.js',
  'core-js/modules/_descriptors.js',
  'core-js/modules/_dom-create.js',
  'core-js/modules/_export.js',
  'core-js/modules/_fails.js',
  'core-js/modules/_global.js',
  'core-js/modules/_has.js',
  'core-js/modules/_hide.js',
  'core-js/modules/_ie8-dom-define.js',
  'core-js/modules/_is-object.js',
  'core-js/modules/_library.js',
  'core-js/modules/_object-dp.js',
  'core-js/modules/_property-desc.js',
  'core-js/modules/_redefine.js',
  'core-js/modules/_shared-key.js',
  'core-js/modules/_to-integer.js',
  'core-js/modules/_to-length.js',
  'core-js/modules/_to-object.js',
  'core-js/modules/_to-primitive.js',
  'core-js/modules/_uid.js',
  'core-js/modules/_wks.js',
  'regenerator-runtime/runtime.js'
]

const loaderExternalList = [
  'css-loader/lib/css-base.js',
  'vue-loader/lib/runtime/componentNormalizer.js',
  'vue-style-loader/lib/addStylesClient.js',
  'vue-style-loader/lib/listToStyles.js'
]

const externalConfig = [
  {
    test: '@babel/runtime/helpers/esm/AsyncGenerator.js',
    alias: 'babel-runtime/helpers/asyncGenerator.js'
  },
  {
    test: '@babel/runtime/helpers/esm/',
    alias: 'babel-runtime/helpers/'
  },
  {
    test: '@babel/runtime/regenerator/index.js',
    alias: 'babel-runtime/regenerator',
    esm: false
  },
  {
    test: 'vue-style-loader/lib/addStylesClient.js',
    redirect: './add-styles-client.js'
  },
  {
    test: 'css-loader/lib/css-base.js',
    esm: false
  },
  {
    test: /core-js\/modules\/[^_]/,
    mount: false
  },
  {
    test: /core-js\/modules\/_/,
    prefix: 'core-js/modules/_',
    esm: false
  },
  // default
  {
    test: '',
    mount: true,
    esm: true
  }
]

module.exports = {
  prefix,
  babelExternalList,
  loaderExternalList,
  externalList: [...babelExternalList, ...loaderExternalList],
  externalConfig
}
