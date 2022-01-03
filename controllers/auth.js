const User = require("../models/User");
const jwt = require("jsonwebtoken");

// REGISTER USER
exports.registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json("Pls provide email, password, username");
  }

  const newUser = new User({
    username,
    email,
    password,
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
      return res.status(401).json("Invalid Credentials");
    }

    // method to find password and compare it
    const match = await user.matchPassword(password);

    if (!match) {
      res.status(401).json("Invalid Credentials");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    // sending everything as response except password
    const { password: userPassword, ...other } = user._doc;
    res.status(200).json({ ...other, accessToken });
  } catch (error) {
    next(error);
  }
};
