const mongoose = require('../db/mongo');
const Schema = mongoose.Schema;

const clients = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true }
});

module.exports = function() {
  return mongoose.model('clients', clients, 'clients')
}
