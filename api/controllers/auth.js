const User = require("../models/user");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const tempUser = { name, email, password: hashed };
    const user = await User.create({ ...tempUser });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
