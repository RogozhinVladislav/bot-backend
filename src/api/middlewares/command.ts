import { Response, Request, NextFunction } from "express"
import vk from '../../helpers/vk'

export const hearCommand = () => (req: Request, res: Response, next: NextFunction) => {
  const { trigger, answer } = req.body
  vk.updates.hear(trigger, async context => await context.send(answer))
  // next();
}
