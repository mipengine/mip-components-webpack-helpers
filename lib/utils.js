/**
 * @file utils
 * @author clark-t (clarktanglei@163.com)
 */

function pathFormat (pathname) {
  return pathname.replace(/\\/g, '/').replace(/.*!/, '')
}

function generateVariableName (str) {
  return '__MIP_HELPER_VAR_' +
    str.replace(/[-/]/g, '_')
      .replace(/\./g, '_DOT_')
      .replace(/@/g, '_AT_') +
    '__'
}

function isMatch (str, tester) {
  if (typeof tester === 'string') {
    return str.indexOf(tester) === 0
  }

  return tester.test(str)
}

function split (extern, prefix) {
  if (typeof prefix === 'string') {
    return [prefix, extern.slice(prefix.length)]
  }
  let matches = extern.match(prefix)
  return [matches[0], extern.slice(matches[0].length)]
}

function attributeStatement (attr, value) {
  return `helpers[${attr}] = ${value}`
}

function unique (list) {
  return Array.from(new Set(list))
}

function flat (list) {
  return list.reduce((arr, item) => arr.concat(item), [])
}

function flatAndUnique (list) {
  return unique(flat(list))
}

function generateAlias (alias, prefix) {
  if (typeof alias === 'string') {
    return alias
  }
  return alias(prefix)
}

function stringVariableStatement (name, value) {
  return `var ${name} = ${stringStatement(value)}`
}

function addExpression (...args) {
  return args.join(' + ')
}

function stringStatement (str) {
  return `'${str}'`
}

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
