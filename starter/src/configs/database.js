require('dotenv').config()
const mongoose = require('mongoose')

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const connection = async () => {
    try {
        await mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/`)
        console.log('Database connected!')
    } catch (error) {
        console.log('Database connection failed!', error)
    }
}


module.exports = connection