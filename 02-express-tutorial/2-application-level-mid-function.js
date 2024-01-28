const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// app.use([logger, authorize])

app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})
app.get('/api/products', (req, res)=>{
    res.send('Products')
})
app.get('/api/items', [logger, authorize], (req, res)=>{
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})

// A 'use()' function (app level middleware) could be used to apply a middleware function to the whole application, 
// however it needs to be applied before route handlers as middleware functions need to be declared first. 

// If a route is added as a parameter (in this case '/api'), the middleware function will be applied only to the given route/s.

// If there are multiple middleware functions imported, they are passed in the 'use()' function or directly to the route handler 
// through an array. NOTE: in such a case the order (in this case, the first one is 'logger' and the second is 'authorize') will
// determine which middleware function gets executed first.