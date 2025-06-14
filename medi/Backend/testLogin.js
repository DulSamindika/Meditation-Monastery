const axios = require('axios');

const testAdminLogin = async () => {
  try {
    console.log('Testing admin login...');
    const response = await axios.post('http://localhost:5000/api/auth/admin/login', {
      email: 'admin@monastery.com',
      password: 'admin123'
    });
    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
  }
};

testAdminLogin();
