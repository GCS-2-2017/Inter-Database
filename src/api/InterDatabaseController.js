'use strict'

import SQLServerConfiguration from '../configuration/SQLServerConfiguration'
import InterDatabase from '../models/InterDatabase'
import MySQLConfiguration from '../configuration/MySQLConfiguration'

class InterDatabaseController {
  constructor () {
  }

  // Test to sql server connection
  test() {
  //  var database = new InterDatabase()
    var sql = new MySQLConfiguration('test', 'localhost', 'root', 'root')
    sql.getConfiguration()
  }
}

export default InterDatabaseController
