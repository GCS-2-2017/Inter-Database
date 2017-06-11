// Entry point of framework
import express from 'express'
import api from './src/routes/index'

let app = express()
app.use('/framework', api(app))
app.listen(3000, () => {
  console.log('Server ON http://localhost:3000')
})
