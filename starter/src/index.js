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
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
configViewEngine(app) // view engine
configStaticFiles(app) // static files

// routes
app.use('/', webRoutes) // web routes

// listen port
app.listen(port, hostname, () => {
    console.log(`Example app listening at http://${hostname}:${port}`)
})