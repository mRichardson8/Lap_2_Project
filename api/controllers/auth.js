const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) { 
      throw new Error('No such user');
    }
    const authed = bcrypt.compare(req.body.password, user.password);
    if (!!authed) {
      const payload = { name: user.name, email: user.email};
      const sendToken = (err, token) => {
        if (err) {
          throw new Error('Error in token generation');
        }
        res.status(200).json ({
          success: true,
          token: 'Bearer ' + token,
        });
      };
      jwt.sign(payload, process.env.SECRET, { expiresIn: 3600}, sendToken);
    } else {
      throw new Error('User could not be authenticated');
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ err });
  }
};

module.exports = {
  register,
  login,
};
