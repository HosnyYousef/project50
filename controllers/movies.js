const Movie = require('../models/Movie')

module.exports = {
    getMovies: async (req,res)=>{
        console.log(req.user) // when adding authentication to this project, we now have the ability to see the user that's making the request. 
        // when can see the logged in user
            // the console.log, we'll see everything about that logged in user
                // evenever we create a new user, that user has its own ID 
                // what do you think we're doing that would wind up with users having their own IDs?
                // we have a mongoDB collection we have a collection in our database of users
                    // every single time a new user signs up, we are are storing that user in a database 
                        // every single user will have a unqiue of ID
                            // we can see the movies that have that matching ID


// if we have users

        try{
            const movieItems = await Movie.find({userId:req.user.id}) 
// when we go to find our movies, we're finding the movies where user ID equals req.user.id
    // every single time the user is logged in and makes a request we get this rec.user and it has all their info including their ID so all I have to do is say hey find me the to-do's where the user ID matches rec.user ID if you find that give me that to do I'll take it and then we pass that into our ejs to render

// so now every single to do we create will always have the logged in user's ID and when we go to get the to-do's we're only going to get the to Do's of the logged in user

            const itemsLeft = await Movie.countDocuments({userId:req.user.id,completed: false})
            res.render('movies.ejs', {movies: movieItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createMovie: async (req, res)=>{
        try{
            await Movie.create({movie: req.body.movieItem, completed: false, userId: req.user.id})
            console.log('Movie has been added!')
            res.redirect('/movies')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Movie.findOneAndUpdate({_id:req.body.movieIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Movie.findOneAndUpdate({_id:req.body.movieIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteMovie: async (req, res)=>{
        console.log(req.body.movieIdFromJSFile)
        try{
            await Movie.findOneAndDelete({_id:req.body.movieIdFromJSFile})
            console.log('Deleted Movie')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    