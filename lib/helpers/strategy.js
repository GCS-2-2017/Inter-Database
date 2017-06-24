import _ from 'lodash'

/**
* Make the decision on what class shoul be instanciated
* @param {String}   [type=] The database name. The strategy will be made based on this.
* @param {Array}   [dbNames=] An array with all the possibilities to database name.
* @param {Array}   [dbPaths={}] The generic paths to the concrete classes.
* @param {String}   [dirPath=] The directory path on where the concrete classes are.
* @exception {TypeError} thrown when the arguments are not supported.
* @return {Object} the concrete class to be instanciated.
*/
function selectDb (type, dbNames, dbPaths, dirPath) {
  if (type === undefined ||
    dbNames === undefined) {
    return null
  } else if (typeof dbNames === 'string' && arguments.length <= 2) {
    dirPath = dbNames
    dbNames = DB_NAMES
    dbPaths = DB_PATHS
  } else if (typeof type !== 'string' ||
            !Array.isArray(dbNames) ||
            !Array.isArray(dbPaths) ||
            typeof dirPath !== 'string') {
    throw new TypeError('Not supported arguments in selectDb.')
  }

  let dbClass = null
  var index = 0
  for (var dbName of dbNames) {
    if (type === dbName) {
      try {
        // This enforces that in case of duplication, it uses the default one
        if (dbPaths[index] !== undefined) {
          dbClass = require(dirPath+dbPaths[index])
          dbClass = dbClass.default
        } else if (dirPath.match(/configuration/)) {
          dbClass = addedConfigClasses[type]
        } else if (dirPath.match(/connection/)) {
          dbClass = addedConnectionClasses[type]
        } else {
          throw new TypeError('Class not found')
        }
        break
      } catch (err) {
        throw err
      }
    }
    index += 1
  }
  return dbClass
}

/**
* Add new custom database to the hierarchy of databases in Configuration and Connection.
* @param {String}   [typeName=] The new database name. This will be used for the subsequent stategies
* @param {Object}   [configClass={}] An object as in InterConfiguration constructor.
* @param {Object}   [connectClass={}] The new database class. This new class must conform with the InterConnection abstract class.
* @exception {TypeError} thrown when the arguments are not provided
* @return {Bollean} true if the addition was successful.
*/
function addCustomClass (typeName, configClass, connectClass) {
  if (typeName === undefined ||
    configClass === undefined ||
    connectClass === undefined) {
      throw new TypeError('AddCustomClass: Please provide all arguments (typeName, configClass, connectClass)')
  }

  var result = false
  var set = new Set(DB_NAMES)
  if (!set.has(typeName)) {
    DB_NAMES.push(typeName)
    addedConfigClasses = _.merge(addedConfigClasses, configClass)
    addedConnectionClasses = _.merge(addedConnectionClasses, connectClass)
    result = true
  } else {
    console.log('TypeName already exists')
  }

  return result
}

let DB_NAMES = [
  'sqlserver',
  'mysql'
]

const DB_PATHS = [
  '/dbs/SQLServer',
  '/dbs/MySQL'
]

let addedConfigClasses = {}
let addedConnectionClasses = {}

export { selectDb, DB_NAMES, DB_PATHS, addCustomClass }
