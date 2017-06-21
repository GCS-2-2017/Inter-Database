import config from '../configuration/InterConfiguration'
import database from '../connection/InterConnection'


class InterDatabase {

  constructor (database, user, password, options) {
    this.interConfiguration = config(database, user, password, options)
  }
}
