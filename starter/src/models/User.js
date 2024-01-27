const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const UserSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    city: String,
})

// soft delete
UserSchema.plugin(mongooseDelete, { overrideMethods: 'all' })

const User = mongoose.model('User', UserSchema)

module.exports = User