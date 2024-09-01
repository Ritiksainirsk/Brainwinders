const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) => {
  // Generate a JWT token using the saved user's ID
  const token = jwt.sign({ userId },process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  // Set the JWT token as a cookie
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000, // 15 days
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== 'development'
  });

  return token
};

module.exports = generateTokenAndSetCookie;
