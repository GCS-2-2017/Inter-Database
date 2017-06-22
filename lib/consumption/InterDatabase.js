import InterConfiguration from '../configuration/InterConfiguration'
import InterConnection from '../connection/InterConnection'
import { addCustomClass } from '../helpers/strategy'

class InterDatabase {
  constructor (database, user, password, options) {
    this.interConfiguration = InterConfiguration.getInstance(database, user, password, options)
    this.interConnection = InterConnection.getInstance(this.interConfiguration)
  }

  /**
  * Add new custom database to the hierarchy of databases in Configuration and Connection.
  * @param {Object}   [newDB={}] The new database class. This new class must conform with the InterConnection abstract class.
  * @param {Object}   [newConfig={}] An object as in InterConfiguration constructor.
  * @return {Bollean} true if the addition was successful
  */
  static addDB (newDB, newConfig) {
    var result = false
    if (typeof newDB === 'object' && typeof newConfig === 'object') {
      let configurationClass = {}
      let connectionClass = {}
      try {
        configurationClass[newConfig.type] = class extends InterConfiguration {
          getConfiguration () {
            return newConfig.getConfiguration(this)
          }
        }

        connectionClass[newConfig.type] = class extends InterConnection {
          async select (table, argument, object) {
            return newDB.select ? newDB.select(table, argument, object, this) :
            new TypeError('select() for ' + newConfig.type + ' not implemented')
          }

          async selectDistinct (table, argument) {
            return newDB.selectDistinct ? newDB.selectDistinct(table, argument, this) :
            new TypeError('selectDistinct() for ' + newConfig.type + ' not implemented')
          }

          async insert (table, object) {
            return newDB.insert ? newDB.insert(table, object, this) :
            new TypeError('insert() for ' + newConfig.type + ' not implemented')
          }

          async table () {
            return newDB.table ? newDB.table(this) :
            new TypeError('table() for ' + newConfig.type + ' not implemented')
          }

          async where () {
            return newDB.where ? newDB.where(this) :
            new TypeError('where() for ' + newConfig.type + ' not implemented')
          }

          async orderBy () {
            return newDB.orderBy ? newDB.orderBy(this) :
            new TypeError('orderBy() for ' + newConfig.type + ' not implemented')
          }

          async execute () {
            return newDB.execute ? newDB.execute(this) :
            new TypeError('execute() for ' + newConfig.type + ' not implemented')
          }
        }

        result = addCustomClass(newConfig.type, configurationClass, connectionClass)
      } catch (err) {
        throw err
      }
    }

    return result
  }

  getConfiguration () {
    return this.interConfiguration.getConfiguration()
  }
  
}

export default InterDatabase
