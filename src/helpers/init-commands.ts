import Chance from 'chance'
import petrovich  from 'petrovich'
import vk from './vk'

import Command from '../api/models/command.model'
import Interaction from '../api/models/interaction.model'

const chance = new Chance()

const string1 = 'ляпоса $'
const reg = new RegExp(string1.replace('$', '(.+)'))
const templateString = '$ получил ляпоса'

export default () => {
  return new Promise((resolve, reject) => {
    // vk.updates.hear(reg, async context => {
    //   debugger
    //   const userResource = await vk.snippets.resolveResource(context.$match[1])
    //   const user = await vk.api.users.get({ user_id: userResource.id })
    //   const userSender = await vk.api.users.get({
    //     user_id: context.payload.from_id,
    //   });
    //   const targetUser = chance.pickone([user, userSender])

    //   const answerString = templateString.replace('$', user[0].first_name)

    //   await context.send(`${answerString}`)
    // });
    debugger
    console.log('hee1231231231ellooo')

    vk.updates.hear('hi', async context => {
      debugger
      context.send('hello')
    });

    // vk.updates.on('message', async (context, next) => {
    //   console.log('on | context', context)
    //   debugger
    // })

    vk.updates.hear('test', async (context, next) => {
      console.log('hear | context', context)
      debugger
    })

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

    Interaction.find()
      .lean()
      .exec((err, interactions) => {
        interactions.forEach(interaction => {
          if (interaction.trigger) {
            const reg = new RegExp(interaction.trigger.replace('$', '(.+)'))
            vk.updates.hear(reg, async context => {
              const userResource = await vk.snippets.resolveResource(context.$match[1])
              const user = await vk.api.users.get({ user_id: userResource.id })
              const userSender = await vk.api.users.get({
                user_id: context.senderId,
              });
              const targetUser = chance.pickone([user, userSender])
              const senderName = petrovich({ first: userSender[0].first_name, last: userSender[0].last_name, gender: 'male', }, 'genitive')
              debugger
              const answerString = interaction.answer
              .replace('$sender', context.$match[1])
              .replace('$target', `${senderName.first} ${senderName.last}`)

              await context.send(`${answerString}`)
            });
          }
        })
        resolve({ interactionsCount: interactions.length })
      })
  })
}
