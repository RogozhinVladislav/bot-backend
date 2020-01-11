import app from './express/express'
import mongoose from './express/mongoose'
const { PORT } = process.env

import initBot from './helpers/init-bot'
import vk from './helpers/vk'

app.listen(PORT, () => {
  console.log(`Listenning port: ${PORT}`)
})

vk.updates.hear('hi', async context => {
  context.send('hellozxx')
});

vk.updates.start().catch(console.error)

// mongoose()
//   .then((info:any) => {
//     console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
//     app.listen(PORT, () => {
//       console.log(`Listenning port: ${PORT}`)
//     })
//     initBot()
//     vk.updates.start().catch(console.error)
//   })
//   .catch(() => {
//     console.error('error')
//     process.exit(1)
//   })
