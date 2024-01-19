require('dotenv').config()
const mongoose = require('mongoose')

const connection = async () => {
    try {
        const options = {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME,
        }
        await mongoose.connect(process.env.DB_HOST, options)
        console.log('Database connected!')
    } catch (error) {
        console.log('Database connection failed!', error)
    }
}


module.exports = connection