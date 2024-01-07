const {readFile, writeFile} = require('fs').promises //  >  ONE WAY TO DO IT

// ---------------------------------------------------------------------------------

// const util = require('util')
// const readFilePromise = util.promisify(readFile)      >  THE OTHER WAY TO DO IT
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8')
//         const second = await readFilePromise('./content/subfolder/second.txt', 'utf8')
//         await writeFilePromise('./content/result-mind-grenade.txt', 
//         `The util.promisify() method is so cool! Check out the concatenation: ${first} ${second}`
//         )
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
// }

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/subfolder/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt', 
        `The util.promisify() method is so cool! Check out the concatenation: ${first} ${second}`
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// In this exercise, we have used the Node.js built-in module 'util' with the 'promisify()' method
// which literally replaces the commented out 'getText()' function. We made things even easier 
// by using fs.promises, an API provided by Node.js’s built-in fs (file system) module which contains a subset 
// of the methods available on fs. These methods return Promises, making them suitable for use with 'async' and 'await'.