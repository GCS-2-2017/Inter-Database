import chai from 'chai'
import MySQL from '../lib/configuration/dbs/MySQL'

const expect = chai.expect

describe('MySQL instantiation with arguments', () => {
  it('should accept four parameters (databaseName, databaseServer, databaseUser, databasePassword)', () => {
    const SQL = new MySQL('test', 'localhost', 'root', 'root')
    const CONFIG = SQL.getConfiguration().config

    expect(CONFIG.host).to.be.equal('localhost')
    expect(CONFIG.user).to.be.equal('root')
    expect(CONFIG.password).to.be.equal('root')
    expect(CONFIG.database).to.be.equal('test')
  })
})
