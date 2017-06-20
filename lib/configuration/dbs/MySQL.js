'use strict'
import mysql from 'mysql'
import InterConfiguration from '../InterConfiguration'

class MySQL extends InterConfiguration {
  constructor (database, user, password, options) {
    super(database, user, password, options)
  }

  getConfiguration () {
    var connection = mysql.createConnection({
      host : this.options.host,
      user : this.user,
      password: this.password,
      database : this.database
    })
    return connection
  }
}

export default MySQL
