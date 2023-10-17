const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authModel = require("../models/authModel");

const JWT_SECRET = "ajdhoashdoiqwu80qw"; 

const generateToken = (user) => {
  return jwt.sign({ userId: user.id }, JWT_SECRET);
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await authModel.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    // Check if the password matches
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    // Generate a JWT token
    const token = generateToken(user);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  login,
};
