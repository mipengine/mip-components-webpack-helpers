/**
 * @file utils
 * @author clark-t (clarktanglei@163.com)
 */

/**
 * 将资源的路径字符串格式化，替换分隔符，
 * 去掉 webpack 资源路径中存在的 loader 声明：loadera!loaderb!sourcepath -> sourcepath
 *
 * @param {string} pathname 资源路径
 * @return {string} 格式化后的资源路径
 */
function pathFormat (pathname) {
  return pathname.replace(/\\/g, '/').replace(/.*!/, '')
}

/**
 * 统一的根据加载的资源路径生成变量 Identifier
 *
 * @param {string} str 资源路径
 * @return {string} Identifier
 */
function generateVariableName (str) {
  return '__MIP_HELPER_VAR_' +
    str.replace(/[-/]/g, '_')
      .replace(/\./g, '_DOT_')
      .replace(/@/g, '_AT_') +
    '__'
}

/**
 * 是否匹配
 *
 * @param {string} str 待校验字符串
 * @param  {Regexp|string} tester 检测方法
 * @return {boolean} 是否匹配
 */
function isMatch (str, tester) {
  if (typeof tester === 'string') {
    return str.indexOf(tester) === 0
  }

  return tester.test(str)
}

/**
 * 将字符串从某个位置切成两段
 *
 * @param {string} extern 待切割字符串
 * @param {string|Regexp} prefix 切割位置定义
 * @return {Array} 切割好的字符串数组
 */
function split (extern, prefix) {
  if (typeof prefix === 'string') {
    return [prefix, extern.slice(prefix.length)]
  }
  let matches = extern.match(prefix)
  return [matches[0], extern.slice(matches[0].length)]
}

/**
 * 将 external 的模块写到 helpers 对象中
 *
 * @param {string} attr 模块路径
 * @param {*} value 模块内容
 */
function attributeStatement (attr, value) {
  return `helpers[${attr}] = ${value}`
}

/**
 * 数组去重
 *
 * @param  {Array} list 数组
 * @return {Array} 去重之后的数组
 */
function unique (list) {
  return Array.from(new Set(list))
}

/**
 * 将二维数组打平成一维数组
 *
 * @param  {Array.<Array>} list 二维数组
 * @return {Array} 一维数组
 */
function flat (list) {
  return list.reduce((arr, item) => arr.concat(item), [])
}

/**
 * 将二维数组打平并去重
 *
 * @param {Array.<Array>} list 二维数组
 * @return {Array} 一维数组
 */
function flatAndUnique (list) {
  return unique(flat(list))
}

/**
 * 生成字符串别名
 *
 * @param {string|Function} alias 别名定义
 * @param  {string} prefix 当前字符串
 * @return {string} 别名
 */
function generateAlias (alias, prefix) {
  if (typeof alias === 'string') {
    return alias
  }
  return alias(prefix)
}

/**
 * 生成变量定义表达式字符串
 *
 * @param  {string} name  变量名
 * @param  {string} value 变量值
 * @return {string} 变量定义表达式
 */
function stringVariableStatement (name, value) {
  return `var ${name} = ${stringStatement(value)}`
}

/**
 * 生成加法表达式
 *
 * @param {...string} args 加法变量
 * @return {string} 加法卞大师
 */
function addExpression (...args) {
  return args.join(' + ')
}

/**
 * 生成字符串表达式
 *
 * @param {string} str 字符串
 * @return {string} 字符串表达式
 */
function stringStatement (str) {
  return `'${str}'`
}

/**
 * 去除资源路径中的后缀
 *
 * @param {string} pathname 资源路径
 * @return {string} 去掉后缀后的表路径
 */
function removeExt (pathname) {
  return pathname.replace(/\.js$/, '')
}

module.exports = {
  pathFormat,
  generateVariableName,
  isMatch,
  split,
  attributeStatement,
  unique,
  flat,
  flatAndUnique,
  generateAlias,
  stringVariableStatement,
  addExpression,
  stringStatement,
  removeExt
}
