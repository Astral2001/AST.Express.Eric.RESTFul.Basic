const connection = require('../configs/database')

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getUsersData = (req, res) => {
    const users = []
    // process data
    connection.query(
        'SELECT * FROM Users',
        (err, results, fields) => {
            if (err) {
                console.log(err)
            } else {
                users.push(...results)

                console.log('results:', results)
                console.log('users:', users)
            }
            res.send(JSON.stringify(users))
        }
    )
}

const postCreateUser = (req, res) => {
    // const { name, email, city } = req.body
    //
    // connection.query(
    //     'INSERT INTO Users (name, email, city) VALUES (?, ?, ?)',
    //     [name, email, city],
    //     (err, results, fields) => {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             console.log('results:', results)
    //         }
    //         res.send(JSON.stringify(results))
    //     }
    // )
    res.send(req.body)
}

module.exports = {
    getHomePage,
    getUsersData, postCreateUser
}