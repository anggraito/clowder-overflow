const Question = require('../models/Question')
// const Answer = require('../models/Answer')

var createAnswer = (req, res) => {
  Question.findByIdAndUpdate(req.params.id, {
    $push: {'answers': {
      answer: req.body.answer,
      author: req.id
    }}
  },{
    safe: true,
    upsert: true,
    new: true
  })
  .then(data => {
    res.send({
      message: 'Sampun dados answernipun',
      data: data
    })
  })
  .catch(err => {
    res.send(err)
  })
}

var findAnswers = (req, res) => {
  Question.findById(req.params.id)
  .populate('answers.author')
  .then(data => {
    res.send(data.answers)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var getOneAnswer = (req, res) => {
  Question.findOne({_id: req.params.id}, {
    answers: { $elemMatch: { _id: req.params.answerId} }
  })
  .then(answer => {
    console.log('ini answer banyak', answer)
    res.send(answer.answers[0])
  })
  .catch(err => res.send(err))
}

var deleteAnswer = (req, res) => {
  console.log('ini delete answer')
  Question.findById({_id: req.params.id})
  .then(question => {
    console.log('dapet question nya ', question)
    const answerIdx = question.answers.findIndex(answer => answer.id === req.params.answerId)
    console.log('ini id answer indexof------>', answerIdx)
    var author = question.answers[answerIdx].author
    if(author == req.id){
      console.log('author nya cocok')
      question.answers.splice(answerIdx, 1)

      question.save((err, updateQuest) => {
        console.log('updatedQuestion ', updateQuest)
        if(err){ 
          res.send(err)
        } else{
          res.send({
            message: "Pun di dawuhi"
          })
        }
      })
    } else{
      res.send({
        message: 'Mboten sae lah!!'
      })
    }
  })
  .catch(err => res.send(err))
}



// var voteUp = (req, res) => {
//   Question.findById({_id:req.params.answerid})
//   .then((quest) => {
//     if(req.body.author){ //karena kalo dia bukan user, masa bisa like?
//       var addVote = quest.voteup.indexOf(req.body.author)
//       var removeVote = quest.votedown.indexOf(req.body.author)
//       if(addVote == -1 && removeVote == -1){
//         quest.voteup.push(req.body.author)
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
//   Question.findById({_id:req.params.answerid})
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
  findAnswers,
  createAnswer,
  deleteAnswer,
  // voteUp, voteBoo,
  getOneAnswer
}
