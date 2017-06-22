/**
  * Format objects ex: attribute = 'example'.
  * @param {Object}   [object=null] Object containing attributes name and their values.
  * @return {String} Query formatted in the default.
  */

function formatObject (object) {
  let query = ''
  for (var [key, value] of Object.entries(object)) {
    query += key + '=' + '\'' + value + '\','
  }
  query = query.slice(0, -1) // remove the last occurrence of character ','
  return query
}

/**
  * Format objects ex: 'example', 'example2', 'example3'.
  * @param {Object}   [object=null] Object containing attributes name and their values.
  * @return {String} Query formatted in the default.
  */

function formatInsertValues (object) {
  let query = ''
  for (var [key, value] of Object.entries(object)) {
    query += '\'' + value + '\','
  }
  query = query.slice(0, -1)
  return query
}

/**
  * Format objects ex: 'column1', 'column2', 'column3'.
  * @param {Array}   [objects=null] Array of Strings containing the name of the columns.
  * @return {String} Query formatted in the default.
  */

function formatArray (objects) {
  let query = ''
  for (let object of objects) {
    query = query.concat(object + ', ')
  }
  query = query.slice(0, -1) // remove the last occurrence of character ','
  return query
}

/**
  * Format objects ex: column1 ASC, column2 DESC, column3 ASC.
  * @param {Object}   [objects=null] Object of tables with sorting. ex: {column1: 'ASC', column2: 'DESC'}
  * @return {String} Query formatted in the default.
  */

function formatSortObject (object) {
  let query = ''
  for (let attribute of object) {
    query += attribute + ' ' + object[attribute] + ','
  }
  query = query.slice(0, -1) // remove the last occurrence of character ','
  return query
}

export { formatObject, formatInsertValues }