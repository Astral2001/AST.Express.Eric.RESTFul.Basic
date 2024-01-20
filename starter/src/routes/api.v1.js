const express = require('express')
const router = express.Router()

// require controllers
const UserControllers = require('../controllers/controller.user')
const DemoControllers = require('../controllers/controller.demo')

router.get('/', (req, res) => {
    res.send('Hello World')
})
// routes.users
// routes.user.get methods
router.get('/users', UserControllers.getAllUsers)
router.get('/users/name', UserControllers.getUsersByName)
router.get('/user/:id', UserControllers.getUserById)
// routes.user.post methods
router.post('/users', UserControllers.postCreateUser)
// routes.user.put methods
router.put('/user/:id', UserControllers.putUpdateUser)
// routes.user.delete methods
router.delete('/user/:id', UserControllers.deleteUserById)

// routes.demo
router.get('/demo', () => {})

module.exports = router