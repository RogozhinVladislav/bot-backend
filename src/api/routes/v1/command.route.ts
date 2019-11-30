import express from 'express'
import upload from '../../../upload'
import commandController from '../../controllers/command.controller'
import { hearCommand } from '../../middlewares/command'

const router = express.Router()

router.route('/').get(commandController.list)
router.route('/').post(upload.single('file'), commandController.create, hearCommand())
router.route('/:id').put(commandController.update)
router.route('/:id').delete(commandController.delete)

export default router
