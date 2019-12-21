import express from 'express'
import upload from '../../../upload'
import commandController from '../../controllers/command.controller'
import { hearCommand } from '../../middlewares/command'

const router = express.Router()

const cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }])

router.route('/').get(commandController.list)
router.route('/').post(cpUpload, commandController.create, hearCommand())
router.route('/:id').put(commandController.update)
router.route('/:id').delete(commandController.delete)

export default router
