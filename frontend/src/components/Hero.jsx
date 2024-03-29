import React, { useEffect } from 'react';
import { Avatar } from '../assets';
import Typewriter from '../javascript/typewriter.js';

const Hero = () => {
  useEffect(() => {
    const typewriter = new Typewriter(document.getElementById("typed-text"), ['Full Stack Web Developer', 'Certified Graphic Designer', 'Self Taught UI/UX Designer']);
    typewriter.start();
  }, []);

  return (
    <section className='min-w-[100vw] h-screen mt-20 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row justify-between items-center overflow-hidden'>
      {/* Text Content */}
      <div className='flex flex-col justify-center w-full lg:flex-1'>
        <h3 className='sm:text-xl md:text-3xl lg:text-4xl font-normal txtbtncolor montserrat'>Hi! I'm Bradley</h3>
        <h1 id="hero-text" className='text-3xl md:text-5xl lg:text-7xl font-bold min-w-[100%] min-h-[192px] poppins'>
          <span id="typed-text"></span>
          <span id="cursor" className='w-[2px] h-9 ml-1 md:h-[50px] lg:h-[80px] '></span>
        </h1>
        <p className='mt-3 text-sm md:text-base lg:text-lg font-extralight montserrat'>
          As a passionate and skilled web designer, I have honed my abilities in various aspects of the field. With expertise in full stack development, self-taught graphic design, and certification in UI/UX, I am dedicated to creating visually appealing and user-friendly websites. Let's collaborate and bring your digital vision to life!
        </p>
        <button id="hero-btn" className='mt-8 md:mt-12 font-extralight bg-clip-padding bg-transparent rounded f-border w-full md:w-52 lg:w-64 text-lg py-3 md:py-4 px-6 md:px-8 relative montserrat addshadow'>Let's Talk</button>
      </div>

      {/* Avatar (only visible on lg screens and above) */}
      <div className='hidden lg:flex items-center justify-end relative w-fit xl:mx-20' id='avatar'>
        <img className='h-[300px] lg:h-[400px] xl:h-[700px] w-auto ' src={Avatar} alt="Avatar" />
      </div>
    </section>
  );
};

export default Hero;
