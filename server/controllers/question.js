const Question = require('../models/Question')

var createQuestion = (req, res) => {
  Question.create({
    title: req.body.title,
    question: req.body.quest,
    author: req.id,
    answers: [],
    voteup: [],
    voteboo: []
  })
  .then(data => {
    res.json({
      message: `Thread " ${data.title} " berhasil dibuat`,
      data: data
    })
  })
  .catch(error => {
    res.send(error)
  })
}

var findAllQuestion = (req, res) => {
  Question.find()
  .populate({
    path: 'author',
    select: 'username'
  })
  .then((questions) => {
    res.send(questions)
  })
  .catch(error => {
    res.send(error)
  })
}

var getIdQuestion = (req, res) => {
  Question.findOne({_id: req.params.id})
  .then((question) => {
    res.send(question)
  })
  .catch(error => {
    res.send(error)
  })
}

var updateQuestion = (req, res) => {
  Question.findById(req.params.id) //bisa juga pake where
  .then((quest) => {
    console.log('ini quest author', quest.author)
    console.log('ini quest id jwt', req.id)
    console.log('ini author', req.author)
    if(quest.author == req.author){
      quest.title = req.body.title || quest.title
      quest.question = req.body.question || quest.question
  
      quest.save((err, data) => { //disini .update({<field>})
        if(err) {
          res.status(500).send(err)
        }
        res.send({
          message: `Update " ${data.title} " berhasil`,
          data: data
        })
      })
    } else{
      res.send({
        message: 'Update tidak terorganisir'
      })
    }
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var deleteQuestion = (req, res) => {
  Question.findByIdAndRemove(req.params.id)
  .then(user => {
    if(user.author == req.author){
      res.send({
        message: 'Success delete data'
      })
    } else{
      res.send({
        message: 'Update tidak terorganisir'
      })
    }
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var voteUp = (req, res) => {
  Question.finQuestionyId(req.params.id)
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
  Question.finQuestionyId(req.params.id)
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
  findAllQuestion, 
  createQuestion, 
  getIdQuestion, 
  updateQuestion, 
  deleteQuestion,
  voteUp, voteBoo
}