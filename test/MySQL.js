import chai from 'chai'
import MySQL from '../lib/configuration/dbs/MySQL'

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
