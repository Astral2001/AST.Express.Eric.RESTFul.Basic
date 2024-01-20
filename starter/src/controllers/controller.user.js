// services
const {
    findAllUsers, findUsersByName, findUserById,
    createUser,
    updateUserById,
    deleteUserById,
} = require('../services/service.User.CRUD')

const getAllUsers = async (req, res) => {
    const users = await findAllUsers()

    return res.status(200).json({
        errorCode: 0,
        data: users,
    })
}

const getUserById = async (req, res) => {
    const user = await findUserById(req.params.id)

    return res.status(200).json({
        errorCode: 0,
        data: user,
    })
}

const getUsersByName = async (req, res) => {
    const users = await findUsersByName(req.body.name)

    return res.status(200).json({
        errorCode: 0,
        data: users,
    })
}

const postCreateUser = async (req, res) => {
    const { name, email, city } = req.body

    const newUser = await createUser({ name, email, city })

    return res.status(200).json({
        errorCode: 0,
        message: 'Create user successfully',
        data: newUser,
    })
}

const putUpdateUser = async (req, res) => {
    const { id } = req.params
    const { ...data } = req.body

    const updatedUser = await updateUserById(id, data)

    return res.status(200).json({
        errorCode: 0,
        message: 'Update user successfully',
        data: updatedUser,
    })
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
    putUpdateUser,
    postDeleteUser,
}