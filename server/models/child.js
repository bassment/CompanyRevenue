import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const childSchema = new Schema({
  name: { type: 'String', required: true },
  earnings: { type: 'Number', required: true },
  children: [{ type: Schema.Types.ObjectId, ref: 'Child' }],
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Child', childSchema);
