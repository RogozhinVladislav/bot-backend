import Command from '../models/command.model';

export default {
  async list(req, res, next) {
    try {
      const commands = await Command.find().exec();
      res.json(commands);
    } catch (error) {
      next(error);
    }
  },
};
