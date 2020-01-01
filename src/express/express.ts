import express from 'express'
import cors from 'cors'
import routes from '../api/routes/v1'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/public', express.static('public'))
app.use('/v1', routes)

export default app
