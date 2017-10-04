const mongoose = require('mongoose');
const answerSchema = require('./Answer');

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
    ref: 'User'
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
},{
  timestamps: true
})
// compiling model from schema
var Question = mongoose.model('Question', questionSchema);

module.exports = Question;