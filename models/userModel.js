const pool = require("../db");

const createUser = async (username, email, password) => {
    const createQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *";
    const result = await pool.query(createQuery, [username, email, password]);
    return result.rows[0];
};



module.exports = {
    createUser,
};
