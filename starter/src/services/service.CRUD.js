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

module.exports = {
    getAllUsers
}