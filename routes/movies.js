const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, moviesController.getMovies)
// what we can now do, we use ensureAuth before the controller
// middleware
    // what is it going to check for?
        // it insures authentication (makes sure that you're logged in)
// 


router.post('/createMovie', moviesController.createMovie)

router.put('/markComplete', moviesController.markComplete)

router.put('/markIncomplete', moviesController.markIncomplete)

router.delete('/deleteMovie', moviesController.deleteMovie)

// routes points to diffrent methods, send to the correct route folder

module.exports = router