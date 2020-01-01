import { Response, Request, NextFunction } from 'express'
import Command from '../models/command.model'

export default {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const commands = await Command.find().exec()
      res.json(commands)
    } catch (error) {
      res.status(500).send(error)
      next(error);
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const url = `${req.protocol}://${req.get('host')}`;

      const files = req.files as { [fieldname: string]: Express.Multer.File[] };

      const image = files.image && files.image[0];
      const audio = files.audio && files.audio[0];

      const command = new Command({
        ...req.body,
        ...(image && { imageAttachment: `${url}/public/${image.filename }`}),
        ...(audio && { audioAttachment: `${url}/public/${audio.filename }`}),
      });
      const result = await command.save()
      res.send(result)
      next()
    } catch (error) {
      res.status(500).send(error)
      next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const result = await Command.findOneAndUpdate({ _id: id }, { ...req.body })
      res.send(result)
      next()
    } catch (error) {
      res.status(500).send(error)
      next(error);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      await Command.deleteOne({ _id: id }, (err) => {
        // if (err) return handleError(err);
      })
      res.send('OK')
      next()
    } catch (error) {
      res.status(500).send(error)
      next(error);
    }
  },
}
