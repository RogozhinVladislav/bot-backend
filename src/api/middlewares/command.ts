import vk from '../../helpers/vk-helper';

export const hearCommand = () => (req: any, res: any, next: any) => {
  const { trigger, answer } = req.body;
  vk.updates.hear(trigger, async context => {
    await context.send(answer);
  });
  //   next();
};
