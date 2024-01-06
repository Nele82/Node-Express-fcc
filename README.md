Node-Express-fcc (freeCodeCamp) tutorial 

This README file serves as a reminder about concepts covered in the tutorial which occupied my attention.

# Node.js built-in modules: FS

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

# Node.js built-in modules: HTTP

## Response.end() method

The response.end() method in Node.js is a part of the HTTP module and is used to signal to the server that all of the response headers and body have been sent, and that the server should consider this message complete.

# Node.js third-party modules - dependencies

These are, basically, outside solutions. They are not quality controlled and it's up to developers to assess whether they are
useful or not. 

Main command to install it is 'npm install <packageName>' or short 'npm i <packageName>'
If not indicated with '-g' command, Node.js will install the dependency as a local dependency meaning it will only work in the project
where it is installed.

## Lodash

'Lodash' is a popular JavaScript utility library that provides helpful methods for manipulation and combination of arrays, objects, strings, etc. It’s designed to make JavaScript easier by taking the hassle out of working with complex data structures.

## Nodemon

'Nodemon' is a utility that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. 