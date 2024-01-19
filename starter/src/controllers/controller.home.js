const connection = require('../configs/database')
const { post } = require('../routes/web')

// services
const {
    getAllUsers, getUserById,
    createUser,
    updateUserById,
    deleteUserById,
} = require('../services/service.CRUD')

const getHomePage = async (req, res) => {
    const users = await getAllUsers()

    return res.render('home.ejs', {
        users
    })
}

const getUpdateUserPage = async (req, res) => {
    // const { id } = req.params

    // const user = await getUserById(id)

    return res.render('updateUser.ejs', {
    })
}

const postCreateUser = async (req, res) => {
    const { name, email, city } = req.body

    await createUser({ name, email, city })

    return res.redirect('/')
}

const postUpdateUser = async (req, res) => {
    const { id, ...data } = req.body

    const result = await updateUserById(id, data)
    console.log('result:', result)
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