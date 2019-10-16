import vk from '../../helpers/vk-helper';

export const hearCommand = () => (req, res, next) => {
  const { trigger, answer } = req.body;
  vk.updates.hear(trigger, async context => {
    await context.send(answer);
  });

  //   next();
};
