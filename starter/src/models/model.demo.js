const mongoose = require('mongoose')

const KittenSchema = new mongoose.Schema({
    name: String
})

const Kitten = mongoose.model('Kitten', KittenSchema)

module.exports = Kitten