'use strict'

import InterConnection from '../InterConnection'
import { formatObject, formatInsertValues } from '../../helpers/connection'
import { convertAttributeTypes } from '../../types/dbs/SQLServer'

class SQLServer extends InterConnection {
  constructor (connection) {
    super(connection)
  }

  async select (table, argument, object) {
    let query = ''
    if (object !== undefined) {
      query = 'SELECT ' + argument + ' FROM' + table + ' WHERE ' + formatObject(object) + ';'
    } else {
      query = 'SELECT ' + argument + ' FROM' + table + ';'
    }
    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async insert (table, object) {
    const query = 'INSERT INTO ' + table + ' VALUES (' + formatInsertValues(object) + ');'
    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (table, condition, object) {
    const query = 'UPDATE ' + table  + ' SET ' +  formatObject(object) + ' WHERE ' + formatObject(condition) + ';'
    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (argument, table, condition) {
    let query = ''
    if (argument !== undefined) {
      query = 'DELETE FROM ' + table + ' WHERE ' +  formatObject(condition) + ';'
    } else if (condition !== undefined){
      query = 'DELETE ' + argument + ' FROM ' + table + ';'
    } else {
      query = 'DELETE ' + argument + ' FROM ' + table + ' WHERE ' +  formatObject(condition) + ';'
    }

    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async orderBy (argument, tables, sortObject) {
    let query = ''

    if (typeof argument !== 'string') {
      argument = formatArray(argument)
    } else {
      // Nothing to do
    }

    if (typeof sortObject[0] === 'string') { // Check object type
      query = 'SELECT ' + argument + ' FROM ' + table + ' ORDER BY ' + formatArray(sortObject) + ';'
    }
    else {
      query = 'SELECT ' + argument + ' FROM ' + table + ' ORDER BY ' + formatSortObject(sortObject) + ';'
    }

    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async innerJoin (attribute1, attribute2, tableA, tableB) { // ex: tableA = {tableA: {attribute: value}}
    const query = 'SELECT ' + attribute1 +  ', ' + attribute2
                  ' FROM ' + Object.keys(tableA) + ' as A ' +
                  'INNER JOIN' + Object.keys(tableB) + ' as B ' +
                  'on ' + attribute1 + ' = ' + attribute2
    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async leftJoin (attribute1, attribute2, tableA, tableB) {
    const query = 'SELECT ' + attribute1 +  ', ' + attribute2
                  ' FROM ' + Object.keys(tableA) + ' as A ' +
                  'LEFT JOIN' + Object.keys(tableB) + ' as B ' +
                  'on ' + attribute1 + ' = ' + attribute2
    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async rightJoin (attribute1, attribute2, tableA, tableB) {
    const query = 'SELECT ' + attribute1 +  ', ' + attribute2
                  ' FROM ' + Object.keys(tableA) + ' as A ' +
                  'RIGHT JOIN' + Object.keys(tableB) + ' as B ' +
                  'on ' + attribute1 + ' = ' + attribute2
    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async outerJoin (attribute1, attribute2, tableA, tableB) {
    const query = 'SELECT ' + attribute1 +  ', ' + attribute2
                  ' FROM ' + Object.keys(tableA) + ' as A ' +
                  'OUTER JOIN' + Object.keys(tableB) + ' as B ' +
                  'on ' + attribute1 + ' = ' + attribute2
    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async createTable (table, object) {
    const query = 'CREATE TABLE ' + table + ' ( ' + convertAttributeTypes(object) + ' );'
    try {
      const result = await this.connection.getConfiguration().sql(query).execute()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default SQLServer
