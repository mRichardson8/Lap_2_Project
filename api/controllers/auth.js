const User = require("../models/user");

const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
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
