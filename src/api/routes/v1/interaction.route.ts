import express from 'express'
import interactionController from '../../controllers/interaction.controller'
import { hearInteraction } from '../../middlewares/interaction'

const router = express.Router()

router.route('/').get(interactionController.list)
router.route('/').post(interactionController.create, hearInteraction())
router.route('/:id').put(interactionController.update)
router.route('/:id').delete(interactionController.delete)

export default router
