// import model yang digunakan untuk ambil database
const db = require('../models/user');

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
  db.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  .then((user) => {
    console.log(user)
    res.send(`Berhasil menambahkan data " ${user.username} "`)
  })
  .catch(error => {
    res.send(error)
  })
}

var getIdUser = (req, res) => {
  db.findById(req.params.id)
  .then((user) => {
    res.send(user)
  })
  .catch(error => {
    res.send(error)
  })
}

// export method yang akan digunakan
module.exports = {
  findAllUser, createUser, getIdUser
}