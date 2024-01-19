const connection = require('../configs/database');

// require models
const User = require('../models/User');

// require helpers
const { filterGetAllUsers } = require('../helpers/filters/filter.user');

const getAllUsers = async () => {
    return await User.find(filterGetAllUsers())
}

const getUserById = async (id) => {
    return await User.findById(id)
}

const createUser = async (createData) => {
    await User.create(createData)
}

const updateUserById = async (id, updateData) => {
    await User.updateOne({ _id: id }, updateData)
}

const deleteUserById = async (id) => {
    await User.deleteOne({ _id: id })
}

module.exports = {
    getAllUsers, getUserById,
    createUser,
    updateUserById,
    deleteUserById,
}