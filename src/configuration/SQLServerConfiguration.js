'use strict'

import sqlserver from 'tedious-promises'
import InterConfiguration from './InterConfiguration'

class SQLServerConfiguration extends InterConfiguration {
  constructor (databaseName, databaseServer, databaseUser, databasePassword, databasePort) {
    super(databaseName, databaseServer, databaseUser, databasePassword)
    this.databasePort = databasePort
  }

  getConfiguration () {
    var connection = sqlserver.setConnectionConfig({
      userName : this.databaseName,
      password: this.databasePassword,
      server : this.databaseServer,
      options : {
        rowCollectionOnRequestCompletion: true,
			  port: this.databasePort
      }
    })
    return connection
  }
}

export default SQLServerConfiguration