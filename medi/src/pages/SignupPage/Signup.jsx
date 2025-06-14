import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const data = {  name, email, country, password };

    try {
      const response = await axios.post(`http://localhost:5000/signUp`, data);
      console.log('Signup successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed. Please check your details and try again.');
    }
  };

  return (
    <div
      className='min-h-screen bg-cover bg-center flex flex-col md:flex-row justify-center gap-x-0 md:gap-x-1 lg:gap-x-[100px]'
      style={{ backgroundImage: "url('assets/img/BgReg.jpeg')" }}
    >
      <div className='text-2xl text-white md:text-[23px] lg:text-3xl md:mt-[80px] text-center md:ml-[-150px] font-serif leading-snug'>
        <div className='md:ml-[35px]'>Meditation Monastery</div>
        <div className='text-xl text-center italic font-light md:mt-2 mb-3'>KithalElla</div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='bg-gray-300 bg-opacity-80 w-[316px] lg:w-[330px] h-[415px] lg:h-[475px] rounded-[8px] p-[13px] md:ml-[75px]'>
          <h1 className='text-center p-[12px] font-bold text-[20px] lg:text-[30px]'>Sign Up</h1>

          <form className='pt-1 px-[13px] pb-[13px]' onSubmit={handleSignup}>
            <div className='flex flex-col justify-center items-start p-0'>
              <label className='text-[14px]'>Name</label>
              <input
                type='text'
                placeholder='Name'
                className='p-2 w-[255px] lg:w-[275px] h-[30px] border border-gray-500 rounded focus:outline-none text-[14px]'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className='flex flex-col justify-center items-start p-0'>
              <label className='text-[14px]'>Email</label>
              <input
                type='email'
                placeholder='Email'
                className='p-2 w-[255px] lg:w-[275px] h-[30px] border border-gray-500 rounded focus:outline-none text-[14px]'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='flex flex-col justify-center items-start p-0'>
              <label className='text-[14px]'>Country</label>
              <input
                type='text'
                placeholder='Country'
                className='p-2 w-[255px] h-[30px] lg:w-[275px] border border-gray-500 rounded focus:outline-none text-[14px]'
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            <div className='flex flex-col justify-center items-start pb-3 p-0'>
              <label className='text-[14px]'>Password</label>
              <input
                type='password'
                placeholder='Password'
                className='p-2 pb-1 w-[255px] h-[30px] lg:w-[275px] border border-gray-500 rounded focus:outline-none text-[14px]'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

           

            <div className='flex justify-center'>
              <button
                type='submit'
                className='flex items-center justify-center hover:bg-[#1acc8d] bg-[#013220] rounded-[14px] text-[14px] h-[35px] lg:text-[18px] text-white w-[130px] lg:w-[180px]'
              >
                Sign Up
              </button>
            </div>

            <label className='text-[16px] pt-3 text-gray-800'>
              Already exist?
              <button
                type='button'
                onClick={() => navigate('/login')}
                className='text-gray-900 font-semibold bg-transparent p-0 m-0 border-none'
              >
                Login
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
