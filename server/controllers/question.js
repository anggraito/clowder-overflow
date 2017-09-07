const db = require('../models/question')

var findAllQuestion = (req, res) => {
  db.find()
  .populate({
    path: 'author',
    select: 'username'
  })
  .populate('answer.author')
  .then((questions) => {
    res.send(questions)
  })
  .catch(error => {
    res.send(error)
  })
}

var createQuestion = (req, res) => {
  db.create({
    title: req.body.title,
    question: req.body.question,
    author: req.body.author,
    time: new Date(),
    answer: [ ],
    voteup: [ ],
    voteboo: [ ]
  })
  .then((question) => {
    res.send(`Thread " ${question.title} " berhasil dibuat`)
  })
  .cacth(error => {
    res.send(error)
  })
}

var getIdQuestion = (req, res) => {
  db.findById(req.params.id)
  .then((question) => {
    res.send(question)
  })
  .catch(error => {
    res.send(error)
  })
}

var updateQuestion = (req, res) => {
  db.findById(req.params.id)
  .then((quest) => {
    quest.title = req.body.title || quest.title
    quest.question = req.body.question || quest.question
    quest.author = quest.author
    quest.time = new Date()
    quest.answer = []
    quest.voteup = []
    quest.voteboo = []

    quest.save((err, data) => {
      if(err) {
        res.status(500).send(err)
      }
      res.send(data)
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var deleteQuestion = (req, res) => {
  db.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('Success delete data')
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


module.exports = {
  findAllQuestion, 
  createQuestion, 
  getIdQuestion, 
  updateQuestion, 
  deleteQuestion
}