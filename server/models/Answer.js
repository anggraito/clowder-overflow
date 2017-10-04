const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var answerSchema = new Schema({
  answer:{
    type: String,
    require: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
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

// kenapa tidak didaftarin? 
// karena dia bagian dari question.makanya scemanya saja
module.exports = answerSchema;