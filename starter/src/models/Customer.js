const mongoose = require('mongoose');

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
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
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

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;