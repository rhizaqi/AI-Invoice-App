const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorizaion &&
    req.headers.authorizaion.startsWith("Bearer")
  ) {
    try {
      //get token from header
      token = req.headers.authorizaion.split(" ")[1];

      //verify token
      const decoded = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Not authorized, token failed",
      });
    }
  }

  if (!token) {
    return res.statu(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
