'use strict'

class InterDatabase {
  constructor () {
    if (this.constructor === InterDatabase) {
      throw new TypeError('Can not construct an Abstract class')
    }
  }
}

export default InterDatabase
