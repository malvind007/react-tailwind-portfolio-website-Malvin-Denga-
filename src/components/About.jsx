import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' >
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi, I'm Malvin, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                    JUNIOR WEB DEVELOPER: I’m an enthusiastic, responsible and hard working person. Being a self-taught in IT helped me to adopt to the changes quickly and made me a mature team worker. I am able to work well both in a team environment as well as using own initiative. I'm also able to work under pressure and adhere to strict deadlines. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.

                    </div>
                </div>
            </div>
        </div>

  )
}

export default About