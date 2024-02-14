const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

// Require models
const User = require('./User')
const Project = require('./Project')

// Get schemas from models
const UserSchema = User.schema
const ProjectSchema = Project.schema

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'done'],
        default: 'pending',
    },
    date: {
        start: {
            type: String,
        },
        end: {
            type: String,
        },
    },
    userInfo: UserSchema,
    projectInfo: ProjectSchema,
}, {
    timestamps: true,
})

// soft delete
TaskSchema.plugin(mongooseDelete, { overrideMethods: 'all' })

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task