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
      const url = `${req.protocol}://${req.get('host')}`

      // const image = req.files.audio && req.files.audio[0];

      // debugger
      const command = new Command({
        ...req.body,
        attachment: `${url}/public/${req.file.filename}`,
      })
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
