import { VK } from 'vk-io'
const { TOKEN } = process.env

const vk = new VK({
  token: TOKEN,
})

export default vk
