'use strict'

class InterConfiguration {
  constructor (databaseName, databasePort, databaseServer, databaseUser, databasePassword, databaseType, databaseDBLinkName, databaseDBLinkType) {
    if (this.constructor === InterConfiguration) {
      throw new TypeError('Can not construct an Abstract class')
    }
    else {
      // this.useDatabase = true
      this.databaseName = databaseName
      this.databasePort = databasePort
      this.databaseServer = databaseServer
      this.databaseUser = databaseUser
      this.databasePassword = databasePassword
      this.databaseType = databaseType
      this.databaseDBLinkName = databaseDBLinkName
      this.databaseDBLinkType = databaseDBLinkType
    }
  }
  
  static openConnection () {
    if (this === InterConfiguration) {
      // Error: Abstract methods can not be called directly.
      throw new TypeError('Can not call static abstract method openConnection')
    } else if (this.openConnection === InterConfiguration.openConnection) {
      // Error: The child has not implemented this method.
      throw new TypeError('Please implement static abstract method openConnection')
    } else {
      // Error: The child has implemented this method but also called `super.openConnection()`.
      throw new TypeError('Do not call static abstract method openConnection from child')
    }
  }

  static closeConnection () {
    if (this === InterConfiguration) {
      throw new TypeError('Can not call static abstract method closeConnection')
    } else if (this.closeConnection === InterConfiguration.closeConnection) {
      throw new TypeError('Please implement static abstract method closeConnection')
    } else {
      throw new TypeError('Do not call static abstract method closeConnection from child')
    }
  }
}

export default InterConfiguration
