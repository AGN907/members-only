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


module.exports = router
