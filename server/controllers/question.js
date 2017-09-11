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
    answers: [],
    voteup: [],
    voteboo: []
  })
  .then(data => {
    res.send(`Thread " ${data.title} " berhasil dibuat`)
  })
  .catch(error => {
    res.send(error)
  })
}

var getIdQuestion = (req, res) => {
  db.findOne({_id: req.params.id})
  .populate('author')
  .populate('answer.author')
  .populate('answer.voteup')
  .populate('answer.voteboo')
  .then((question) => {
    res.send(question)
  })
  .catch(error => {
    res.send(error)
  })
}

var updateQuestion = (req, res) => {
  db.findById({_id: req.params.id}) //bisa juga pake where
  .then((quest) => {
    quest.title = req.body.title || quest.title
    quest.question = req.body.question || quest.question
    quest.time = new Date()

    quest.save((err, data) => { //disini .update({<field>})
      if(err) {
        res.status(500).send(err)
      }
      res.send(`Update " ${data.title} " berhasil`)
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

var voteUp = (req, res) => {
  db.findById(req.params.id)
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
  db.findById(req.params.id)
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