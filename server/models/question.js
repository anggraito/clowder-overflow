const mongoose = require('mongoose');
const answerSchema = require('./answer');

var Schema = mongoose.Schema;

var questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  answer: [answerSchema],
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