const { writeFileSync } = require('fs')

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/result-sync.txt', 
    `Hello world! ${i} \n`,
    {flag: 'a'}
    )
}