import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { services } from '../constants';
import { Service } from '../assets';
import { styles } from '../styles';

import { CodeBracketSquareIcon, CursorArrowRaysIcon, MagnifyingGlassCircleIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";

import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section id="about" className='w-full py-10 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center relative mt-16'>
      <h1 className='w-full text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold montserrat text-center'>Guess what!</h1>
      <p className='w-full font-normal text-lg sm:text-xl md:text-xl montserrat text-center'>Here's what I do best'</p>

      <div className='flex w-full justify-end items-center'>
        <div className="custom-prev-button swiper-nav-btn backdrop-blur f-border addshadow trans-div">
          <MdOutlineChevronLeft className='text-2xl sm:text-3xl lg:text-4xl mr-1 ' />
        </div>
        <div className="custom-next-button swiper-nav-btn backdrop-blur f-border addshadow trans-div">
          <MdOutlineChevronRight className='text-2xl sm:text-3xl lg:text-4xl ml-1' />
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        modules={[Navigation]}
        navigation={{
          prevEl: '.custom-prev-button',
          nextEl: '.custom-next-button'
        }}
        className="mySwiper h-[30rem] w-full"
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className={`${styles.serviceCard} backdrop-blur addshadow`}>
              <div className="mb-4 txtbtncolor">
                {service.icon === 'Desktop' && <ComputerDesktopIcon className='h-12 w-12' />}
                {service.icon === 'Code-bracket' && <CodeBracketSquareIcon className='h-12 w-12' />}
                {service.icon === 'Arrow-rays' && <CursorArrowRaysIcon className='h-12 w-12' />}
                {service.icon === 'Magnifying-glass' && <MagnifyingGlassCircleIcon className='h-12 w-12' />}
              </div>
              <h2 className='text-2xl sm:text-3xl lg:text-3xl font-bold poppins mb-3 h-20 w-full'>{service.title}</h2>
              <p className='montserrat font-normal text-base'>{service.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <h3></h3>
      </div>

      <div className="stats flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-[420px] gap-4 mt-12">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-full md:w-2/5 h-full'>
          <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
            <h2 className='text-5xl md:text-9xl font-extrabold poppins mb-2 md:mb-4'>05</h2>
            <p className='text-xl md:text-3xl font-semibold montserrat'>Years Experience</p>
          </div>
        </Tilt>

        <div className={`w-full md:w-3/5 h-full flex flex-col md:flex-row md:flex-wrap gap-4`}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[calc(50%-8px)] h-[calc(50%-8px)]'>
            <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
              <h2 className='text-3xl md:text-4xl font-bold poppins'>12</h2>
              <p className='text-base md:text-xl font-normal montserrat'>Clients</p>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[calc(50%-8px)] h-[calc(50%-8px)]'>
            <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
              <h2 className='text-3xl md:text-4xl font-bold poppins'>05+</h2>
              <p className='text-base md:text-xl font-normal montserrat'>Years Experience</p>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[calc(50%-8px)] h-[calc(50%-8px)]'>
            <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
              <h2 className='text-3xl md:text-4xl font-bold poppins'>20+</h2>
              <p className='text-base md:text-xl font-normal montserrat'>Completed Projects</p>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[calc(50%-8px)] h-[calc(50%-8px)]'>
            <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
              <h2 className='text-3xl md:text-4xl font-bold poppins'>08</h2>
              <p className='text-base md:text-xl font-normal montserrat'>Achievements</p>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
