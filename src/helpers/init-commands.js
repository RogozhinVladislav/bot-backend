import Chance from 'chance';

import Command from '../api/models/command.model';
import vk from './vk-helper';

const chance = new Chance();

const string1 = 'ляпоса $';
const reg = new RegExp(string1.replace('$', '(.+)'));
const templateString = '$ получил ляпоса'

export default () => {
  return new Promise((resolve, reject) => {
    vk.updates.hear(reg, async context => {
      const userResource = await vk.snippets.resolveResource(context.$match[1]);
      const user = await vk.api.users.get({ user_id: userResource.id });
      const userSender = await vk.api.users.get({
        user_id: context.payload.from_id,
      });
      const targetUser = chance.pickone([user, userSender]);

      const answerString = templateString.replace('$', user[0].first_name);

      await context.send(`${answerString}`);
    });

    Command.find()
      .lean()
      .exec(function(err, commands) {
        commands.forEach(command => {
          vk.updates.hear(command.trigger, async context => {
            await context.send(command.answer);
          });
        });
        resolve({ commandsCount: commands.length });
      });
  });
};
