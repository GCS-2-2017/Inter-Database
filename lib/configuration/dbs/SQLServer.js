'use strict'

import tp from 'tedious-promises'
import _ from 'lodash'
import InterConfiguration from '../InterConfiguration'

class SQLServer extends InterConfiguration {
  constructor (database, user, password, options) {
    super(database, user, password, options)
    this.server = options.server
    this.databasePort = options.port
  }

  getConfiguration () {
    var configuration = tp.setConnectionConfig({
      userName : this.config.user,
      password: this.config.password,
      server : this.server,
      options : {
        rowCollectionOnRequestCompletion: true,
			  port: this.databasePort
      }
    })
    // console.log('Connected in db: ', _.omit(connection, 'password'))
    return configuration
  }
}

export default SQLServer
