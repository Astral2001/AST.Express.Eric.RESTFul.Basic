const express = require('express') // commonJS
const app = express() // app express
const port = 8080 // port

// route app
app.get('/', (req, res) =>{
    res.send('Hello World!')
})

// listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})