require('dotenv').config() // dotenv

const express = require('express') // commonJS
const mysql = require('mysql2') // commonJS

// require configs
const configViewEngine = require('./configs/viewEngine')
const configStaticFiles = require('./configs/staticFiles')
const connection = require('./configs/database') // as config database

// require routes
const webRoutes = require('./routes/web')

// init app
const app = express() // app express
const hostname = process.env.HOST // hostname
const port = process.env.PORT ?? 8000// port

// config
configViewEngine(app) // view engine
configStaticFiles(app) // static files

// test connection
connection.query(
    'SELECT * FROM Users',
    (err, results, fields) => {
        console.log(err)
        console.log(results) // results contains rows returned by server
        console.log(fields) // fields contains extra meta data about results, if available
    }
)

// routes
app.use('/', webRoutes) // web routes

// listen port
app.listen(port, hostname, () => {
    console.log(`Example app listening at http://${hostname}:${port}`)
})