import express from 'express';
import commandRoutes from './command.route';

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/commands', commandRoutes);

module.exports = router;
