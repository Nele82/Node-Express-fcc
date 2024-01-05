// OS MODULE

const { log } = require('console')
const os = require('os')

// Info about current user

const user = os.userInfo()

console.log(user)

// Method which returns the system up time in seconds

console.log(`The system has been running for ${os.uptime()} seconds.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)