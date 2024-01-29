Node-Express-fcc (freeCodeCamp) tutorial 

This README file serves as a reminder about concepts covered in the tutorial which occupied my attention.

# BUILT-IN MODULES: FS

## Difference between synchronous and asynchronous file reading methods

In Node.js, readFile() and readFileSync() are two methods provided by the fs (file system) module to read files. Here’s how they differ:

readFile(): This is an asynchronous method, which means it doesn’t block the rest of your code from executing while it reads the file. You pass it a callback function, which it will call with the file data once it’s done reading. Here’s an example:

var fs = require('fs');  
fs.readFile('filename', 'utf8', function(err, data) {  
  if (err) throw err;  
  console.log(data);  
});

readFileSync(): This is a synchronous method, which means it blocks the rest of your code from executing until it’s done reading the file. It returns the file data directly. Here’s an example:

var fs = require('fs');  
var data = fs.readFileSync('filename', 'utf8');  
console.log(data);

In general, you should prefer to use readFile() (or other asynchronous methods) in a Node.js application, especially if it’s a web server, to avoid blocking the event loop. However, readFileSync() can be useful in certain situations where you need to read a file before your application can proceed.

## fs.promises API

fs.promises is an API provided by Node.js’s built-in fs (file system) module. It contains a subset of the methods available on fs, but these methods return Promises, making them suitable for use with async and await.

## createReadStream() method

The createReadStream() method is a part of the 'fs' module in Node.js which is used to open up a file or stream and read the data present in it. This method accepts two parameters:

- path: This parameter holds the path of the file where to read the file. It can be a string, buffer, or URL.  
- options: This is an optional parameter that holds a string or an object.  

Syntax: fs.createReadStream(path, options)  

Example:  

let fs = require('fs');  
let reader = fs.createReadStream('input.txt');  

reader.on('data', function(chunk) {  
  console.log(chunk.toString());  
});  

## pipe() method

The pipe() method was added in v0.9.4 of Node.js. Its purpose is to attach a writable stream to a readable stream, allowing data from the readable stream to be passed to the writable stream. This concept can be understood by thinking about connecting two PVC pipes: the first pipe is a readable stream, and the second pipe is a writable stream. The pipe() method acts as a fitting that connects both pipes, allowing data (or water, in the analogy) to flow from one pipe to another.

Example:

// Import the required modules  
const http = require('http');  
const fs = require('fs');  

// Create the HTTP server  
http.createServer(function(req, res) {  
    // Read the content of the data.txt file using fs.createReadStream  
    const readStream = fs.createReadStream('data.txt');  
  
    // Use the pipe() method to send the data to the response object  
    readStream.pipe(res);  
}).listen(8080); 

## on() method (used with the with createReadStream() method)

In Node.js, the on() method is used to register an event handler for a specific event. This method is part of Node’s EventEmitter class.The on() method is used with createReadStream() to handle different events like 'data', 'end', 'error', 'open' and other events.

'data' event:

let fs = require('fs');  
reader = fs.createReadStream('input.txt');  
  
reader.on('data', function(chunk) {  
  console.log(chunk.toString());  
});  

In this example, the ‘data’ event is fired whenever there is data available to read. The callback function is called with a chunk of data (as a Buffer) from the stream.

'end' event:

fs.createReadStream('/file').on('data', (row) => {  
  // process row  
}).on('end', () => {  
  console.log('done processing!')  
})  

In this example, the ‘end’ event is fired when there is no more data to read from the stream.

'error' event:  
  
let fs = require('fs');  
let reader = fs.createReadStream('input.txt');  
  
reader.on('error', function(err) {  
  console.log('Error: ', err);  
});  

'open' event:

let fs = require('fs');  
let reader = fs.createReadStream('input.txt');  
  
reader.on('open', function() {  
  console.log('The file is open');  
});  

In this example, a message is logged to the console when ‘input.txt’ is opened.

# BUILT-IN MODULES: HTTP

The built-in HTTP module in Node.js allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). It’s designed to support many features of the protocol which have been traditionally difficult to use. Here are some key points about the HTTP module:

- It provides the ability to create an HTTP server that listens to server ports and gives a response back to the client.
- It supports large, possibly chunk-encoded, messages.
- It includes classes like http.Agent, http.ClientRequest, http.Server, http.ServerResponse, http.IncomingMessage, and http.OutgoingMessage.
- It provides methods for handling HTTP requests and responses, such as request.end(), request.write(), response.setHeader(), response.writeHead(), and many more.

## Response.send() function

The send() function is used to send the HTTP response. The body parameter can be a String, a Buffer object, an Object, or an Array. 

Syntax: res.send([body])

Example:

const express = require('express'); 
const app = express(); 
const PORT = 3000; 

app.get('/', function(req, res) { 
    res.send({ title: 'GeeksforGeeks' }); 
}); 

app.listen(PORT, function(err) { 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
}); 

In this example, when you navigate to the root URL (http://localhost:3000/), the server will respond with a JSON object { title: 'GeeksforGeeks' }.

## Response.end() method

The response.end() method in Node.js is a part of the HTTP module and is used to signal to the server that all of the response headers and body have been sent, and that the server should consider this message complete.

## createServer() method, requestListener function & req.url property

In Node.js, the requestListener function is a function that is executed each time the server gets a request. This function is passed as a parameter to the http.createServer() method. The requestListener function handles requests (req) from the user, and also the response back to the user (res). The variable that the http.createServer() method is assigned to is typically called a server. Here’s an example:

var http = require('http');  

var server = http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/plain'});  
  res.write('Hello World!');  
  res.end();  
});  

server.listen(8080);  

The req.url property holds the part of the URL that comes after the domain name.

## Response.writeHead() method

 The response.writeHead() method is a part of the http module in Node.js. It’s used to send a response header to the incoming request. Here’s a more detailed breakdown:

Syntax: response.writeHead(statusCode [, statusMessage] [, headers]).
Parameters:

statusCode <number>: This accepts the status codes that are of number type.
statusMessage <string>: This accepts any string that shows the status message.
headers <Object>: This accepts any function, array, or string.

# BUILT-IN MODULES: UTIL

The util module in Node.js is a built-in module that provides various utility functions. It’s often used for debugging, string formatting, type checking, and more. 

## util.promisify(original) method

This method takes a function following the common Node.js callback style and returns a version that returns promises.

# BUILT-IN MODULES: EVENTS

The events module in Node.js is a built-in module that provides a way of working with events. Certain kinds of objects, known as “emitters”, emit named events that cause Function objects, known as “listeners”, to be called. All events in Node.js are instances of the EventEmitter class.

Syntax: const EventEmitter = require('events');  

## eventEmitter.on() method

The on() method is used to add a callback function that will be executed when a specific event is triggered. Here’s an example:

eventEmitter.on('start', () => {  
  console.log('started');  
}); 

## eventEmitter.emit() method

The emit() method in Node.js is part of the EventEmitter class, which is used to handle events. The emit() method is used to trigger an event. You can pass arguments to the event handler by passing them as additional arguments to emit(). For example:

const EventEmitter = require('node:events');    
const eventEmitter = new EventEmitter();   

eventEmitter.on('start', number => {  
  console.log(`started ${number}`);  
});  

eventEmitter.emit('start', 23);  

# THIRD PARTY MODULES - DEPENDENCIES

These are, basically, outside solutions. They are not quality controlled and it's up to developers to assess whether they are
useful or not. 

Main command to install it is 'npm install <packageName>' or short 'npm i <packageName>'
If not indicated with '-g' command, Node.js will install the dependency as a local dependency meaning it will only work in the project
where it is installed.

## Lodash

'Lodash' is a popular JavaScript utility library that provides helpful methods for manipulation and combination of arrays, objects, strings, etc. It’s designed to make JavaScript easier by taking the hassle out of working with complex data structures.

## Nodemon

'Nodemon' is a utility that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. 

# STREAMS IN NODE.JS

Streams in Node.js are used to read and write data sequentially. Streams in Node.js are objects that allow you to read data from a source or write data to a destination in a continuous manner. They are a fundamental concept in Node.js and are used to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

There are four main types of streams in Node.js:  

Writable: Streams to which data can be written. For example, fs.createWriteStream()  
Readable: Streams from which data can be read. For example, fs.createReadStream()  
Duplex: Streams that are both readable and writable. For example, net.Socket  
Transform: Streams that can modify or transform the data as it is written and read. For example, zlib.createDeflate()  

# SECTION: 4 - EXCHANGING DATA ON THE WEB

When using a web browser by entering the URL address in a search bar, you are actually making a request to the server set up to serve
the requested resources. This is done using the HTTP protocol. User sends an HTTP message (req) and then the server sends an HTTP response (res). 

## HTTP message

An HTTP message is a standard format for communication between a client and a server on the web. There are two types of HTTP messages:  requests sent by the client to trigger an action on the server (req), and responses, the answer from the server (res).   

HTTP messages are composed of textual information encoded in ASCII, and span over multiple lines. They consist of:   

- A START-LINE describing the requests to be implemented, or its status of whether successful or a failure;
- An optional set of HTTP HEADERS specifying the request, or describing the body included in the message;  
- A BLANK LINE indicating all meta-information for the request has been sent (the meta-information in an HTTP message refers to the set of HTTP headers that come before the blank line);  
- An optional BODY containing data associated with the request (like content of an HTML form), or the document associated with a    response. The presence of the body and its size is specified by the start-line and HTTP headers.   
The start-line and HTTP headers of the HTTP message are collectively known as the head of the requests, whereas its payload is known as the body; 

Here’s an example of an HTTP request message:   

GET /path/to/file/index.html HTTP/1.0 > > > START LINE                     
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT) > > > HEADERS - FROM HERE  
Host: www.example.com                                    
Accept-Language: en-us                                     
Accept-Encoding: gzip, deflate                                
Connection: Keep-Alive > > > HEADERS - TO HERE                                
                       > > > BLANK LINE  
(name=value pairs of form data) > > > BODY OF THE MESSAGE (CONTAINS DATA AND IT'S OPLTIONAL) 

## HTTP verbs

HTTP verbs, also known as HTTP request methods, indicate the desired action to be performed for a given resource. Here are the most common HTTP verbs:

- GET: Requests a representation of the specified resource. Requests using GET should only retrieve data. 
- HEAD: Asks for a response identical to a GET request, but without the response body. 
- POST: Submits an entity to the specified resource, often causing a change in state or side effects on the server. 
- PUT: Replaces all current representations of the target resource with the request payload. 
- DELETE: Deletes the specified resource. 
- CONNECT: Establishes a tunnel to the server identified by the target resource. 
- OPTIONS: Describes the communication options for the target resource. 
- TRACE: Performs a message loop-back test along the path to the target resource. 
- PATCH: Applies partial modifications to a resource. 
Each of these methods implements a different semantic, but some common features are shared by a group of them. For example, a request method can be safe, idempotent, or cacheable. 

## PORT

In communication networking, a port is a communication endpoint. An HTTP port is a specific port number on a computer that is reserved for HTTP (Hypertext Transfer Protocol) traffic. Most popular protocols, like HTTP, have reserved ports for themselves. For example, the HTTP port is always port 80. These ports are always reserved for common protocols.

When you access a website, your computer uses these port numbers to send and receive information. If the website is unencrypted, your computer uses port 80. If the website is encrypted (HTTPS), your computer uses port 443.

These port numbers are part of the larger TCP/IP protocol, which is used for transmitting data over the internet. The Transmission Control Protocol (TCP) and the User Datagram Protocol (UDP) only need one port for duplex, bidirectional traffic. They usually use port numbers that match the services of the corresponding TCP or UDP implementation, if they exist.

# EXPRESS

Express.js is a popular web framework for Node.js, designed for building web applications and APIs. It’s a small, fast, and un-opinionated framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. 

Here are some key features of Express.js:

- Simplicity: Building a backend from scratch in Node.js can be tedious and time-consuming. Express.js simplifies this process by providing a robust set of features. 
- Routing: Express.js provides methods to specify what function is called for a particular HTTP verb (GET, POST, PUT, etc.) and URL pattern. Here’s an example of an Express route: 

JavaScript 

const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => res.send('Hello World!')); 

app.listen(port, () => console.log(`Example app listening at http://localhost:$ {port}`)); 

- Middleware: Express.js allows for operations to be performed on requests and responses moving through the routes. Middleware can be applied at both the application and route levels and can be chained together. 
- Un-opinionated: Express.js doesn’t enforce a particular code structure, giving developers the freedom to structure their code how they choose.

## Express.js routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)

## Middleware in Express.js

In Express.js, middleware is a series of functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code. 
- Make changes to the request and the response objects. 
- End the request-response cycle. 
- Call the next middleware function in the stack. 
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging. 

An Express application can use the following types of middleware:

- Application-level middleware  
- Router-level middleware  
- Error-handling middleware  
- Built-in middleware  
- Third-party middleware  

# APPLICATION LEVEL MIDDLEWARE

## use() function

The app.use() function in Express.js is a middleware function that is used to mount the specified middleware function(s) at the path that is being specified. It is mostly used to set up middleware for your application.

Syntax: app.use(path, callback)

- path: It is the path for which the middleware function is being called. It can be a string representing a path or path pattern or a regular expression pattern to match the paths.
- callback: It is a middleware function or a series/array of middleware functions.

const express = require('express'); 
const app = express(); 
const PORT = 3000; 

app.use(function (req, res, next) { 
  console.log("Middleware called"); 
  next(); 
}); 

app.get('/user', function (req, res) { 
  console.log("/user request called"); 
  res.send('Welcome to GeeksforGeeks'); 
}); 

app.listen(PORT, function (err) { 
  if (err) console.log(err); 
  console.log(`Server listening on PORT ${PORT}`); 
}); 

# BUILT-IN MIDDLEWARE

## express.static() function

It is used to serve static files such as images, CSS files, and JavaScript files.

Syntax: express.static(root, [options]) 

The root argument specifies the root directory from which to serve static assets.

## express.urlencoded() function

The express.urlencoded() function is used to parse incoming request payloads that are URL-encoded (URL encoded bodies). This means 
it’s a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

Example:

app.post('/', function(req, res) { 
  console.log(req.body); 
  res.end();
}); 

In this example, req.body will contain the data sent in the POST request. The express.urlencoded() middleware function parses the incoming request data and populates req.body.