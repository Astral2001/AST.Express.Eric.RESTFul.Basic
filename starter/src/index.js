const express = require('express') // commonJS
const path = require('path') // commonJS

const app = express() // app express
const port = 8080 // port

// config template engine
app.set('views', path.join(__dirname, 'views')) // set folder views
app.set('view engine', 'ejs') // set template engine

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

// routes with template engine
app.get('/sample', (req, res) => {
    res.render('sample.ejs')
})

// listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})