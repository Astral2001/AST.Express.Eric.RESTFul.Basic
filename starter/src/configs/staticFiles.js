const express = require('express') // commonJS
const path = require('path') // commonJS

const configStaticFiles = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public'))) // set folder public
}

module.exports = configStaticFiles