const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        max: 32,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    image: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

// soft delete
CustomerSchema.plugin(mongooseDelete, { overrideMethods: 'all' })

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer