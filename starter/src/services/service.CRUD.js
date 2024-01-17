const connection = require('../configs/database');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        `
            SELECT *
            FROM Users
        `
    );
    return results;
}

const getUserById = async (id) => {
    const [results, fields] = await connection.query(
        `
            SELECT *
            FROM Users
            WHERE id = ?
        `,
        [id]
    );
    return results[0];
}

module.exports = {
    getAllUsers, getUserById
}