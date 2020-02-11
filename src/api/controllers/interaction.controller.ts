import { Response, Request, NextFunction } from 'express'
import Interaction from '../models/interaction.model'

export default {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const interactions = await Interaction.find().exec()
      res.json(interactions)
    } catch (error) {
      res.status(500).send(error)
      next(error);
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const command = new Interaction(req.body);
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
      const result = await Interaction.findOneAndUpdate({ _id: id }, { ...req.body })
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
      await Interaction.deleteOne({ _id: id }, (err) => {
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
