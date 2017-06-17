'use strict'

import SQLServerConfiguration from '../configuration/SQLServerConfiguration'

class InterDatabaseController {
  constructor () {
  }

  // Test to sql server connection 
  // test(request, response) {
  //  try {
  //   var database = new SQLServerConfiguration('sa', '12345678', '177.143.213.117', '9990')
  //   var configuration = database.getConfiguration()
  //   response.json(configuration)
  //  } catch (error) {
  //   console.log(error)
  //   response.json(error)
  //  }
  // }

}

export default InterDatabaseController
