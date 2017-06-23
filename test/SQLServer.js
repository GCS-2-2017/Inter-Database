import chai from 'chai'
import SQLServer from '../lib/configuration/dbs/SQLServer'
import Connection from '../lib/connection/dbs/SQLServer'
import { formatObject, formatInsertValues } from '../lib/helpers/connection'

const expect = chai.expect

describe('SQL Server instantiation with arguments', () => {
  it('should accept four parameters (database, user, password, options)', () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SQL_CONNECTION = SQL.getConfiguration()

    expect(SQL_CONNECTION._mode).to.be.equal('single')
    expect(SQL_CONNECTION._option.userName).to.be.equal('sa')
    expect(SQL_CONNECTION._option.password).to.be.equal('12345678')
    expect(SQL_CONNECTION._option.server).to.be.equal('177.143.213.117')
  })
})

describe('SQL Server connection', () => {
  // Insert Tests
  it('should use insert method with two parameters (table, object)', async () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SqlServerConnection = new Connection(SQL)

    const workshift = {
      name: 'Workshift Test',
      description: 'Workshift Framework Test'
    }

    const table = '[SEQUENCIALIZADOR].[dbo].[WorkShift]'

    try {
      var result = await SqlServerConnection.insert(table, workshift)
      expect(result).to.be.empty
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  // Select Tests

  it('should use select method with two parameters (table, argument)', async () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SqlServerConnection = new Connection(SQL)
    const table = '[SEQUENCIALIZADOR].[dbo].[WorkShift]'

    try {
      var result = await SqlServerConnection.select(table, '*')
      expect(result).to.be.a('array')
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  it('should use select method with three parameters (table, argument, object)', async () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SqlServerConnection = new Connection(SQL)
    const condition = { name: 'Workshift Test' }
    const table = '[SEQUENCIALIZADOR].[dbo].[WorkShift]'

    try {
      var result = await SqlServerConnection.select(table, '*', condition)
      expect(result).to.be.a('array')
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  // Select Distinct Test

  it('should use selectDistinct method with two parameters (table, column)', async () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SqlServerConnection = new Connection(SQL)

    const table = '[SEQUENCIALIZADOR].[dbo].[WorkShift]'
    const column = 'name' 
    try {
      var result = await SqlServerConnection.selectDistinct(table, '*')
      expect(result).to.be.a('array')
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  // Select Top Test

  it('should use selectTop method with two parameters (table, column)', async () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SqlServerConnection = new Connection(SQL)

    const table = '[SEQUENCIALIZADOR].[dbo].[WorkShift]'

    try {
      var result = await SqlServerConnection.selectTop(table, 3)
      expect(result).to.have.lengthOf(3)
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  // Update Test

  it('should use update method with three parameters (table, condition, object)', async () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SqlServerConnection = new Connection(SQL)

    const workshiftUpdate = { name: 'Workshift Test Update' }
    const condition = { name: 'Workshift Test' }
    const table = '[SEQUENCIALIZADOR].[dbo].[WorkShift]'

    try {
      var result = await SqlServerConnection.update(table, condition, workshiftUpdate)
      expect(result).to.be.empty
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  // Delete Tests

  it('should use delete method with three parameters (argument, table, condition)', async () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SqlServerConnection = new Connection(SQL)

    const table = '[SEQUENCIALIZADOR].[dbo].[WorkShift]'
    const condition = { name: 'Workshift Test Update' }

    try {
      var result = await SqlServerConnection.delete('*', table, condition)
      expect(result).to.be.empty
    } catch (error) {
      console.log(error)
      throw error
    }
  })

})
