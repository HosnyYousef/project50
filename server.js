const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const movieRoutes = require('./routes/movies')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)
// we connected to the passport file, that we put in our config folder: config/passport.js


connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

// Keeps us logged in throughout different pages

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
// ^^^these are just saying "Hey, we're going to use passport"

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/movies', movieRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    

// EndureAuth?

// 