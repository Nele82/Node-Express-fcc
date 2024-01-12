const { createReadStream } = require('fs')

const stream = createReadStream('./content/result-sync.txt', { highWaterMark: 90000, encoding: 'utf8' })

// default buffer size is 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('.content/result-sync.txt', { highWaterMark: 90000 })
// const stream = createReadStream('..content/result-sync.txt', { encoding: 'utf8' }) 

stream.on('data', (res)=>{
    console.log(res)
})

stream.on('error', (err)=>{
    console.log(err)
})

// The internal buffer in the context of fs.createReadStream() in Node.js is a temporary storage area in memory where data is 
// kept before it’s sent to its destination. The size of this buffer is determined by the highWaterMark option in fs.createReadStream().
// The default value of highWaterMark is 64KB. This means that Node.js will read data from the file in chunks of 64KB, store it in 
// the internal buffer, and then send it to the stream.