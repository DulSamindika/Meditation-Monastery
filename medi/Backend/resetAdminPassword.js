const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./Database/models/user');
require('dotenv').config();

const resetAdminPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to database');

    // Update admin password
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const result = await User.updateOne(
      { email: 'admin@monastery.com' },
      { $set: { password: hashedPassword } }
    );

    if (result.modifiedCount > 0) {
      console.log('Admin password reset successfully');
    } else {
      console.log('No admin user found to update');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
};

resetAdminPassword();
