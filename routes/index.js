const express = require('express');

const router = express.Router();

const messageController = require('../controllers/message')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/message', messageController.getPostMessage);

module.exports = router;
