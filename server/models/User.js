const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
},{
  timestamps: true
})
// compiling model from schema
var user = mongoose.model('User', userSchema);

module.exports = user