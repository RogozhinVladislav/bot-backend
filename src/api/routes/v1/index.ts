import express from 'express'
// import { CONFIRMATION } from '../../../config';
import commandRoutes from './command.route'

const { CONFIRMATION } = process.env

const router = express.Router()

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'))

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'))

router.post('/', (req, res) => {
  const { body } = req
  if (body.type === 'confirmation') res.end(CONFIRMATION)
})

router.use('/commands', commandRoutes)

export default router
