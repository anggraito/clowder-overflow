const db = require('../models/question')

var findAllAnswer = (req, res) => {
  db.find()
  .then((answers) => {
    res.send(answers)
  })
  .catch(err => {
    res.status(404).send(err)
  })
}

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

var deleteAnswer = (req, res) => {
  db.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send("delete data succes")
  })
  .catch(err => {
    res.send(err)
  })
}
 module.exports = {
  findAllAnswer,
  findAnswer,
  createAnswer,
  deleteAnswer
 }