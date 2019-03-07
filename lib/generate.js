/**
 * @file generate.js
 * @author clark-t (clarktanglei@163.com)
 */

const {
  externalList,
  externalConfig
} = require('./data')
const {
  generateVariableName,
  isMatch,
  split,
  attributeStatement,
  flatAndUnique,
  generateAlias,
  stringVariableStatement,
  addExpression,
  stringStatement,
  removeExt
} = require('./utils')

function generate (extern, config) {
  if (config.ignore) {
    return
  }

  let result = {
    imports: [],
    vars: [],
    statements: []
  }

  let importPath = config.redirect || extern
  let importIdentifier = generateVariableName(extern)

  if (config.esm) {
    result.imports.push(`import * as ${importIdentifier} from ${stringStatement(importPath)}`)
  } else {
    result.imports.push(`import ${importIdentifier} from ${stringStatement(importPath)}`)
  }

  if (config.mount === false) {
    return result
  }

  let [prefix, rest] = split(extern, config.prefix || config.test)
  let restKeywords = removeExt(rest)
  let prefixKeywords = removeExt(prefix || rest)
  let restIdentifier

  if (prefix && restKeywords) {
    restIdentifier = generateVariableName(restKeywords)
    let distPrefixIdentifier = generateVariableName(prefix)
    let attribute = addExpression(distPrefixIdentifier, restIdentifier)
    // let attribute = addExpression(distPrefixIdentifier, stringStatement(restKeywords))
    result.statements.push(attributeStatement(attribute, importIdentifier))
    result.vars.push(stringVariableStatement(restIdentifier, restKeywords))
    result.vars.push(stringVariableStatement(distPrefixIdentifier, prefixKeywords))
  } else {
    result.statements.push(attributeStatement(stringStatement(prefixKeywords), importIdentifier))
  }

  if (config.alias) {
    let alias = generateAlias(config.alias, prefix)
    let aliasKeywords = removeExt(alias)

    if (restKeywords) {
      let aliasPrefixIdentifier = generateVariableName(aliasKeywords)
      let attribute = addExpression(aliasPrefixIdentifier, restIdentifier)
      // let attribute = addExpression(aliasPrefixIdentifier, stringStatement(restKeywords))
      result.statements.push(attributeStatement(attribute, importIdentifier))
      result.vars.push(stringVariableStatement(aliasPrefixIdentifier, aliasKeywords))
    } else {
      result.statements.push(attributeStatement(stringStatement(aliasKeywords), importIdentifier))
    }
  }

  return result
}

module.exports = function () {
  let list = externalList.map(extern => {
    for (let i = 0; i < externalConfig.length; i++) {
      if (isMatch(extern, externalConfig[i].test)) {
        return generate(extern, externalConfig[i])
      }
    }
  })
  .filter(item => !!item)

  return {
    imports: flatAndUnique(list.map(item => item.imports)).join('\n'),
    vars: flatAndUnique(list.map(item => item.vars)).join('\n'),
    statements: flatAndUnique(list.map(item => item.statements)).join('\n')
  }
}