const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user');
const authorize = require('../helpers/auth')

// metode bisa get,post,put,delete jika database mongoose
router.post('/signup', controllerUser.createUser) //register
router.post('/signin', controllerUser.loginUser)
router.get('/users', authorize.isLogin, controllerUser.findAllUser) //this admin
router.get('/users/:name', authorize.isLogin, controllerUser.getUser) 
router.put('/users/:id', authorize.isLogin, authorize.thisUser, controllerUser.updateUser) //thisuser
router.delete('/users/:id', authorize.isLogin, authorize.thisUser, controllerUser.deleteUser) //thisuser

module.exports = router;