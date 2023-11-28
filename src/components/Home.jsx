import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
     
      {/*Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Malvin Denga</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Junior Web Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I’m an enthusiastic, responsible and hard
          working person. Being a self-taught in IT helped me to adopt to the
          changes quickly and made me a mature team worker. I am able to
          work well both in a team environment as well as using own initiative.
          I am able to work under pressure and adhere to strict deadlines.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3' />
          </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home