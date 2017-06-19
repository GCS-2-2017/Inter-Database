'use strict'

import InterConfiguration from './InterConfiguration'
import configuration from '../configuration/SQLServerConfiguration'
import { formatObject, formatInserValues } from '../helpers/connection'

class SQLServerDatabase extends InterDatabase {
  constructor (connection) {
    super()
    this.connection = connection
  }

  async select (talbe, argument, object) {
    let query = ''
    if (object !== undefined) {
      query = 'SELECT ' + argument + ' FROM' + table + ' WHERE ' + formatObject(object) + ';'
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

  async insert (table, object) {
    const query = 'INSERT INTO ' + table + ' VALUES (' + formatInsertValues(object) + ');'
    try {
      const result = await this.connection.sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default SQLServerInterDatabase
