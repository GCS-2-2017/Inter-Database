import chai from 'chai'
import InterDatabase from '../lib/consumption/InterDatabase'
import MySQLConnection from '../lib/connection/dbs/MySQL'

const expect = chai.expect

describe('InterDatabase', () => {
  describe('instantiation with arguments (database, user, password, options)', () => {
    it('should save correct configuration', () => {
      const INTERDB = new InterDatabase('test', 'root', 'root', {
        host: 'localhost',
        type: 'mysql'
      })
      const CONFIG = INTERDB.interConfiguration.getConfiguration().config
      expect(CONFIG).to.not.be.null
      expect(CONFIG.host).to.be.equal('localhost')
      expect(CONFIG.user).to.be.equal('root')
      expect(CONFIG.password).to.be.equal('root')
      expect(CONFIG.database).to.be.equal('test')
    })

    it('should save correct connection', () => {
      const INTERDB = new InterDatabase('test', 'root', 'root', {
        host: 'localhost',
        type: 'mysql'
      })
      const CONNECTION = INTERDB.interConnection
      expect(CONNECTION).to.not.be.null
      expect(CONNECTION.connection).to.exist
      expect(CONNECTION).to.be.an.instanceof(MySQLConnection)

      expect(CONNECTION.connection.config.host).to.be.equal('localhost')
      expect(CONNECTION.connection.config.user).to.be.equal('root')
      expect(CONNECTION.connection.config.password).to.be.equal('root')
      expect(CONNECTION.connection.config.database).to.be.equal('test')
    })
  })

  describe('instantiation with no arguments', () => {
    it('should save correct connection and configuration', () => {
      const INTERDB = new InterDatabase()

      const CONNECTION = INTERDB.interConnection
      const CONFIG = INTERDB.interConfiguration.getConfiguration()

      expect(CONNECTION).to.not.be.null
      expect(CONNECTION.connection).to.exist

      expect(CONFIG._mode).to.be.equal('single')
      expect(CONFIG._option.userName).to.be.equal('root')
      expect(CONFIG._option.password).to.be.equal('root')
      expect(CONFIG._option.server).to.be.equal('192.168.0.1')
    })
  })

  describe('addDB', () => {
    it('should add correctly a new custom Database', async () => {
      let success = InterDatabase.addDB({
        select: (table, argument, object, thisInstance) => {
          return {
            selectedItems: 'Yay',
            object
          }
        },

        selectDistinct: (table, argument, thisInstance) => {
          return thisInstance.connection.getConfiguration()
        }
      },{
        type: 'sqlite',
        getConfiguration: (thisInstance) => {
          return thisInstance.config
        }
      })

      const SQLITE = new InterDatabase('test', 'root', 'root', {
        host: 'localhost',
        type: 'sqlite'
      })

      const CONFIG = SQLITE.interConfiguration.config

      expect(success).to.be.true
      expect(CONFIG).to.exist
      expect(CONFIG.type).to.be.equal('sqlite')
      expect(CONFIG.database).to.be.equal('test')
      expect(SQLITE.interConfiguration.getConfiguration()).to.be.deep.equal(CONFIG)

      let resultSelect = null
      let resultSelectDistinct = null
      let resultTable = null
      try {
        resultSelect = await SQLITE.interConnection.select('testTable', 'TestArgument', {test: 'Test'})
        resultSelectDistinct = await SQLITE.interConnection.selectDistinct('testTable', 'TestArgument')
        resultTable = await SQLITE.interConnection.table()
      } catch (err) {
        resultSelect = err
        resultSelectDistinct = err
        resultTable = err
      }
      expect(resultSelect).to.not.be.null
      expect(resultSelectDistinct).to.not.be.null
      expect(resultTable).to.not.be.null

      expect(resultSelect).to.have.all.keys(['selectedItems', 'object'])
      expect(resultSelect.selectedItems).to.be.equal('Yay')

      expect(resultSelectDistinct).to.be.deep.equal(CONFIG)
      expect(resultTable instanceof TypeError).to.be.true
      expect(resultTable.message).to.be.equal('table() for sqlite not implemented')
    })
  })

})
