const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//    res.sendFile(path.resolve(__dirname, 'navbar-app/index.html'))
//     Adding to static assets


// })

app.all('*', (req, res) => {
    res.status(404).send('Requested resource has not been found.')
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000')
})