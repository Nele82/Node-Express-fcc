const EventEmitter = require('events')

// Even though the 'events' module is a Node.js built-in module, when assigned to a variable it is essentialy a Class
// which means that in order to define an Emitter, one needs to create an instance of the EventEmitter class.
// As for Emitters and Listeners, note that certain kinds of objects, called “emitters”, emit named events that cause 
// Function objects, known as “listeners”, to be called

const customEmitter = new EventEmitter()

// LISTENER
customEmitter.on('response', (name, age) => {      
    console.log(`Data received: Name: ${name}; Age: ${age};`)
})
customEmitter.on('response', () => {      
    console.log('some other logic here')
})

// EMITTER WITH THE NAMED EVENT
customEmitter.emit('response', 'John', 34)  

// NOTE: Apart from the the named event, the 'emit' method can have multiple arguments, however they need to be defined as arguments
// in the 'on' method's callback function as well in order to be available for the function.
    
