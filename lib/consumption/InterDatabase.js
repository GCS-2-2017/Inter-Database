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
  * @param {Object}   [newDB={}] The new database class. This new class must conform with the InterConnection.
  * @param {Object}   [newConfig={}] An object as in InterConfiguration constructor.
  */
  static addDB (newDB, newConfig) {
    var result = false
    if (typeof newDB === 'object' && typeof newConfig === 'object') {
      let configurationClass = {}
      let connectionClass = {}
      try {
        let getConfiguration = newConfig['getConfiguration']
        // getConfiguration.bind(InterConfiguration)
        configurationClass[newConfig.type] = class extends InterConfiguration {
          // getConfiguration () {
          //   console.log(this.config)
          //   var x = newConfig.getConfiguration
          //   return x
          // }
        }

        connectionClass[newConfig.type] = class extends InterConnection {
          async select (table, argument, object) {
            return newDB.select(table, argument, object) || null
          }
        }

        result = addCustomClass(newConfig.type, configurationClass, connectionClass)
      } catch (err) {
        throw err
      }
    }

    return result
  }
}

export default InterDatabase
