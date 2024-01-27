const express = require('express')
const app = express()
const logger = require('./logger')

app.use(logger)

app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})
app.get('/api/products', (req, res)=>{
    res.send('Products')
})
app.get('/api/items', (req, res)=>{
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})

// A 'use()' function (app level middleware) could be used to apply a middleware function to the whole application, 
// however it needs to be applied before route handlers as middleware functions need to be declared first.