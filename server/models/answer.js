const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var answerSchema = new Schema({
  answer:{
    type: String,
    require: [true, 'Tidak boleh kosong']
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
  voteup: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  voteboo: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

// kenapa tidak didaftarin? 
// karena dia bagian dari question.makanya scemanya saja
module.exports = answerSchema;