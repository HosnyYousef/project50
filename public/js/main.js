

const deleteBtn = document.querySelectorAll('.del')
const movieItem = document.querySelectorAll('span.not')
const movieComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteMovie)
})

Array.from(movieItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(movieComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteMovie(){
    const movieId = this.parentNode.dataset.id
    try{
        const response = await fetch('movies/deleteMovie', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// these are the funtions associated with the event listeners

// 'movies/deleteMovie': this is a route

// 'this.parentNode.dataset.id': So, here for this to delete to do function um we're grabbing what are we grabbing we're grabbing to-do id this dot parent node.dataset.id essentially what we're doing here is we're grabbing the unique database id value that we set in our ejs remember at the list item level 
    // views/movies.ejs: data-id='<%=el._id%>: we set an id that was equal to the mongodb id of every single document that we passed to it 
// 'this.parentNode.dataset.id':grabbing that again right we're going to the parent node we're grabbing the id of the item and we're passing that back up to our server


async function markComplete(){
    const movieId = this.parentNode.dataset.id
    try{
        const response = await fetch('movies/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// what does 'put' do?
    // update
// what are we updating?
    // the boolean

async function markIncomplete(){
    const movieId = this.parentNode.dataset.id
    try{
        const response = await fetch('movies/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// public/js/main.js: we telling the brain of our application what to do