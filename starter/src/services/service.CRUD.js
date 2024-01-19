const connection = require('../configs/database');

// require models
const User = require('../models/User');

// require helpers
const { filterGetAllUsers } = require('../helpers/filters/filter.user');

const getAllUsers = async () => {
    return await User.find(filterGetAllUsers())
}

const getUserById = async (id) => {

}

const createUser = async (createData) => {
    await User.create(createData)
}

const updateUserById = async (id, updateData) => {

}

const deleteUserById = async (id) => {

}

module.exports = {
    getAllUsers, getUserById,
    createUser,
    updateUserById,
    deleteUserById,
}