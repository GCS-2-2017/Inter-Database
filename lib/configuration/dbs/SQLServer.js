'use strict'

import tp from 'tedious-promises'
import _ from 'lodash'
import InterConfiguration from '../InterConfiguration'

class SQLServer extends InterConfiguration {
  constructor (database, user, password, options) {
    super(database, user, password, options)
    this.databasePort = options.port
  }

  getConfiguration () {
    var connection = tp.setConnectionConfig({
      userName : this.user,
      password: this.password,
      server : this.options.server,
      options : {
        rowCollectionOnRequestCompletion: true,
			  port: this.options.port
      }
    })
    // console.log('Connected in db: ', _.omit(connection, 'password'))
    console.log(connection)
    return connection
  }
}

export default SQLServer
