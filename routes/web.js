const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')

// Tells the express what to respond on opening the PORT
function allRoutes(app){
    // For home page
    app.get('/', homeController().index)
    // Instead of homeController().index directly the below code could have been used
    // function(request, response){
    //     response.render('home')
    // }
    // But to manage properly it's used in this way
    
    // For cart page
    app.get('/cart', cartController().cart)

    //For login page
    app.get('/login', authController().login)

    //For register page
    app.get('/register', authController().register)
}

module.exports = allRoutes