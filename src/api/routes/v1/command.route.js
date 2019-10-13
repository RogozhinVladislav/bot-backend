import express from 'express';
import controller from '../../controllers/command.controller';

const router = express.Router();

router.route('/').get(controller.list)

module.exports = router;