// services
const {
    findAllUsers, findUserById,
    createUser,
    updateUserById,
    deleteUserById,
} = require('../services/service.User.CRUD')

const getHomePage = async (req, res) => {
    const users = await findAllUsers()

    return res.render('home.ejs', {
        users
    })
}

const getUpdateUserPage = async (req, res) => {
    const { id } = req.params

    const user = await findUserById(id)

    return res.render('updateUser.ejs', {
        user
    })
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
    getHomePage,
    getUpdateUserPage,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
}