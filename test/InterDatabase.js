import chai from 'chai'
import InterDatabase from '../lib/consumption/InterDatabase'

const expect = chai.expect

let options

describe('InterDatabase instantiation with arguments', () => {
  it('should accept four parameters (database, user, password, options)', () => {
    const INTERDB = new InterDatabase ('test', 'root', 'root', {
      host: 'localhost',
      type: 'mysql'
    })

    expect(INTERDB.interConfiguration).to.not.be.null
  })
})
