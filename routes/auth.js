const router = require('express').Router()
const userController = require('../controllers/userController')


router.get('/sign-up', userController.signup_get)


router.post('/sign-up', userController.signup_post)


module.exports = router
