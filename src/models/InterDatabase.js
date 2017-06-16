'use strict'

class InterDatabase {
  constructor () {
    if (this.constructor === InterDatabase) {
      throw new TypeError('Can not construct an Abstract class')
    }
  }

  table () {
    throw new TypeError('Can not call a abstract method')
  }

  where () {
    throw new TypeError('Can not call a abstract method')
  }

  orderBy () {
    throw new TypeError('Can not call a abstract method')
  }

  join () {
    throw new TypeError('Can not call a abstract method')
  }

  join_on () {
    throw new TypeError('Can not call a abstract method')
  }

  db_link () {
    throw new TypeError('Can not call a abstract method')
  }

  select () {
    throw new TypeError('Can not call a abstract method')
  }

  insert () {
    throw new TypeError('Can not call a abstract method')
  }

  update () {
    throw new TypeError('Can not call a abstract method')
  }

  delete () {
    throw new TypeError('Can not call a abstract method')
  }

  execute () {
    throw new TypeError('Can not call a abstract method')
  }

  execute_cout () {
    throw new TypeError('Can not call a abstract method')
  }

  catch () {
    throw new TypeError('Can not call a abstract method')
  }
}

export default InterDatabase
