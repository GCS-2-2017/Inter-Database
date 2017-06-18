'use strict'
import mysql from 'mysql'
import InterConfiguration from './InterConfiguration'

class MySQLConfiguration extends InterConfiguration {
  constructor (databaseName, databaseServer, databaseUser,
              databasePassword) {
    super(databaseName, databaseServer, databaseUser,
                databasePassword)
  }

  getConfiguration () {
    var connection = mysql.createConnection({
      host : this.databaseServer,
      user : this.databaseUser,
      password: this.databasePassword,
      database : this.databaseName
    })
    return connection
  }
}

export default MySQLConfiguration
