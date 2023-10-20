const mongoose = require('mongoose')
const User = require('../models/user')
const bycrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator')

exports.signup_get = asyncHandler(async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect('/')
    return 
  }
  res.render('signup_form', {
    title: 'Sign up'
  })
})

exports.signup_post = [

  body('firstName', 'First name can\'t be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('lastName', 'Last name can\'t be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('email', 'Email can\' be empty')
    .trim()
    .isLength({ min: 1 })
    .isEmail()
    .withMessage('Please enter a valid email eg: example@example.com')
    .escape(),
  body('password', 'Password can\t be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('confirm-password')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords don\'t match!')
      }
      return value === req.body.password
    }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.render('signup_form', {
        errors: errors.array()
      })
      return
    }

    bycrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        return next(err)
      }
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        memberStatus: 'non-member'
      })
      await user.save()
      res.redirect('/')
    })


  })]



exports.login_get = asyncHandler(async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect('/')
    return 
  }
  res.render('login_form')
})


