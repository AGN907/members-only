const router = require('express').Router()
const passport = require('passport')
const userController = require('../controllers/userController')
const user = require('../models/user')


router.get('/sign-up', userController.signup_get)
router.post('/sign-up', userController.signup_post)

router.get('/log-in', userController.login_get)
router.post(
  "/log-in",
  passport.authenticate('local', {

    successRedirect: '/',
    failureRedirect: '/log-in'
  })
)


router.get('/log-out', userController.logout_get)


router.get('/be-member', userController.be_member_get)
router.post('/be-member', userController.be_member_post)

module.exports = router
