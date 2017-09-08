const express = require('express');
const router = express.Router();

// import controllers yang dipakai
const modelUser = require('../controllers/user');

// metode bisa get,post,put,delete jika database mongoose
router.get('/users', modelUser.findAllUser)
router.post('/signup', modelUser.createUser) //register
router.post('/signin', modelUser.loginUser)
router.delete('/users/:id', modelUser.deleteUser)

module.exports = router;