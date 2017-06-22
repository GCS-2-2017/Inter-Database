import chai from 'chai'
import InterDatabase from '../lib/consumption/InterDatabase'

const expect = chai.expect

describe('InterDatabase instantiation with arguments', () => {
  it('should accept four parameters (database, user, password, options)', () => {
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
    // expect(true).to.be.true
  })
})
