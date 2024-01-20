// services
const {
    findAllUsers, findUsersByName, findUserById,
    createUser,
    updateUserById,
    deleteUserById,
} = require('../services/service.User.CRUD')

const getAllUsers = async (req, res) => {
    res.status(200).json(await findAllUsers())
}

const getUserById = async (req, res) => {
    res.status(200).json(await findUserById(req.params.id))
}

const getUsersByName = async (req, res) => {
    res.status(200).json(await findUsersByName(req.body.name))
}

const postCreateUser = async (req, res) => {
    const { name, email, city } = req.body

    await createUser({ name, email, city })

    return res.redirect('/')
}

const postUpdateUser = async (req, res) => {
    const { id, ...data } = req.body

    await updateUserById(id, data)

    return res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const { id } = req.params

    await deleteUserById(id)
    return res.redirect('/')
}

module.exports = {
    getAllUsers,
    getUsersByName,
    getUserById,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
}