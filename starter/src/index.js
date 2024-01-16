require('dotenv').config() // dotenv

const express = require('express') // commonJS
const mysql = require('mysql2') // commonJS

// require configs
const configViewEngine = require('./configs/viewEngine')
const configStaticFiles = require('./configs/staticFiles')

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
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

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