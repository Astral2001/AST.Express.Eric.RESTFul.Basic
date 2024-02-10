const express = require('express')
const router = express.Router()

// require controllers
const UserControllers = require('../controllers/controller.user')
const CustomerControllers = require('../controllers/controller.customer')
const ProjectControllers = require('../controllers/controller.project')
const DemoControllers = require('../controllers/controller.demo')

router.get('/', (req, res) => {
    res.send('Hello World')
})

// routes.user
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
router.get('/customers', CustomerControllers.getManyCustomers)
router.get('/customer/:id', CustomerControllers.getCustomerById)
// routes.customer.post methods
router.post('/customers', CustomerControllers.postCreateCustomer)
router.post('/customers/many', CustomerControllers.postManyCustomers)
// routes.customer.put methods
router.put('/customer/:id', CustomerControllers.putUpdateCustomer)
router.put('/customer/restore/:id', CustomerControllers.putRestoreACustomer)
router.put('/customers/restore/many', CustomerControllers.putRestoreManyCustomers)
// routes.customer.delete methods
router.delete('/customer/:id', CustomerControllers.deleteCustomerById)
router.delete('/customers/many', CustomerControllers.deleteManyCustomers)

// routes.project
// routes.project.get methods
router.get('/projects', ProjectControllers.getManyProjects)
// routes.project.post methods
router.post('/projects', ProjectControllers.postProject)
// routes.project.put methods
// routes.project.delete methods

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