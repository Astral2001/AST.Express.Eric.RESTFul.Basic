const connection = require('../configs/database');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        `
            SELECT *
            FROM Users
        `
    )
    return results
}

const getUserById = async (id) => {
    const [results, fields] = await connection.query(
        `
            SELECT *
            FROM Users
            WHERE id = ?
        `,
        [id]
    )

    return results && results.length > 0 ? results[0] : {}
}

const createUser = async (createData) => {
    const [results, fields] = await connection.query(
        `
            INSERT INTO
            Users
                (name, email, city)
            VALUES
                (?, ?, ?)
        `,
        [createData.name, createData.email, createData.city],
    )

    return results
}

const updateUserById = async (id, updateData) => {
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
        [ updateData.name, updateData.email, updateData.city, id ],
    )

    return  results
}

module.exports = {
    getAllUsers, getUserById, createUser, updateUserById
}