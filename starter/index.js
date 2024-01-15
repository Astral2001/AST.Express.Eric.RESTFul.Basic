const express = require('express') // commonJS
const app = express() // app express
const port = 8080 // port

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

// listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})