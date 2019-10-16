import express from 'express';
import commandController from '../../controllers/command.controller';
import { hearCommand } from '../../middlewares/command';

const router = express.Router();

router.route('/').get(commandController.list);
router.route('/').post(commandController.create, hearCommand());

module.exports = router;
