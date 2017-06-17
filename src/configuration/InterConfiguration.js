'use strict'

class InterConfiguration {
  constructor(databaseName, databaseServer, databaseUser,
              databasePassword){
    if (this.constructor === InterConfiguration) {
      throw new TypeError('Can not construct an Abstract class')
    } else{
      this.databaseName = databaseName
      this.databaseServer = databaseServer
      this.databaseUser = databaseUser
      this.databasePassword = databasePassword
    }
  }

  getConnection () {
    throw new TypeError('Do not call abstract method foo from child.')
  }
}

export default InterConfiguration
