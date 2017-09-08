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
    question: req.body.quest,
    author: req.body.author,
    time: new Date(),
    answer: [ ],
    voteup: [ ],
    voteboo: [ ]
  })
  .then(data => {
    res.send(`Thread " ${data.title} " berhasil dibuat`)
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
    quest.time = new Date()

    quest.save((err, data) => {
      if(err) {
        res.status(500).send(err)
      }
      res.send(`Update " ${data} " berhasil`)
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

// var findAllAnswer = (req, res) => {
//   db.find()
//   .then((answers) => {
//     res.send(answers)
//   })
//   .catch(err => {
//     res.status(404).send(err)
//   })
// }

var findAnswer = (req, res) => {
  db.findOne({_id:req.params.id})
  .then((data) => {
    res.send(data.answers)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var createAnswer = (req, res) => {
  db.findByIdAndUpdate(req.params.id, {
    $push: {'answers' : req.body}
  },
  {
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


module.exports = {
  findAllQuestion, 
  createQuestion, 
  getIdQuestion, 
  updateQuestion, 
  deleteQuestion,
  findAnswer,
  createAnswer
}