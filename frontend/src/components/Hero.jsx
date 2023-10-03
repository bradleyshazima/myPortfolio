import React from 'react'

import { Avatar } from '../assets'

const Hero = () => {
  return (
    <>
    <section className='h-[100vh] w-full mt-20 px-40 flex overflow-hidden justify-between'>
        <div className='min-h-[100%] flex flex-col justify-center w-1/2'>
            <h3 className='text-3xl font-normal txtbtncolor montserrat'>Hi! I'm Bradley</h3>
            <h1 id="hero-text" className='text-7xl leading-[96px] font-bold min-w-[100%] min-h-[192px] poppins'>
                <span id="typed-text"></span>
                <span id="cursor"></span>
            </h1>
            <p className='mt-3 text-base font-extralight montserrat'>As a passionate and skilled web designer, I have honed my abilities in various aspects of the field. With expertise in full stack development, self-taught graphic design, and certification in UI/UX, I am dedicated to creating visually appealing and user-friendly websites. Let's collaborate and bring your digital vision to life!</p>
            <button id="hero-btn" className='mt-12 font-extralight bg-clip-padding bg-transparent rounded f-border w-52 text-xl py-4 px-8 relative montserrat addshadow'>Let's Talk</button>
        </div>

        <div className='h-full flex items-end relative'  id='avatar'>
            <img className='h-[800px] w-auto mb-[65px]' src={ Avatar } />
        </div>
    </section>


    
    </>
  )
}

export default Hero