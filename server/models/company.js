import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: 'String', required: true },
  earnings: { type: 'Number', required: true },
  children: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Company', companySchema);
