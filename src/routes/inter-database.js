import InterDatabaseController from '../api/InterDatabaseController'
import { Router } from 'express'

export default () => {
  let app = Router()
  let interDatabaseController = new InterDatabaseController()

  // This method was created as test
  // app.get('/', (request, response) => {
  //  interDatabaseController.test(request, response)
  // })

  return app
}
