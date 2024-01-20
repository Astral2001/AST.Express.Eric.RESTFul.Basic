const express = require('express')
const router = express.Router()

// require controllers
const {
    getAllUsers,
    getUsersByName,
    getUserById,
    postCreateUser,
    putUpdateUser,
    deleteUserById,
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

// routes.user.put methods
router.put('/user/:id', putUpdateUser)

// routes.user.delete methods
router.delete('/user/:id', deleteUserById)

module.exports = router