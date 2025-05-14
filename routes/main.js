const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
// 'postSignup': it's a really fancy click event. Multple steps we run through when we hear the event (submit button for new user login)
    // so we submitted a post on the sign up
    // 'authController': we look at this in 'controllers/auth.js' folder


module.exports = router

//main routes has all the main routes of my application

