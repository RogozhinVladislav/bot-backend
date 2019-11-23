import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PrisonCellSchema = new Schema({}, { strict: false });
const PrisonCell = mongoose.model('PrisonCell', PrisonCellSchema);

export default PrisonCell;
