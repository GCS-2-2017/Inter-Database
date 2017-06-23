import chai from 'chai'
import MySQL from '../lib/configuration/dbs/MySQL'
import InterConnection from '../lib/connection/InterConnection'

const expect = chai.expect

describe('InterConnection instantiation with arguments', () => {
  it('should not create by your constructor', () => {
    const SQL = new MySQL('test', 'root', 'root', {
      host: 'localhost'
    })
    // const connection = new InterConnection(SQL)
    // expect(connection).to.throw
  })
})