const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middleware/auth");

let refreshTokenCollection = [];

// REFRESH TOKEN
exports.refreshToken = async (req, res) => {
  const refreshToken = req.body.token;

  if (refreshToken === null) {
    return res.status(401).json("Token is null");
  }

  if (!refreshTokenCollection.includes(refreshToken)) {
    return res
      .status(403)
      .json("Refresh token collection dosen't have ref token");
  }

  jwt.verify(refreshToken, "mySecret", (error, user) => {
    if (error) {
      console.log(error);
    }
    refreshTokenCollection = refreshTokenCollection.filter(
      (token) => token !== refreshToken
    );

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokenCollection.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
};

// REGISTER USER
exports.registerUser = async (req, res, next) => {
  const { username, email, password, isAdmin } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json("Pls provide email, password, username");
  }

  const newUser = new User({
    username,
    email,
    password,
    isAdmin,
  });

  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// LOGIN USER
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("Pls provide email and a password");
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json();
    }

    // method to find password and compare it
    const match = await user.matchPassword(password);

    if (!match) {
      return res.status(401).json();
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // sending everything as response except password
    const { password: userPassword, ...other } = user._doc;

    res.status(200).json({ ...other, accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

exports.logoutUser = async (req, res) => {
  refreshTokenCollection = refreshTokenCollection.filter(
    (token) => token !== req.body.token
  );
  res.status(200).json("LOGOUT YAYY WORK WOKR");
};
