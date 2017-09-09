const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: [ true, 'Tidak boleh kosong']
  },
  password: {
    type: String,
    required: [ true, 'Password tidak boleh kosong']
  },
  email: {
    type: String,
    required: true,
    unique: [ true, 'Tidak boleh kosong']
  },
  salt: {
    type: String,
    required: true
  }
})
// compiling model from schema
var user = mongoose.model('User', userSchema);

module.exports = user