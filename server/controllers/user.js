// import model yang digunakan untuk ambil database
const db = require('../models/user');
const jwt = require('jsonwebtoken')
const secret = require('../helpers/salt')
require('dotenv').config()
// method-method mongoose untuk crud find() , 
// create(), findById() then save(), 
// findByIdAndRemove()

var findAllUser = (req, res) => {
  db.find()
  .then((users) => {
    res.send(users)
  })
  .catch(error => {
    res.send(error)
  })
}

var createUser = (req, res) => {
  let randomSalt = secret.random(8);
  let passwordSalt = secret.createSalt(req.body.password, randomSalt)
  db.create({
    username: req.body.username,
    password: passwordSalt,
    email: req.body.email,
    salt: randomSalt
  })
  .then((user) => {
    res.send(`Berhasil`)
  })
  .catch(error => {
    res.send(error)
  })
}

var loginUser = (req, res) => {
  db.findOne({ username: req.body.username})
  .then(response =>{
    let randomSalt = secret.random(8);
    let passwordSalt = secret.createSalt(req.body.password, randomSalt)
    if(req.body.password == passwordSalt){
      let token = jwt.sign({
        username: response.username,
        email: response.email
      })
      let mixObject = {
        token: token,
        id: response._id,
        username: response.username
      }
      res.send(mixObject)
    } else{
      res.send('incorrect password!')
    }
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var deleteUser = (req, res) => {
  db.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.send('sukses delete')
  })
  .catch(err =>{
    res.send(err)
  })
}




// export method yang akan digunakan
module.exports = {
  findAllUser, createUser, loginUser, deleteUser
}