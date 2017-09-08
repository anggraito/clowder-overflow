const express = require('express');
const router = express.Router();

const modelQuest = require('../controllers/question');

router.get('/', modelQuest.findAllQuestion)
router.post('/', modelQuest.createQuestion)
router.get('/:id', modelQuest.getIdQuestion)
router.put('/:id', modelQuest.updateQuestion)
router.delete('/:id', modelQuest.deleteQuestion)

router.get('/:id/answers', modelQuest.findAnswer)
router.post('/:id/answers', modelQuest.createAnswer)

module.exports = router;