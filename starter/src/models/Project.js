const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

// Require models
const User = require('./User')
const Customer = require('./Customer')

// Get schemas from models
const UserSchema = User.schema
const CustomerSchema = Customer.schema

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        max: 32,
    },
    date: {
        start: {
            type: String,
        },
        end: {
            type: String,
        },
    },
    customerInfo: CustomerSchema,
    usersInfo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    leader: UserSchema,
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
}, {
    timestamps: true,
})

// soft delete
ProjectSchema.plugin(mongooseDelete, { overrideMethods: 'all' })

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project