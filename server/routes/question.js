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
router.post('/thumbsup', authorize.isLogin, controllQuest.thumbsUp);
// router.post('/thumbsdown', questionController.thumbsdown);

router.get('/:id/answers', authorize.isLogin, controllAnswer.findAnswers) //auth user
router.get('/:id/answer/:answerId', authorize.isLogin, controllAnswer.getOneAnswer)
router.post('/:id/reply', authorize.isLogin, controllAnswer.createAnswer)
router.delete('/:id/answer/:answerId', authorize.isLogin, controllAnswer.deleteAnswer)

module.exports = router;