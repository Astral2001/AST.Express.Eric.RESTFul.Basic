require('dotenv').config() // dotenv

const express = require('express') // commonJS

// require configs
const configViewEngine = require('./configs/viewEngine')
const configStaticFiles = require('./configs/staticFiles')
const connection = require('./configs/database')

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

// models
const Kitten = require('./models/model.demo')

// routes
app.use('/', webRoutes) // web routes

// demo
app.get('/demo', async (req, res) => {
    const silence = new Kitten({ name: 'Silence' })
    await silence.save()
    res.send(silence)
})

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
