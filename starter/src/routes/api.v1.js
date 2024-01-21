const express = require('express')
const router = express.Router()

// require controllers
const UserControllers = require('../controllers/controller.user')
const CustomerControllers = require('../controllers/controller.customer')
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

// routes.customer
// routes.customer.get methods
router.get('/customers', () => {})
// routes.customer.post methods
router.post('/customers', CustomerControllers.postCreateCustomer)
// routes.customer.put methods
// routes.customer.delete methods

// routes.demo
router.get('/demo', (req, res) => {
    res.send('For demo phase only')
})
// routes.demo.get methods
// routes.demo.post methods
router.post('/demo/image', DemoControllers.postUploadImage)
router.post('/demo/images', DemoControllers.postUploadImages)
// routes.demo.put methods
// routes.demo.delete methods

module.exports = router