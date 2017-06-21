'use strict'
import _ from 'lodash'

class InterConfiguration {
  /**
  * Constructor implementation required
  * @param {String}   [database=null] The name of the database
  * @param {String}   [username=null] The username which is used to authenticate against the database.
  * @param {String}   [password=null] The password which is used to authenticate against the database.
  * @param {Object}   [options={}] An object with further options to configure the database.
  * @param {String}   [options.host='localhost'] The host of the database. (If not overwritten is equals localhost)
  * @param {Integer}  [options.port=] The port of the database.
  * @param {String}   [options.type='sqlserver'] The type of the database to connect with. (If not overwritten is equals sqlserver)
  * @param {String}   [options.server=] The server of the database to connect with. (Only sqlserver)
  */
  constructor (database, user, password, options) {
    let config = {}
    if (this.constructor !== InterConfiguration) {
      if (arguments.length >= 4 && typeof options === 'object') {
        config = {database, user, password}
        options.host = options.host || 'localhost'
        options.type = options.type || 'sqlserver'

      } else if (arguments.length === 1 && typeof database === 'object') {
        options = database.options || database || {}
        config = database.config || {
          database: '',
          user: '',
          password: ''
        }
        options.type = options.type || 'sqlserver'
      } else {
        // Temporary error
        // TODO - Method Overload to handle different inputs in argument
        throw new TypeError('Please provide all arguments to constructor (database, user, password, options)')
      }
    } else {
      config = {database, user, password}
      this = _.clone(getInstance(config, options))
    }
  }

  /**
  * Implementation required
  */
  getConnection () {
    throw new TypeError('Do not call abstract method getConnection from child.')
  }

  getInstance (config, options) {
    if (this.constructor !== InterConfiguration) {
      return this
    }

    let DbType

    switch (options.type){
      case 'mysql':
        DbType = require('./dbs/MySQL')
        break
      case 'sqlserver':
        DbType = require('./dbs/SQLServer')
        break
      default:
        throw new Error('The class ' + options.type + ' is not yet supported. Implement your own and add it.')
    }

    this.config = {
      database: config.database,
      user: config.user,
      password: config.password
      // ...
    }

    this.options = options || {}

    return new DbType(this)
  }

}

export default InterConfiguration
