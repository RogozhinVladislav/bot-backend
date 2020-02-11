import mongoose from 'mongoose'
const Schema = mongoose.Schema

const interactionSchema = new Schema({}, { strict: false })
const interaction = mongoose.model('Interaction', interactionSchema)

export default interaction
