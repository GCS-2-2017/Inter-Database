'use strict'

import { InterConnection } from '../InterConnection'
import { formatObject, formatInserValues } from '../../helpers/connection'

class MySQL extends InterConnection {
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
      const result = await this.connection.getConfiguration().query(query)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async selectDistinct (table, argument) {
    const query = 'SELECT DISTINCT ' + argument + ' FROM ' + table + ';'
    try {
      const result = await this.connection.getConfiguration().query(query)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async insert (table, object) {
    const query = 'INSERT INTO ' + table + ' VALUES (' + formatInsertValues(object) + ');'
    try {
      const result = await this.connection.getConfiguration().query(query)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (table, condition, object) {
    const query = 'UPDATE ' + table  + ' SET ' +  formatObject(object) + ' WHERE ' + formatObject(condition) + ';'
    try {
      const result = await this.connection.getConfiguration().query(query)
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
      const result = await this.connection.getConfiguration().query(query)
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
      const result = await this.connection.getConfiguration().query(query)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async join (attribute1, attribute2, tableA, tableB, joinType) { // ex: tableA = {tableA: {attribute: value}}
    const query = 'SELECT ' + attribute1 +  ', ' + attribute2
                  ' FROM ' + Object.keys(tableA) + ' AS A ' +
                  joinType + ' JOIN' + Object.keys(tableB) + ' AS B ' +
                  'ON ' + attribute1 + ' = ' + attribute2
    try {
      const result = await this.connection.getConfiguration().query(query)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default MySQL
