const express = require('express')
const router = express.Router()

// require controllers
const {
    getHomePage,
    getUpdateUserPage,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
} = require('../controllers/controller.home')
const {
    getSampleView,
} = require('../controllers/controller.sample')


// routes
// home view
router.get('/', getHomePage)
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
// updateUser view
router.get('/update-user/:id', getUpdateUserPage)
// sample view
router.get('/sample', getSampleView)

module.exports = router