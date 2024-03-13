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
        _id: this._id,
        userName: this.userName,
        email: this.email,
      },
      process.env.JWTPRIVATEKEY,
      { expiresIn: "2d" }
    );
    res
      .status(200)
      .cookie("authToken", token, {
        httpOnly: false,
        sameSite: "none",
        secure: true,
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      })
      .send({ message: "Login successful", status: 200 });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send({ message: "user has been logged out" });
};

module.exports = { register, login, logout };
