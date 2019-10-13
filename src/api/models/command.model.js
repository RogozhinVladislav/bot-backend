import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SimpleCommandSchema = new Schema({}, { strict: false });
const SimpleCommand = mongoose.model('SimpleCommand', SimpleCommandSchema);

export default SimpleCommand;
