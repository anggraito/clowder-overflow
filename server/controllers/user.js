const User = require('../models/User');
const Question = require('../models/Question');
const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10);
require('dotenv').config()

var createUser = (req, res) => {
  var passwordSalt = bcrypt.hashSync(req.body.password, salt)
  User.create({
    username: req.body.username,
    password: passwordSalt,
    email: req.body.email
  })
  .then((user) => {
    res.send({
      message: "Sugeng Rawuh",
      user: user
    })
  })
  .catch(error => { res.send(error) })
}

var loginUser = (req, res) => {
  User.findOne({ username: req.body.username})
  .then(user => {
    let decodePassword = bcrypt.compareSync(req.body.password, user.password);
    if(decodePassword){
      var token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email
      }, process.env.SECRET_KEY)
      res.send(token)
    } else{
      res.send({
        message: 'Mboten saget mriki, kuncine mboten ceples'
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: 'Asmanipun sinten nggih?',
      err: err
    })
  })
}

var findAllUser = (req, res) => {
  User.find()
  .then((users) => {
    res.send(users)
  })
  .catch(error => {
    res.send(error)
  })
}

var getUser = (req, res) => {
  User.findOne({username: req.params.username})
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send({
      message: "Mboten wonten",
      err: err
    })
  })
}

var updateUser = (req, res) => {
  User.findById(req.params.id)
  .then(user => {
    let decodePassword = bcrypt.compareSync(req.body.password, user.password);
    if(decodePassword){
      var passwordSalt = bcrypt.hashSync(req.body.password, salt)
      user.username = req.body.username || user.username
      user.password = passwordSalt || user.password
      user.email = req.body.email || user.email
    
      user.save((err, result) => {
        if(err) {
          res.status(500).send(err)
        }
        res.send({
          message: "Enggal njihh",
          result: result
        })
      })
    } else{
      res.send({
        message: 'Badalah, monggo dipuncobi malih'
      })
    }
  })
  .catch(err => {
    res.status(500).send(err)
  }) 
}

var deleteUser = (req, res) => {
  User.findIdAndRemove(req.params.id)
  .then(()=>{
    //Question.delete here
    res.send('Sampun tedupak')
  })
  .catch(err =>{
    res.send(err)
  })
}

// export method yang akan digunakan
module.exports = {
  createUser, loginUser, findAllUser, 
  getUser, updateUser, deleteUser
}