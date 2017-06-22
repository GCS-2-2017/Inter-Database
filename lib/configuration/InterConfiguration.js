'use strict'
import _ from 'lodash'
import { selectDb } from '../helpers/strategy'

class InterConfiguration {
  /**
  * Constructor implementation required
  * @param {String}   [database=null] The name of the database.
  * @param {String}   [user=null] The username which is used to authenticate against the database.
  * @param {String}   [password=null] The password which is used to authenticate against the database.
  * @param {Object}   [options={}] An object with further options to configure the database.
  * @param {String}   [options.host='localhost'] The host of the database. (If not overwritten is equals localhost)
  * @param {Integer}  [options.port=] The port of the database.
  * @param {String}   [options.type='sqlserver'] The type of the database to connect with. (If not overwritten is equals sqlserver)
  * @param {String}   [options.server=] The server of the database to connect with. (Only sqlserver)
  * @exception {TypeError} thrown when tried to instatiate abstract class or required params are not provided
  */
  constructor (database, user, password, options) {
    let config = {}

    if (this.constructor !== InterConfiguration) { // Child only
      if (arguments.length >= 4 && typeof options === 'object') {
        config = {database, user, password}
        options.host = options.host || 'localhost'
        options.type = options.type || 'sqlserver'

      } else {
        // Temporary error
        // TODO - Method Overload to handle different inputs in argument
        throw new TypeError('Please provide all arguments to constructor (database, user, password, options)')
      }
    } else {
      throw new TypeError('Cannot instantiate an abstract class')
    }

    this.config = {
      database: config.database,
      user: config.user,
      password: config.password
      // ...
    }

    options = options || {}

    this.config = _.merge(this.config, options)
  }

  /**
  * Implementation required
  * @exception {TypeError} thrown when method is not implement on child class
  */
  getConnection () {
    throw new TypeError('Do not call abstract method getConnection from child.')
  }

  /**
  * @param {String}   [database=null] The name of the database.
  * @param {String}   [user=null] The username which is used to authenticate against the database.
  * @param {String}   [password=null] The password which is used to authenticate against the database.
  * @param {Object}   [options={}] An object with further options to configure the database.
  * @exception {Error} thrown when database is not yet supported by framework.
  * @return {Object} actual instance based on database type
  */
  static getInstance (database, user, password, options) {
    if (this !== InterConfiguration) {
      return this
    }

    let DbStrategy = selectDb(options.type, '../configuration')

    return new DbStrategy.default(database, user, password, options)
  }

  /**
  * @return {Object} config object setUp
  */
  getConfiguration () {
    return this.config
  }
}

module.exports = InterConfiguration
