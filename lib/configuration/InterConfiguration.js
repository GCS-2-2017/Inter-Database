'use strict'

class InterConfiguration {
  /**
  * Constructor implementation required
  * @param {String}   [database] The name of the database
  * @param {String}   [username=null] The username which is used to authenticate against the database.
  * @param {String}   [password=null] The password which is used to authenticate against the database. Supports SQLCipher encryption for SQLite.
  */
  constructor (database, host, user, password){
    if (this.constructor === InterConfiguration) {
      throw new TypeError('Can not construct an Abstract class')
    } else{
      this.database = database
      this.host = host
      this.user = user
      this.password = password
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
