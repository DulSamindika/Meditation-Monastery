import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex flex-col md:flex-row  justify-center'style={{ backgroundImage: "url('assets/img/BgLog.png')",}}>
      
      <div className='text-2xl text-white md:text-[23px] lg:text-3xl md:mt-[80px] text-center md:ml-[-150px] font-serif leading-snug'>
      <div className='md:ml-[35px]'>Meditation Monastery</div>
      <div className='text-xl text-center italic font-light md:mt-2 mb-3'>KithalElla</div>
    </div>

     <div className='flex items-center justify-center'>
       <div className='bg-gray-300/65 w-[290px] lg:w-[336px] h-[380px] lg:h-[415px] rounded-[8px] p-[15px] pl-[18px] ml-0 md:ml-[60px] lg:ml-[100px]'>

            <h1 className='text-center p-[12px] font-bold text-[20px] lg:text-[30px]'>Login</h1>

            
            <div className='p-[0px]'>

                  <div className='flex flex-col justify-center items-start p-1'>
                <div className='flex  items-start'>UserName</div>
                <input type="text" placeholder='UserName' className='p-2 w-[250px]  h-[35px] lg:w-[290px] border border-gray-500 rounded focus:outline-none' />
            </div>

            
            <div className='flex flex-col justify-center items-start p-1'>
                <div className='flex  items-start'>Password</div>
                <input type="password" placeholder='Password' className='p-2 w-[250px] h-[35px] lg:w-[290px] border border-gray-500 rounded focus:outline-none' />
            </div>

           <div className="flex items-center  mb-4 p-1">
                <input  type="checkbox"className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:blue-500" />
                <label className="ml-2 text-sm text-gray-700"> Remember me</label>
          </div>


             </div>
          </div>
       </div>
   </div>
  )
}

export default Login