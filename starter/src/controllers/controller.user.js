// require service
const UserServices = require('../services/service.user')

const UserControllers = {
    getAllUsers: async (req, res) => {
        const users = await UserServices.CRUD.findAll()

        return res.status(200).json({
            errorCode: 0,
            data: users,
        })
    },

    getUserById: async (req, res) => {
        const user = await UserServices.CRUD.findById(req.params.id)

        return res.status(200).json({
            errorCode: 0,
            data: user,
        })
    },

    getUsersByName: async (req, res) => {
        const users = await UserServices.CRUD.findByName(req.body.name)

        return res.status(200).json({
            errorCode: 0,
            data: users,
        })
    },

    postCreateUser: async (req, res) => {
        const { name, email, city } = req.body

        const newUser = await UserServices.CRUD.create({ name, email, city })

        return res.status(200).json({
            errorCode: 0,
            message: 'Create user successfully',
            data: newUser,
        })
    },

    putUpdateUser: async (req, res) => {
        const { id } = req.params
        const { ...data } = req.body

        const updatedUser = await UserServices.CRUD.updateById(id, data)

        return res.status(200).json({
            errorCode: 0,
            message: 'Update user successfully',
            data: updatedUser,
        })
    },

    deleteUserById: async (req, res) => {
        const { id } = req.params

        await UserServices.CRUD.deleteById(id)

        return res.status(200).json({
            errorCode: 0,
            message: 'Delete user successfully',
        })
    },
}

module.exports = UserControllers