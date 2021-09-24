// Importing necessary dependencies
const express = require('express') 
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path') // Inbuilt module to find the path of provided file/folder

// Returns main object of express() function stored in app
const app = express()

// process.env.PORT checks PORT variable in environment variables of process
// If PORT variable is found then that value will be used or else 3000 will be taken
const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})

//assets
app.use(express.static('public'))

app.use(expressLayout)  // Tells the express which layout to use
app.set('views', path.join(__dirname,'/resources/views')) // Providing location of Template files
app.set('view engine','ejs') // Setting Template engine

// Tells the express what to respond on opening the PORT
// For home page
app.get('/',function(request, response){
    response.render('home')
})

// For cart page
app.get('/cart',function(request,response){
    response.render('customers/cart')
})
