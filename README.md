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

