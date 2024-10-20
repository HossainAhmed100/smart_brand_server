const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  role: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Admin', AdminSchema);
