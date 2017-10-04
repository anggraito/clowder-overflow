const express = require('express')
const router = express.Router()
const controllQuest = require('../controllers/question')
const controllAnswer = require('../controllers/answer')
const authorize = require('../helpers/auth')

router.get('/', controllQuest.findAllQuestion)
router.post('/', authorize.isLogin, controllQuest.createQuestion) //auth user
router.get('/:id', authorize.isLogin, controllQuest.getIdQuestion) //sama dengan get id answer
router.put('/:id', authorize.isLogin, authorize.userAuth, controllQuest.updateQuestion) //auth
router.delete('/:id', authorize.isLogin, authorize.userAuth, controllQuest.deleteQuestion)

router.get('/:id/answers', controllAnswer.findAnswer) //auth user
router.post('/:id/reply', authorize.isLogin, controllAnswer.createAnswer)
router.delete('/:id/answer/:answerid', authorize.isLogin, authorize.thisUser, controllAnswer.deleteAnswer)

module.exports = router;