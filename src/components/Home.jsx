import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
     
      {/*Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Malvin Denga</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Junior Web Developer.</h2>
        <p className='text-[#ffffff] py-4 max-w-[700px]'>
        An enthusiastic and detail-oriented Junior Frontend Developer with proficient knowledge in HTML and CSS, JavaScript, Vue JS, React JS, Tailwind and Bootstrap. Seeking to utilize my technical skills and expertise to provide value to the employer and contribute to successful projects both today and in the future. Aiming to take on new challenges and utilize my coding and debugging skills for developing new features and enhance the overall user experience.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link  activeClass="active" 
            to="work"  
            smooth={true} 
            offset={50} 
            duration={500}>
            View Work
          </Link>
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