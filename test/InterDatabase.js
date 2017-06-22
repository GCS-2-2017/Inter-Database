import chai from 'chai'
import InterDatabase from '../lib/consumption/InterDatabase'
import MySQLConnection from '../lib/connection/dbs/MySQL'

const expect = chai.expect

describe('InterDatabase instantiation with arguments (database, user, password, options)', () => {
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
