const express = require('express');
const router = express.Router();
const Message = require('../models/message')

router.get('/', async (req, res, next) => {
  const messages = await Message.find().populate('user').sort({ dateCreated: -1 }).exec()

  res.render('index', {
    messages
  });
});

module.exports = router;
