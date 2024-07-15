const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  // Add more fields as needed for your Service model
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
