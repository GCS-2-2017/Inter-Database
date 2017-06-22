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
        dbClass = require(dirPath+dbPaths[index])
        break
      } catch (err) {
        throw err
      }
    }
    index += 1
  }

  return dbClass
}

const DB_NAMES = [
  'mysql',
  'sqlserver'
]

const DB_PATHS = [
  '/dbs/MySQL',
  '/dbs/SQLServer'
]

export { selectDb, DB_NAMES, DB_PATHS }
