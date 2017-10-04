const jwt = require('jsonwebtoken')
require('dotenv').config()

var isLogin = (req,res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
    if(decoded == null || err) {
      res.send({
        messase: "Dereng login, mboten saget akses nggih",
        err: err
      })
    } else{
      req.id = decoded.id
      req.username = decoded.username
      req.role == decoded.role //just for lock find all users
      console.log("ini decoded id", decoded.id)
      console.log("ini req id", req.id)
      next()
    }
  })
}

var thisUser = (req, res, next) => {
  console.log("ini req params", req.params.id)
  if(req.id == req.params.id){
    next()
  } else{
    res.send({
      message: 'Mboten wonten tiyang meniko'
    })
  }
}

var userAuth = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
    if(!err){
      req.author = decoded.id
      console.log('ini req author', req.author)
      next()
    } else{
      res.send({
        message: 'Mboten pareng ngrusuhi tiyang liyane'
      })
    }
  })
}

var thisAdmin = (req, res, next) => {
  if(req.role == "Admin"){
    next()
  } else if(req.role == "User" || req.role != "Admin"){
    next()
  } else{
    res.send({
      message: 'Ngapunten, menawi dede admin'
    })
  }
}

module.exports = {
  isLogin, thisUser, thisAdmin, userAuth
}