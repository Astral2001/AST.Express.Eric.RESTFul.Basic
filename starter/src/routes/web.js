const express = require('express')
const router = express.Router()

// require controllers
const {
    getHomePage,
    getUpdateUserPage,
    postCreateUser,
    postUpdateUser,
} = require('../controllers/controller.home')
const {
    getSampleView,
} = require('../controllers/controller.sample')


// routes
// home view
router.get('/', getHomePage)
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
// updateUser view
router.get('/update-user/:id', getUpdateUserPage)
// sample view
router.get('/sample', getSampleView)

module.exports = router