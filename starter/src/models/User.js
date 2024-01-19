const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    city: String,
})

const User = mongoose.model('User', userSchema)

module.exports = User