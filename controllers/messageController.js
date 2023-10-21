const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator')
const Message = require('../models/message')


exports.message_create_get = asyncHandler(async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('message_form', {
      title: 'Create Message',
      user: req.user

    })
  }
  res.redirect('/')
})


exports.message_create_post = [
  body('title', 'Title must not be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('text', 'Message must not be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req)

    const message = new Message({
      title: req.body.title,
      text: req.body.text,
      user: req.user
    })

    if (!errors.isEmpty()) {
      res.render('message_form', {
        title: 'Create Message',
        errors: errors.array()
      })
    }

    await message.save()
    res.redirect('/')
  })
]
