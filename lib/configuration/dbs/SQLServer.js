'use strict'

import tp from 'tedious-promises'
import _ from 'lodash'
import InterConfiguration from '../InterConfiguration'

class SQLServer extends InterConfiguration {
  constructor (databaseUser, databasePassword, databaseServer,  databasePort) {
    super(databaseServer, databaseUser, databasePassword)
    this.databasePort = databasePort
  }

  getConfiguration () {
    var connection = tp.setConnectionConfig({
      userName : this.databaseUser,
      password: this.databasePassword,
      server : this.databaseServer,
      options : {
        rowCollectionOnRequestCompletion: true,
			  port: this.databasePort
      }
    })
    // console.log('Connected in db: ', _.omit(connection, 'password'))
    console.log(connection)
    return connection
  }
}

export default SQLServer
