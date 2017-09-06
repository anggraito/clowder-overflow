const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var questionSchema = new Schema({
  

})
// compiling model from schema
var question = mongoose.model('Question', questionSchema);

module.exports = question;