const pool = require("../../db");
const bcrypt = require("bcrypt");
const { createUser } = require("./queries");

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash password 
        const saltRounds = 10;
        // console.log('Password:', password);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Store user 
        const create = createUser;
        const result = await pool.query(create, [username, email, hashedPassword]);
        const user = result.rows[0];

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    signup,
};
