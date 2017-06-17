'use strict'

class InterConfiguration {
  constructor (databaseServer, databaseUser, databasePassword) {
    if (this.constructor === InterConfiguration) {
      throw new TypeError('Can not construct an Abstract class')
    }
    else {
      this.databaseServer = databaseServer
      this.databaseUser = databaseUser
      this.databasePassword = databasePassword
    }
  }
  
  static getConfiguration () {
    if (this === InterConfiguration) {
      // Error: Abstract methods can not be called directly.
      throw new TypeError('Can not call static abstract method getConfiguration')
    } else if (this.getConfiguration === InterConfiguration.getConfiguration) {
      // Error: The child has not implemented this method.
      throw new TypeError('Please implement static abstract method getConfiguration')
    } else {
      // Error: The child has implemented this method but also called `super.getConfiguration()`.
      throw new TypeError('Do not call static abstract method getConfiguration from child')
    }
  }
}

export default InterConfiguration
