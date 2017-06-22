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
    }
  })

  it('should use update method with two parameters (table, object)', async () => {
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
    }
  })

  it('should use delete method with two parameters (table, object)', async () => {
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
    const condition = { name: 'Workshift Test' }

    try {
      var result = await SqlServerConnection.delete('*', table, condition)
      expect(result).to.be.empty
    } catch (error) {
      console.log(error)
    }
  })
})
