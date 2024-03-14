const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exists" });
    }
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
        userName: user.userName,
        email: user.email,
      },
      process.env.JWTPRIVATEKEY,
      { expiresIn: "2d" }
    );
    const { password, ...info } = user._doc;
    res
      .status(200)
      .cookie("authToken", token, {
        httpOnly: false,
        sameSite: "none",
        secure: true,
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      })
      .send(info);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const logout = async (req, res) => {
  res
    .clearCookie("authToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send({ message: "user has been logged out" });
};

module.exports = { register, login, logout };
