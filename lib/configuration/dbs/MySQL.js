'use strict'
import mysql from 'mysql'
import InterConfiguration from '../InterConfiguration'

class MySQL extends InterConfiguration {
  constructor (database, host, user, password) {
    super(database, host, user, password)
  }

  getConfiguration () {
    var connection = mysql.createConnection({
      host : this.host,
      user : this.user,
      password: this.password,
      database : this.database
    })
    return connection
  }
}

export default MySQL
