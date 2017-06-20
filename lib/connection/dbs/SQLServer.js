'use strict'

import InterConnection from '../InterConnection'
import { formatObject, formatInserValues } from '../../helpers/connection'

class SQLServer extends InterConnection {
  constructor (connection) {
    super()
    this.connection = connection
  }

  async select (table, argument, object) {
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

  async update (table, condition, object) {
    const query = 'UPDATE ' + table  + ' SET ' +  formatObject(object) + ' WHERE ' + formatObject(condition) + ';'
    try {
      const result = await this.connection.sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (argument, table, condition) {
    let query = ''
    if (object !== undefined) {
      query = 'DELETE FROM ' + table + ' WHERE ' +  formatObject(condition) + ';'
    } else if (condition !== undefined){
      query = 'DELETE ' + argument + ' FROM ' + table + ';'
    } else {
      // Nothing to do
    }
    
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