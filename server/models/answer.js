const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var answerSchema = new Schema({
  answer:{
    type: String,
    require: true
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
  voteup: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  voteboo: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

var answer = mongoose.model('Answer', answerSchema)

module.exports = answer;