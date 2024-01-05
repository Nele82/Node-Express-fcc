// FS MODULE (READ & WRITE - SYNC)

const fs = require('fs')

const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/subfolder/second.txt', 'utf8')

console.log(first, second)

fs.writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first} ${second}`,
    {flag: 'a'} // Flag 'a' stands for append meaning that, when the 'a' flag is set, whatever is set to be written in the designated
    // file would be added in addition to what is already in the file. Otherwise, the content of the file would just be owerwritten
    )