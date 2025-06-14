const Users = require("../Database/models/users");
const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");

// --- Signup Route ---
authRouter.post("/signUp", async (req, res) => {
  const { name, email, country, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Users({
      name,
      email,
      country,
      password: hashedPassword,
    
    });

    await newUser.save();
    res.status(200).json({ message: "User Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

// --- Login Route ---
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Optionally: Generate and return JWT here
    // const token = generateJWT(user); // if you're using JWT

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
    
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = authRouter;
