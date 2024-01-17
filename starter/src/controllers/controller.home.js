const connection = require('../configs/database')

// services
const {
    getAllUsers, getUserById
} = require('../services/service.CRUD')

const getHomePage = async (req, res) => {
    const users = await getAllUsers()

    return res.render('home.ejs', {
        users,
    })
}

const getUpdateUserPage = async (req, res) => {
    const { id } = req.params

    const user = await getUserById(id)

    return res.render('updateUser.ejs', {
        user,
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

const putUpdateUser = async (req, res) => {
    const { name, email, city, id } = req.body

    const [results, fields] = await connection.query(
        `
            UPDATE
                Users
            SET
                name = ?,
                email = ?,
                city = ?
            WHERE
                id = ?
        `,
        [name, email, city, id],
    )
    console.log('results:', results)
}

module.exports = {
    getHomePage,
    postCreateUser,
    putUpdateUser,
    getUpdateUserPage,
}