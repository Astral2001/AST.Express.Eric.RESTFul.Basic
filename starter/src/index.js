require('dotenv').config() // dotenv

const express = require('express') // commonJS
const fileUpload = require('express-fileupload') // file upload

// require configs
const configViewEngine = require('./configs/viewEngine')
const configStaticFiles = require('./configs/staticFiles')
const connection = require('./configs/database')

// require routes
const apiRoutes = require('./routes/api.v1')

// init app
const app = express() // app express
const hostname = process.env.HOST // hostname
const port = process.env.PORT ?? 8000// port

// config
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(fileUpload()) // for parsing multipart/form-data
configViewEngine(app) // view engine
configStaticFiles(app) // static files

// routes
app.use('/api/v1', apiRoutes) // api routes

// check database connection firstly
// if success, listen port
// if failed, crash app
; (async () => {
    try {
        // connect database
        await connection()

        // listen port
        app.listen(port, hostname, () => {
            console.log(`Example app listening at http://${hostname}:${port}`)
        })
    } catch (error) {
        console.log('Database connection failed!', error)
    }
})()
