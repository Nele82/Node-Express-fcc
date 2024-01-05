// HTTP MODULE

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.end('Welcome to our Home page!')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Ooops!</h1>
        <p>We cannot seem to find the page you were looking for.</p>
        <a href='/'>Back to the Home page</a>
    `)
})

server.listen(5000)