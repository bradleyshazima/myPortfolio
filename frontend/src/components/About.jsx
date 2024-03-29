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
    <section id="about" className='w-full py-10 px-4 lg:px-20 flex flex-col items-center relative mt-0 lg:mt-16'>
      <h1 className='w-full text-3xl sm:text-2xl md:text-5xl lg:text-4xl font-bold montserrat text-center'>Guess what!</h1>
      <p className='w-full font-normal text-base md:text-xl montserrat text-center'>Here's what I do best'</p>

      <div className='flex w-full justify-end items-center'>
        <div className="custom-prev-button swiper-nav-btn backdrop-blur f-border addshadow trans-div h-8 w-8 lg:h-12 lg:w-12 mr-2">
          <MdOutlineChevronLeft className='text-xl lg:text-4xl mr-[2px] ' />
        </div>
        <div className="custom-next-button swiper-nav-btn backdrop-blur f-border addshadow trans-div h-8 w-8 lg:h-12 lg:w-12">
          <MdOutlineChevronRight className='text-xl lg:text-4xl ml-[2px]' />
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
              <div className="lg:mb-4 mb-2 txtbtncolor">
                {service.icon === 'Desktop' && <ComputerDesktopIcon className='lg:h-12 lg:w-12 h-8 w-8' />}
                {service.icon === 'Code-bracket' && <CodeBracketSquareIcon className='lg:h-12 lg:w-12 h-8 w-8' />}
                {service.icon === 'Arrow-rays' && <CursorArrowRaysIcon className='lg:h-12 lg:w-12 h-8 w-8' />}
                {service.icon === 'Magnifying-glass' && <MagnifyingGlassCircleIcon className='lg:h-12 lg:w-12 h-8 w-8' />}
              </div>
              <h2 className='text-2xl lg:text-3xl font-bold poppins lg:mb-3 mb-1 lg:h-20 h-14 w-full'>{service.title}</h2>
              <p className='montserrat font-normal lg:text-base text-sm'>{service.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='w-full h-10 flex justify-center flex-start'>
        <h4 className='montserrat mt-[-120px]'>A little bit more stats about me . . .</h4>
      </div>

      <div className="stats flex flex-col lg:flex-row items-center justify-center w-full h-auto gap-4 lg:mt-12 mt-[-16px]">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-full md:w-2/5 h-full'>
          <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
            <h2 className='text-3xl lg:text-9xl font-extrabold poppins mb-2 md:mb-4'>04</h2>
            <p className='text-base lg:text-3xl font-normal montserrat'>Years Experience</p>
          </div>
        </Tilt>

        <div className={`w-full md:w-3/5 h-full flex lg:flex-col flex-wrap gap-4`}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[47%] flex-1'>
            <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
              <h2 className='text-2xl lg:text-4xl font-bold poppins'>12</h2>
              <p className='text-sm md:text-xl font-normal montserrat'>Clients</p>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[47%] flex-1'>
            <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
              <h2 className='text-2xl lg:text-4xl font-bold poppins'>12</h2>
              <p className='text-sm md:text-xl font-normal montserrat'>Development Tools</p>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[47%] flex-1'>
            <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
              <h2 className='text-2xl lg:text-4xl font-bold poppins'>20+</h2>
              <p className='text-sm md:text-xl font-normal montserrat'>Completed Projects</p>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[47%] flex-1'>
            <div className={`w-full h-full ${styles.td} flex flex-col items-center justify-center`}>
              <h2 className='text-2xl lg:text-4xl font-bold poppins'>08</h2>
              <p className='text-sm md:text-xl font-normal montserrat'>Achievements</p>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
