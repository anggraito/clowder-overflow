const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  email: String
})
// compiling model from schema
var user = mongoose.model('User', userSchema);

module.exports = user