const connection = require('../configs/database');

// require models
const User = require('../models/User');

const getAllUsers = async () => {

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