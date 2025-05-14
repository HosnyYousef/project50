module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/')
    }
  }
}

// ensureAuth is middleware
// ensureAuth is really just a function
// function
// check to see if you're athenticated: isAuthenticated()
// next(): if are authenticated, good move on to the next thing, good, go use that controller
// res.redirect('/'): if you're not loggedin, we're going to redirect you back to the main page
// the main page where you can log in

// purpose: is this person logged in
// if not logged in, redirect back to main page