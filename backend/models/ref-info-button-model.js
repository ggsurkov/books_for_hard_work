const mongoose = require('mongoose');

const refInfoButtonSchema = mongoose.Schema({
  id: { type: Number, required: true, index: { unique: true } },
  name: { type: String, required: true },
  price: { type: String, required: true },
  refUrl: { type: String, required: true },
  enabled: { type: Boolean, required: true },
});

module.exports = mongoose.model('RefInfoButtonModel', refInfoButtonSchema);
