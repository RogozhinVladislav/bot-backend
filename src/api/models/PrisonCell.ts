import mongoose from 'mongoose'
const Schema = mongoose.Schema

const prisonCellSchema = new Schema({}, { strict: false })
const prisonCell = mongoose.model('PrisonCell', prisonCellSchema)

export default prisonCell
