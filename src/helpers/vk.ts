import { VK } from 'vk-io'
import config from '../config'

const vk = new VK({
  token: config.TOKEN,
})

export default vk
