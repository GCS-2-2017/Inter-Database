'use strict'

import tp from 'tedious-promises'
import _ from 'lodash'
import InterConfiguration from '../InterConfiguration'

class SQLServer extends InterConfiguration {
  constructor (database, user, password, options) {
    super(database, user, password, options)
  }

  getConfiguration () {
    var connection = tp.setConnectionConfig({
      userName : this.config.user,
      password: this.config.password,
      server : this.config.server,
      options : {
        rowCollectionOnRequestCompletion: true,
			  port: this.config.port
      }
    })
    // console.log('Connected in db: ', _.omit(connection, 'password'))
    return connection
  }
}

export default SQLServer
