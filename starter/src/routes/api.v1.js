const express = require('express')
const router = express.Router()

// require controllers
const {
    getAllUsers,
    getUsersByName,
    getUserById,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
} = require('../controllers/controller.user')

// routes
// routes.user.get methods
router.get('/', (req, res) => {
    res.send('Hello World')
})
router.get('/users', getAllUsers)
router.get('/users/name', getUsersByName)
router.get('/user/:id', getUserById)

// routes.user.post methods
router.post('/users', postCreateUser)

module.exports = router