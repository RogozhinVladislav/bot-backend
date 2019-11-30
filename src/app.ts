import app from './config/express'
import mongoose from './config/mongoose'
const { PORT } = process.env

import initBot from './helpers/init-bot'
import vk from './helpers/vk'

mongoose()
  .then((info) => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
    app.listen(PORT, () => {
      console.log(`Listenning port: ${PORT}`)
    })
    initBot()
    vk.updates.start().catch(console.error)
  })
  .catch(() => {
    console.error('error')
    process.exit(1)
  })
