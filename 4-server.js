const http = require('http')
const { log } = require('util')

// METHOD: createServer (method of the built in 'http' module)
// Syntax: http.createServer(requestListener)
// - - - requestListener - - - This is a function that gets executed every time the server 
// receives a request. This function, often referred to as a requestListener,
// handles requests from the user and responses back to the user. It takes two primary arguments: 
// the request (commonly written as 'req') and the response (commonly written as 'res').

const server = http.createServer((req, res) => {
    console.log('Request event')
    res.end('Hello World!')
})

// METHOD: listen (part of the HTTP Server object in Node.js)
// Syntax: server.listen(port, hostname, backlog, callback)
// - - - port - - - Specifies the port we want to listen to.
// - - - hostname - - - Specifies the IP address we want to listen to. If omitted, the server will accept connections directed to any IPv4 address.
// - - - backlog - - - Specifies the max length of the queue of pending connections. Default is 511.
// - - - callback - - - Specifies a function to be executed when the listener has been added.

server.listen(5000, () => {
    console.log('Server listening on port: 5000')
})

// Both 'http.createServer()' and 'server.listen()' methods are asynchronous. This asynchronous behavior is a key feature of Node.js.
// More info on this at https://medium.com/linkit-intecs/what-is-synchronous-vs-asynchronous-in-node-js-4b45ee668e6f

