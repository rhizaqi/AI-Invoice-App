const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Helper: Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

//@desc     Register new user
//@route    POST /api/auth/register
//@access   Public

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    //Check if user already exists
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //Create user
    const user = await User.create({ name, email, password });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: user.generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
    
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//@desc     Login user
//@route    GET /api/auth/login
//@access   Public
exports.loginUser = (req, res) => {
  const { email, password } = req.body;
};

//@desc     Get current logged-in user
//@route    GET /api/auth/me
//@access   Private
exports.getMe = (req, res) => {};

//@desc     Update user profile
//@route    PUT /api/auth/me
//@access   Private
exports.updateUserProfile = (req, res) => {};
try {
} catch (error) {
  res.status(500).json({ message: "Server Error" });
}
