// FS MODULE (READ & WRITE - ASYNC)

const fs = require('fs')

console.log('starting...')
fs.readFile('./content/first.txt', 'utf-8',(err, res)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = res
    fs.readFile('./content/subfolder/second.txt', 'utf-8', (err, res)=>{
        if (err) {
            console.log(err)
            return
        }
        const second = res
        fs.writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first} ${second}`,
            {flag: 'a'},
            (err, res)=> {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting the next task...')