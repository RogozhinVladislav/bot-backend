import { Response, Request, NextFunction } from "express"
import Chance from 'chance'
import vk from '../../helpers/vk'

const chance = new Chance()

export const hearInteraction = () => (req: Request, res: Response, next: NextFunction) => {
  const { trigger, answer } = req.body
  const reg = new RegExp(trigger.replace('$', '(.+)'))
  debugger
  vk.updates.hear(reg, async context => {
    const userResource = await vk.snippets.resolveResource(context.$match[1])
    const user = await vk.api.users.get({ user_id: userResource.id })
    const userSender = await vk.api.users.get({
      user_id: context.senderId,
    });
    const targetUser = chance.pickone([user, userSender])
    const answerString = answer.replace('$target', context.$match[1]).replace('$sender', userSender[0].first_name)
    await context.send(`${answerString}`)
  });
  // next();
}
