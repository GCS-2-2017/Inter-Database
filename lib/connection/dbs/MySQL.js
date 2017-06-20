'use strict'

import InterConnection from '../InterConnection'

class MySQL extends InterConnection {
  constructor (connection) {
    super()
    this.connection = connection
  }
}

export default MySQL
