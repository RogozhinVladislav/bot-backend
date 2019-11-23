import Command from '../models/command.model';
import { create } from 'domain';

export default {
  async list(req: any, res: any, next: any) {
    try {
      const commands = await Command.find().exec();
      res.json(commands);
    } catch (error) {
      res.status(500).send(error);
      //next(error);
    }
  },
  async create(req: any, res: any, next: any) {
    try {
      const command = new Command(req.body);
      const result = await command.save();
      res.send(result);
      next();
    } catch (error) {
      res.status(500).send(error);
      //next(error);
    }
  },
  async update(req: any, res: any, next: any) {
    try {
      const { id } = req.params;
      const result = await Command.findOneAndUpdate({ _id: id }, { ...req.body }, function(
        err: any,
        res: any,
      ) {});
      res.send(result);
      next();
    } catch (error) {
      res.status(500).send(error);
      //next(error);
    }
  },
  async delete(req: any, res: any, next: any) {
    try {
      const { id } = req.params;
      await Command.deleteOne({ _id: id }, function(err: any) {
        // if (err) return handleError(err);
      });
      res.send('OK');
      next();
    } catch (error) {
      res.status(500).send(error);
      //next(error);
    }
  },
};
