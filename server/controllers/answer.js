const Question = require('../models/Question')

var createAnswer = (req, res) => {
  Question.findByIdAndUpdate(req.params.id, {
    $push: {'answers': {
      answer: req.body.answer,
      author: req.body.author
    }}
  },{
    safe: true,
    upsert: true,
    new: true
  })
  .then((data) => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var findAnswer = (req, res) => {
  Question.findById(req.params.id)
  // .populate({
  //   path: 'author',
  //   select: 'username'
  // })
  .populate('answers.author')
  .then((data) => {
    res.send(data.answers)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var deleteAnswer = (req, res) => {
  Question.findByIdAndRemove({_id:req.params.id})
  .then((answer) => {
    Question.findById(req.params.id, (err, data) => {
      let idAnswer = answer.replies.indexOf(answer._id)
      data.replies.splice(idx, 1)
      data.save((err, updateQuestion) => {
        res.send(err ? err : answer)
      })
    })
  })
  .catch(err => {
    res.send(err)
  })
}

var voteUp = (req, res) => {
  Question.findById({_id:req.params.answerid})
  .then((quest) => {
    if(req.body.author){ //karena kalo dia bukan user, masa bisa like?
      var addVote = quest.voteup.indexOf(req.body.author)
      var removeVote = quest.votedown.indexOf(req.body.author)
      if(addVote == -1 && removeVote == -1){
        quest.voteup.push(req.body.author)
      } else if(removeVote !== -1){
        quest.votedown.splice(removeVote, 1)
      }
      quest.save((err, dataUp) => {
        if(err) {
          res.status(500).send(err)
        }
        res.send(dataUp)
      })
    } else {
      res.send('Silahkan login dahulu')
    }
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var voteBoo = (req, res) => {
  Question.findById({_id:req.params.answerid})
  .then((quest) => {
    if(req.body.author){
      var addVote = quest.voteup.indexOf(req.body.author)
      var removeVote = quest.voteboo.indexOf(req.body.author)
      if(addVote == -1 && removeVote == -1){
        quest.voteboo.push(req.body.author)
      } else if(addVote == -1){
        quest.voteup.splice(removeVote, 1)
      }
      quest.save((err, dataBoo) => {
        if(err){
          res.status(500).send(err)
        }
        res.send(dataBoo)
      })
    } else{
      res.send('Silahkan login terebih dahulu')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  findAnswer,
  createAnswer,
  deleteAnswer,
  voteUp, voteBoo
 }