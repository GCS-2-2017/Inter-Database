function formatObject (object) {
  let query = ''
  for (var [key, value] of Object.entries(object)) {
    query += key + '=' + value + ','
  }
  query = query.slice(0, -1) // remove the last occurrence of character ','
  return query
}

function formatInsertValues (object) {
  let query = ''
  for (var [key, value] of Object.entries(object)) {
    query += '\'' + value + '\','
  }
  query = query.slice(0, -1)
  return query
}

function formatArray (objects) {
  let query = ''
  for (let object of objects) {
    query = query.concat(object + ', ')
  }
  query = query.slice(0, -1) // remove the last occurrence of character ','
  return query
}

function formatSortObject (object) {
  let query = ''
  for (let attribute of object) {
    query += attribute + ' ' + object[attribute] + ','
  }
  query = query.slice(0, -1) // remove the last occurrence of character ','
  return query
}


export { formatObject, formatInsertValues }
