'use strict'

import InterConfiguration from './InterConfiguration'
import configuration from '../configuration/SQLServerConfiguration'

class SQLServerDatabase extends InterDatabase {
  constructor (connection) {
    super()
    this.connection = connection
  }

  select (argument, table) {
    const query = 'SELECT' + argument + 'FROM' + table
    this.connection.sql(query).execute()
  }

  insert (table, object) {
    const query = 'INSERT INTO' + table + 'VALUES' + object
    this.connection.sql(query).execute()
  }
}

export default SQLServerInterDatabase