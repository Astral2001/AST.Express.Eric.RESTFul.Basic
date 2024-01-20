const connection = require('../configs/database');

// require models
const User = require('../models/User');

// require helpers
const {
    filterFindUsersAll,
    filterFindUsersByName,
} = require('../helpers/filters/filter.user');

const findAllUsers = async () => {
    return await User.find(filterFindUsersAll())
}

const findUsersByName = async (name) => {
    return name ? await User.find(filterFindUsersByName(name)) : []
}

const findUserById = async (id) => {
    return await User.findById(id)
}

const createUser = async (createData) => {
    return await User.create(createData)
}

const updateUserById = async (id, updateData) => {
    return await User.updateOne({ _id: id }, updateData)
}

const deleteUserById = async (id) => {
    await User.deleteOne({ _id: id })
}

module.exports = {
    findAllUsers, findUsersByName, findUserById,
    createUser,
    updateUserById,
    deleteUserById,
}