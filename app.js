const http = require('http')

const server = http.createServer((req, res) => {
    console.log('User logged on the server')
})

server.listen(5000)