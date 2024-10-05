const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  address: { type: String },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', UserSchema);
