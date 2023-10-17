const pool = require("../db");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash password 
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Store user 
        const user = await userModel.createUser(username, email, hashedPassword);

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    signup,
};
