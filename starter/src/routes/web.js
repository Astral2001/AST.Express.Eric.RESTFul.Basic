const express = require('express')
const router = express.Router()

// require controllers
const {
    getHomePage,
} = require('../controllers/controller.home')
const {
    getSampleView,
} = require('../controllers/controller.sample')


// routes
router.get('/', getHomePage) // home page

// routes with template engine
router.get('/sample', getSampleView) // sample view

module.exports = router