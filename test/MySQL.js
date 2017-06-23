import chai from 'chai'
import MySQL from '../lib/configuration/dbs/MySQL'
import Connection from '../lib/connection/dbs/MySQL'
import { formatObject, formatInsertValues } from '../lib/helpers/connection'

const expect = chai.expect

describe('MySQL instantiation with arguments', () => {
  it('should accept four parameters (database, user, password, options)', () => {
    const SQL = new MySQL('test', 'root', 'root', {
      host: 'localhost'
    })
    const SQL_CONNECTION = SQL.getConfiguration().config

    expect(SQL_CONNECTION.host).to.be.equal('localhost')
    expect(SQL_CONNECTION.user).to.be.equal('root')
    expect(SQL_CONNECTION.password).to.be.equal('root')
    expect(SQL_CONNECTION.database).to.be.equal('test')
  })
})

describe('MySQL connection', () => {
  it('should use insert method with two parameters (table, object)', async () => {
    const SQL = new MySQL('test', 'root', 'root', {
      host: 'localhost'
    })
    const MySQLConnection = new Connection(SQL)

    const object = {
      name: '',
      description: ''
    }
    const table = ''

    try {
      var result = await MySQLConnection.insert(table, object)
      expect(result).to.be.an('object')
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  it('should use select method with two parameters (table, argument)', async () => {
    const SQL = new MySQL('test', 'root', 'root', {
      host: 'localhost'
    })
    const MySQLConnection = new Connection(SQL)
    const table = ''

    try {
      var result = await MySQLConnection.select(table, '*')
      expect(result).to.be.an('object')
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  it('should use select method with three parameters (table, argument, object)', async () => {
    const SQL = new MySQL('test', 'root', 'root', {
      host: 'localhost'
    })
    const MySQLConnection = new Connection(SQL)
    const condition = {}
    const table = ''

    try {
      var result = await MySQLConnection.select(table, '*', condition)
      expect(result).to.be.an('object')
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  it('should use selectDistinct method with two parameters (table, column)', async () => {
    const SQL = new MySQL('test', 'root', 'root', {
      host: 'localhost'
    })
    const MySQLConnection = new Connection(SQL)
    const table = ''
    try {
      var result = await MySQLConnection.selectDistinct(table, '*')
      expect(result).to.be.a('object')
    } catch (error) {
      console.log(error)
      throw error
    }
  })
})
