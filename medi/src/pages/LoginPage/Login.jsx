import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:5000/login', data);

  

      console.log('Login success:', response.data);
      navigate('/accommodation');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid username or password.');
    }
  };

  return (
    <div className='min-h-screen bg-cover bg-center ' style={{ backgroundImage: "url('assets/img/BgLog.png')" }}>
      <div className='md:flex md:justify-center md:pt-[150px]'>
<div className='text-2xl text-white md:text-[23px] lg:text-4xl  font-bold  font-serif leading-snug'>
        <div className='md:ml-[35px]'>Meditation Monastery</div>
        <div className='text-xl text-center italic font-light md:mt-2 mb-3'>KithalElla</div>
      </div>

      <div className='flex items-center justify-center '>
        <div className='bg-gray-300/65 w-[290px] lg:w-[336px] h-[380px] lg:h-[415px] rounded-[8px] p-[15px] pl-[18px] ml-0 md:ml-[60px] lg:ml-[100px]'>

          <h1 className='text-center p-[12px] font-bold text-[20px] lg:text-[30px]'>Login</h1>

          <div className='p-[0px]'>
            <div className='flex flex-col justify-center items-start p-1'>
              <label className='text-sm'>Email</label>
              <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-2 w-[250px] h-[35px] lg:w-[290px] border border-gray-500 rounded focus:outline-none'
                required
              />
            </div>

            <div className='flex flex-col justify-center items-start p-1'>
              <label className='text-sm'>Password</label>
              <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='p-2 w-[250px] h-[35px] lg:w-[290px] border border-gray-500 rounded focus:outline-none'
                required
              />
            </div>

            <div className="flex items-center mb-4 p-1">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label className="ml-2 text-sm text-gray-700"> Remember me</label>
            </div>

            <div className='flex justify-center pb-3'>
              <button
                onClick={handleLogin}
                className='hover:bg-[#1acc8d] bg-[#013220] p-2 rounded-[14px] text-[16px] lg:text-[18px] text-white w-[100px] lg:w-[180px]'
              >
                Login
              </button>
            </div>

            <label className='text-[16px] p-1 text-gray-800'>
              Not Registered yet?
              <button
                onClick={() => navigate('/signup')}
                className='text-gray-900 font-semibold bg-transparent p-0 m-0 border-none'
              >
                Sign Up
              </button>
            </label>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
