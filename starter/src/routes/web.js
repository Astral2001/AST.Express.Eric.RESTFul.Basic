const express = require('express')
const router = express.Router()

// require controllers
const {
    getHomePage, postCreateUser
} = require('../controllers/controller.home')
const {
    getSampleView,
} = require('../controllers/controller.sample')


// routes
router.get('/', getHomePage) // home page
router.post('/create-user', postCreateUser) // home page

// routes with template engine
router.get('/sample', getSampleView) // sample view

module.exports = router