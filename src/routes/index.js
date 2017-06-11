import interDatabase from './inter-database'
import { Router } from 'express'

export default () => {
  let app = Router()
  app.use('/inter-database', interDatabase(app))

  return app
}
