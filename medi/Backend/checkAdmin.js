const mongoose = require('mongoose');
const User = require('./Database/models/user');
require('dotenv').config();

const checkAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to database');

    const admin = await User.findOne({ email: 'admin@monastery.com' });
    if (admin) {
      console.log('Admin user found:', {
        email: admin.email,
        firstname: admin.firstname,
        isAdmin: admin.isAdmin
      });
    } else {
      console.log('No admin user found');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
};

checkAdmin();
