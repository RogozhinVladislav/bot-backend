import mongoose from 'mongoose'
const Schema = mongoose.Schema

const simpleCommandSchema = new Schema({}, { strict: false })
const simpleCommand = mongoose.model('SimpleCommand', simpleCommandSchema)

export default simpleCommand
