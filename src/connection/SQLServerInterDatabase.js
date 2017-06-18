'use strict'

import InterConfiguration from './InterConfiguration'
import configuration from '../configuration/SQLServerConfiguration'
import { formatQuery } from '../helpers/connection'

class SQLServerDatabase extends InterDatabase {
  constructor (connection) {
    super()
    this.connection = connection
  }

  async select (talbe, argument, object) {
    let query = ''
    if (object !== undefined) {
      query = 'SELECT ' + argument + ' FROM' + table + ' WHERE ' + formatQuery(object) + ';'
    } else {
      query = 'SELECT ' + argument + ' FROM' + table + ';'
    }
    try {
      const result = await this.connection.sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  insert (table, object) {
    const query = 'INSERT INTO' + table + 'VALUES' + object
    this.connection.sql(query).execute()
  }
}

export default SQLServerInterDatabase
