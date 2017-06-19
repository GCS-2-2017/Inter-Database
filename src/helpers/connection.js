formatObject (object) => {
  let query = ''
  for (var attribute of object) {
    query += attribute + '=' + object[attribute] + ','
  }
  query = query.slice(0, -1) // remove the last occurrence of character ','
  return query
}

formatInsertValues(object) {
  let query = ''
  for (var attribute of object) {
    query += '"' + object[attribute] + '",'
  }
  query = query.slice(0, -1)
  return query
}

export { formatObject, formatInsertValues }
