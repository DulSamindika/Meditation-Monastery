const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./Database/models/user");
require("dotenv").config();

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@monastery.com" });
    if (existingAdmin) {
      console.log("Admin user already exists");
      process.exit(0);
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const adminUser = new User({
      firstname: "Admin",
      secondname: "User",
      email: "admin@monastery.com",
      password: hashedPassword,
      isAdmin: true,
    });

    await adminUser.save();
    console.log("Admin user created successfully");
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    mongoose.connection.close();
  }
};

createAdminUser();
