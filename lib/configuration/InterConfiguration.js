'use strict'

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
    if (this.constructor === InterConfiguration) {
      throw new TypeError('Can not construct an Abstract class')
    } else {
      if (arguments.length >= 4 && typeof options === 'object') {
        this.database = database
        this.user = user
        this.password = password
        this.options = options
        this.options.host = options.host || 'localhost'
        this.options.type = options.type || 'sqlserver'
      } else {
        // Temporary error
        // TODO - Method Overload to handle different inputs in argument
        throw new TypeError('Please provide all arguments to constructor (database, user, password, options)')
      }
    }
  }

  /**
  * Implementation required
  */
  getConnection () {
    throw new TypeError('Do not call abstract method getConnection from child.')
  }
}

export default InterConfiguration
