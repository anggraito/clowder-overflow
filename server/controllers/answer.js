const db = require('../models/answer')

var findAllAnswer = (req, res) => {
  db.find()
  .then((answers) => {
    res.send(answers)
  })
  .catch(err => {
    res.status(404).send(err)
  })
}

var createAnswer = (req, res) => {
  db.create({
    answer: req.body.answer,
    author: req.body.author,
    time: new Date(),
    voteup: [ ],
    voteboo: [ ]
  })
  .then((answer) => {
    res.send(`Komen di thread " ini nama thread " berhasil!`)
  })
  .catch(err => {
    res.send(err)
  })
}

var getIdAnswer = (req, res) => {
  
}

module.exports = {

}