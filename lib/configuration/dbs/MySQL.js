'use strict'
import mysql from 'mysql'
import { InterConfiguration } from '../InterConfiguration'

class MySQL extends InterConfiguration {
  constructor (database, user, password, options) {
    super(database, user, password, options)
  }

  getConfiguration () {
    var connection = mysql.createConnection({
      host : this.config.host,
      user : this.config.user,
      password: this.config.password,
      database : this.config.database
    })
    return connection
  }
}

export default MySQL
