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
      message: `Topik " ${data.title} " pun didamel`,
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
  .populate('answers.author.username')
  .then((questions) => {
    res.send(questions)
  })
  .catch(error => {
    res.send(error)
  })
}

var getIdQuestion = (req, res) => {
  Question.findOne({_id: req.params.id})
  .populate({
    path: 'author',
    select: 'username'
  })
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
          message: `" ${data.title} " sampun di damel malih`,
          data: data
        })
      })
    } else{
      res.send({
        message: 'Mboten saged ndameli tiyang liyane'
      })
    }
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var deleteQuestion = (req, res) => {
  Question.findById(req.params.id)
  .then(user => {
    if(user.author == req.author){
      console.log('ini user author', user.author)
      console.log('ini req author', req.author)
      Question.remove({
        _id: req.params.id
      })
      .then(()=>{
        res.send({
          message: 'Pun di dupak'
        })
      })
      .catch(err => {
        res.status(500).send(err)
      })
    } else{
      res.send({
        message: 'Dudu nggone'
      })
    }
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var thumbsUp = (req, res) => {
  Question.findOne({
    _id: req.body.id,
    voteup: req.id
  })
  .then(up => {
    console.log('ini up pertama',up)
    if(up == null) {
      Question.findOne({
        _id: req.body.id,
        voteboo: req.id
      })
      .then(down => {
        console.log('data down', down)
        if(down == null) {
          Question.updateOne({
            _id: req.body.id
          },{
            $push: {
              voteup: req.id
            }
          })
          .then(result => {
            console.log('resultnya null voteup', result)
            res.json(result)
          })
          .catch(err => res.send(err))
        } else {
          Question.updateOne({
            _id: req.body.id
          }, {
            $pull: {
              voteboo: req.id
            }
          })
          .then(result => {
            res.json(result)
          })
          .catch(err => res.send(err))
        }
      })
    } else{
      Question.updateOne({
        _id: req.body.id
      }, {
        $pull: {
          voteup: req.id
        }
      })
      .then(result => {
        console.log('resultnya voteup', result)
        res.json(result)
      })
      .catch(err => res.send(err))
    }
  })
  .catch(err => res.send(err))
}

var thumbsDown = (req, res) => {
  Question.findOne({
    _id: req.body.id,
    voteboo: req.id
  })
  .then(down => {
    if(down == null) {
      Question.findOne({
        _id: req.body.id,
        voteup: req.id
      })
      .then(up => {
        if(up == null){
          Question.updateOne({
            _id: req.body.id
          },{
            $push: {
              voteboo: req.id
            }
          })
          .then(result => {
            res.json(result)
          })
          .catch(err => res.send(err))
        } else{
          Question.updateOne({
            _id: req.body.id
          },{
            $push: {
              voteup: req.id
            }
          })
          .then(result => {
            Question.updateOne({
              _id : req.body.id
            }, {
              $push : {
                voteboo : req.id
              }
            })
            .then(result=>{
              res.json(result)
            })
            .catch(err => res.send(err))
          })
          .catch(err => res.send(err))
        }
      })
      .catch(err => res.send(err))
    } else{
      Question.updateOne({
        _id : req.body.id
      }, {
        $pull : {
          voteboo : req.id
        }
      })
      .then(result=>{
        res.json(result)
      })
      .catch(err => res.send(err))
    }
  })
  .catch(err => res.send(err))
}

// var voteUp = (req, res) => {
//   Question.findById(req.params.id)
//   .then((quest) => {
//     if(req.author){ //karena kalo dia bukan user, masa bisa like?
//       var addVote = quest.voteup.indexOf(req.author)
//       var removeVote = quest.votedown.indexOf(req.author)
//       if(addVote == -1 && removeVote == -1){
//         quest.voteup.push(req.author)
//       } else if(removeVote !== -1){
//         quest.votedown.splice(removeVote, 1)
//       }
//       quest.save((err, dataUp) => {
//         if(err) {
//           res.status(500).send(err)
//         }
//         res.send(dataUp)
//       })
//     } else {
//       res.send('Silahkan login dahulu')
//     }
//   })
//   .catch(err => {
//     res.status(500).send(err)
//   })
// }

// var voteBoo = (req, res) => {
//   Question.findById(req.params.id)
//   .then((quest) => {
//     if(req.body.author){
//       var addVote = quest.voteup.indexOf(req.body.author)
//       var removeVote = quest.voteboo.indexOf(req.body.author)
//       if(addVote == -1 && removeVote == -1){
//         quest.voteboo.push(req.body.author)
//       } else if(addVote == -1){
//         quest.voteup.splice(removeVote, 1)
//       }
//       quest.save((err, dataBoo) => {
//         if(err){
//           res.status(500).send(err)
//         }
//         res.send(dataBoo)
//       })
//     } else{
//       res.send('Silahkan login terebih dahulu')
//     }
//   })
//   .catch(err => {
//     res.send(err)
//   })
// }

module.exports = {
  findAllQuestion, 
  createQuestion, 
  getIdQuestion, 
  updateQuestion, 
  deleteQuestion,
  thumbsUp, thumbsDown
  // voteUp, voteBoo
}