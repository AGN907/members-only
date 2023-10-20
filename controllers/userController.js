const mongoose = require('mongoose')
const User = require('../models/user')
const bycrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')


exports.signup_get = asyncHandler(async (req, res, next) => {
  res.render('signup_form', {
    title: 'Sign up'
  })
})

exports.signup_post = asyncHandler(async (req, res, next) => {
  bycrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    if (err) {
      return next(err)
    }
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    })
    await user.save()
    res.redirect('/')
  })
})

