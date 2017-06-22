'use strict'
import InterConfiguration from '../configuration/InterConfiguration'
import { selectDb } from '../helpers/strategy'

const ERROR_MESSAGE = 'Can not call an abstract method.'

class InterConnection {
  constructor (connection) {
    if (this.constructor === InterConnection) {
      throw new TypeError('Can not construct an Abstract class')
    }
    if (connection instanceof InterConfiguration) {
      this.connection = connection
    } else {
      throw new TypeError('Connection type ' + typeof connection + ' not known.')
    }
  }

  static getInstance (connection) {
    if (this !== InterConnection) {
      return this
    }
    if (connection instanceof InterConfiguration) {
      let DbStrategy = selectDb(connection.config.type, '../connection')

      return new DbStrategy.default(connection)
    } else {
      throw new TypeError('Connection type ' + typeof connection + ' not known.')
    }
  }

  /**
  * Implementation required
  */
  table () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  where () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  orderBy () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  join () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  join_on () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  db_link () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  select () {
    throw new TypeError(ERROR_MESSAGE)
  }

   /**
  * Implementation required
  */
  selectDistinct () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  insert () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  update () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  delete () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  execute () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  execute_cout () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  catch () {
    throw new TypeError(ERROR_MESSAGE)
  }
}

export default InterConnection
