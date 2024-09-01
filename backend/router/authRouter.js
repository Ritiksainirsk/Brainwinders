const express = require("express");
const User = require("../modules/Usermodule");
const bcrypt = require("bcrypt");
const generateTokenAndSetCookie = require("../utils/genarateToken");
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    if (savedUser) {
      const token = generateTokenAndSetCookie(newUser._id, res);

      // Respond with the new user data and token
      res.status(201).json({ user: savedUser,token: token });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const isPosswordCurrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!isPosswordCurrect || !user) {
      return res.status(400).json({ error: "Invailid email or password" });
    }

    const token = generateTokenAndSetCookie(user._id, res);

    return res.status(200).json({ user, isPosswordCurrect ,token: token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal server Error" });
  }
});

// LOGOUT

router.post("/logout", async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    res.status(500).json({ error: "Intarnal server Error" });
  }
});

module.exports = router;
