const express = require('express')
const app = express()

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Home')
    next()
}

app.get('/', logger,(req, res)=>{
    res.send('Home')
})
app.get('/about', logger,(req, res)=>{
    res.send('About')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})

// NOTE: If a middleware function (the 'logger' function in this case) is not sending an HTTP response (string 'Home' in this case),
// the 'next' middleware function needs to be called in order for a route handler/s to execute it's code:

// app.get('/', logger,(req, res)=>{   <<< Route handler
//     res.send('Home')  <<< It's code (Sending a "Home" string as a response)
// })

// In other words, when a middleware function does not end the request-response cycle, it must call the 'next()' function to pass 
// control to the next middleware function. Otherwise, the request will be left hanging or pending, hence the browser keeps spinning.