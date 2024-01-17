const connection = require('../configs/database')

// services
const {
    getAllUsers
} = require('../services/service.CRUD')

const getHomePage = async (req, res) => {
    const users = await getAllUsers()

    return res.render('home.ejs', {
        users,
    })
}

const postCreateUser = async (req, res) => {
    const { name, email, city } = req.body

    const [results, fields] = await connection.query(
        `
            INSERT INTO
            Users
                (name, email, city)
            VALUES
                (?, ?, ?)
        `,
        [name, email, city],
    )
    console.log('results:', results)
}

module.exports = {
    getHomePage,
    postCreateUser
}