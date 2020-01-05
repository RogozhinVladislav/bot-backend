import Chance from 'chance'

import Command from '../api/models/command.model'
import vk from './vk'

const chance = new Chance()

const string1 = 'ляпоса $'
const reg = new RegExp(string1.replace('$', '(.+)'))
const templateString = '$ получил ляпоса'

export default () => {
  return new Promise((resolve, reject) => {
    vk.updates.hear(reg, async context => {
      const userResource = await vk.snippets.resolveResource(context.$match[1])
      const user = await vk.api.users.get({ user_id: userResource.id })
      const userSender = await vk.api.users.get({
        user_id: context.payload.from_id,
      });
      const targetUser = chance.pickone([user, userSender])

      const answerString = templateString.replace('$', user[0].first_name)

      await context.send(`${answerString}`)
    });

    vk.updates.hear('hi', async context => {
      context.send('hello')
    });
    
    Command.find()
      .lean()
      .exec((err, commands) => {
        commands.forEach(command => {
          if (command.trigger) {
            vk.updates.hear(command.trigger, async context => {
              const sendPhoto: any = command.imageAttachment
                ? context.sendPhoto(command.imageAttachment)
                : Promise.resolve()
              const sendAudio: any = command.audioAttachment
                  ? context.sendAudioMessage(command.audioAttachment)
                  : Promise.resolve()
              await Promise.all([context.send(command.answer), sendPhoto, sendAudio])
            })
          }
        })
        resolve({ commandsCount: commands.length })
      })
  })
}
