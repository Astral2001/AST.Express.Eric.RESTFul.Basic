const connection = require('../configs/database')

const getHomePage = (req, res) => {
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

module.exports = {
    getHomePage
}