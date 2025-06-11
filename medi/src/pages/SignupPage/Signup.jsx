import React from 'react'

const Signup = () => {
  return (
      <div className='min-h-screen bg-cover bg-center flex flex-col md:flex-row  justify-center  gap-x-0 md:gap-x-1 lg:gap-x-[100px]'style={{ backgroundImage: "url('assets/img/BgReg.jpeg')",}}>

        <div className='text-2xl text-white md:text-[23px] lg:text-3xl md:mt-[80px] text-center md:ml-[-150px] font-serif leading-snug'>
      <div className='md:ml-[35px]'>Meditation Monastery</div>
      <div className='text-xl text-center italic font-light md:mt-2 mb-3'>KithalElla</div>
    </div>
       
       <div  className='flex items-center justify-center'>
       <div className='bg-gray-300 bg-opacity-80 w-[316px] lg:w-[330px] h-[415px] lg:h-[450px] rounded-[8px] p-[13px] md:ml-[75px] '>

            <h1 className='text-center p-[12px] font-bold text-[20px] lg:text-[30px]'>Sign Up</h1>

       </div>
        </div> 
      </div>
  )
}

export default Signup