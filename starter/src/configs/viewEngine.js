const path = require('path')

const configViewEngine = (app) => {
    app.set('views', path.join(__dirname, '..', 'views')) // set folder views
    app.set('view engine', 'ejs') // set template engine
}

module.exports = configViewEngine