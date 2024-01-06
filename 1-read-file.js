const { readFile } = require('fs')

console.log('Starting a first task...')

// Basic syntax for the 'readFile' method: fs.readFile(filename, encoding, callback_function)

readFile('./content/first.txt', 'utf-8', (err, res)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(res)
    console.log('First task has been completed.')
})
console.log('Starting the next task...')