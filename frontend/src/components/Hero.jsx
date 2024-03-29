import React, { useEffect } from 'react';
import { Avatar, Pattern } from '../assets';
import Typewriter from '../javascript/typewriter.js';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Hero = () => {
 const [ref, inView] = useInView({
    triggerOnce: true, // Change to false if you want the animation to trigger again whenever it comes into view
 });

 useEffect(() => {
    const typewriter = new Typewriter(document.getElementById("typed-text"), ['Full Stack Web Developer', 'Certified Graphic Designer', 'Self Taught UI/UX Designer']);
    typewriter.start();
 }, []);

 return (
    <section id='hero' className='min-w-[100vw] h-[calc(100vh-64px)] max-h-screen mt-16 px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-center overflow-hidden'>
      {/* Text Content */}
      <div className='flex flex-col justify-between md:justify-center w-full lg:flex-1 py-16'>
        <div className=''>
          <h3 className='sm:text-xl md:text-2xl lg:text-3xl font-normal txtbtncolor montserrat'>Hi! I'm Bradley</h3>
          <motion.h1
            id="hero-text"
            className='text-3xl md:text-5xl lg:text-6xl font-bold w-[100%] h-[72px] lg:min-h-[140px] poppins mt-6'
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <span id="typed-text"></span>
            <span id="cursor" className='w-[2px] h-9 ml-1 md:h-[50px] lg:h-[70px] '></span>
          </motion.h1>
          <p className='mt-3 text-xs md:text-base lg:text-base font-extralight montserrat text-justify md:text-left'>
            As a passionate and skilled web designer, I have honed my abilities in various aspects of the field. With expertise in full stack development, self-taught graphic design, and certification in UI/UX, I am dedicated to creating visually appealing and user-friendly websites. Let's collaborate and bring your digital vision to life!
          </p>
        </div>

        <button id="hero-btn" className='mt-8 md:mt-12 font-extralight bg-clip-padding bg-transparent rounded f-border w-full md:w-52 lg:w-64 text-lg py-3 md:py-4 px-6 md:px-8 relative montserrat addshadow'>Check this out</button>
      </div>

      {/* Avatar (only visible on lg screens and above) */}
      <div className='hidden lg:flex items-center justify-end relative w-fit xl:mx-20 mb-10' id='avatar'>
        <img className='h-[300px] lg:h-[400px] xl:h-[560px] w-auto ' src={Avatar} alt="Avatar" />
      </div>
    </section>
 );
};

export default Hero;
