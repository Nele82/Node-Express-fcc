// FS MODULE (READ & WRITE - ASYNC)

const fs = require('fs')

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
                console.log(res)
            }
        )
    })
})