const mongoose = require('mongoose');
const answerSchema = require('./answer');

var Schema = mongoose.Schema;

var questionSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Tidak boleh kosong']
  },
  question: {
    type: String,
    required: [true, 'Tidak boleh kosong']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Tidak boleh kosong']
  },
  time: {
    type: Date,
    default: Date.now
  },
  answers: [answerSchema],
  voteup: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  voteboo: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})
// compiling model from schema
var question = mongoose.model('Question', questionSchema);

module.exports = question;