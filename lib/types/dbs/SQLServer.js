import DataTypes from '../data-types'

function convertDataTypes(attribute) {
  var typeOf = ''
  switch (typeof attribute) {
    case 'string':
      typeOf = DataTypes.STRING(attribute.length)
      break
    case 'number':
      const isRealValue = attribute.toString().match(/./)
      if(isRealValue) {
        typeOf = DataTypes.DOUBLE()
      } else {
        typeOf = DataTypes.INT(attribute)
      }
      break
    case Boolean:
      typeOf = ' BOOLEAN '
      break
    default:
      // nothing to do
  }
  return typeOf
}

function convertAttributeTypes (object) {
  var query = ''
  for (var attribute of object) {
    const convertedAttribute = convertDataTypes(object[attribute])
    query += ' ' + attribute + ' ' + convertedAttribute
  }
  query = query.slice(0, -1)
  return query
}

export { convertAttributeTypes }