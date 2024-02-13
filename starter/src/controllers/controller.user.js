// require service
// eventBus service
const eventbus = require('../services/service.role/service.eventBus')
// model service
const UserServices = require('../services/service.user')

const UserControllers = {
// for get methods
    // get all users
    getAllUsers: async (req, res) => {
        const users = await UserServices.CRUD.findAll()

        return res.status(200).json({
            errorCode: 0,
            data: users,
        })
    },
    // get a user by id
    getUserById: async (req, res) => {
        const user = await UserServices.CRUD.findById(req.params.id)

        return res.status(200).json({
            errorCode: 0,
            data: user,
        })
    },
    // get users by name
    getUsersByName: async (req, res) => {
        const users = await UserServices.CRUD.findByName(req.body.name)

        return res.status(200).json({
            errorCode: 0,
            data: users,
        })
    },

// for post methods
    // create a user
    postCreateUser: async (req, res) => {
        const { name, email, city } = req.body

        const newUser = await UserServices.CRUD.create({ name, email, city })

        return res.status(200).json({
            errorCode: 0,
            message: 'Create user successfully',
            data: newUser,
        })
    },

// for put methods
    // update a user by id
    putUpdateUser: async (req, res) => {
        try {
            const { id } = req.params
            const { ...data } = req.body

            const updatedUser = await UserServices.CRUD.updateById(id, data)

            // Emit event userUpdated
            // After user updated, sync data to Project model
            eventbus.emit('userUpdated', id)

            return res.status(200).json({
                errorCode: 0,
                message: 'Update user successfully',
                data: updatedUser,
            })
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },

// for delete methods
    deleteUserById: async (req, res) => {
        const { id } = req.params

        await UserServices.CRUD.deleteOneById(id)

        return res.status(200).json({
            errorCode: 0,
            message: 'Delete user successfully',
        })
    },
}

module.exports = UserControllers