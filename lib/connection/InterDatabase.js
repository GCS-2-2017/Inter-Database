'use strict'

const ERROR_MESSAGE = 'Can not call an abstract method.'

class InterDatabase {
  constructor () {
    if (this.constructor === InterDatabase) {
      throw new TypeError('Can not construct an Abstract class')
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

export default InterDatabase
