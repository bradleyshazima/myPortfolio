import React, { useRef, useState } from 'react';

// Swiper library
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { services } from '../constants';
import { Service } from '../assets';
import { styles } from '../styles';

// Hero Icons library
import { CodeBracketSquareIcon, CursorArrowRaysIcon, MagnifyingGlassCircleIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";

import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section id="about" className='w-full overflow-x-hidden py-20 px-40 flex flex-col items-center relative'>
        <div className='h-full w-1/2 bg-[#01171733] backdrop:blur-2xl absolute -z-[2] top-0 left-0 rounded-[80px] f-border border-l-0 border-b-0'></div>
        <h1 className='w-full text-[56px] font-bold montserrat'>What I do best!</h1>
        <p className='w-full font-normal text-2xl montserrat'>Here are the services I offer</p>

        <div className='flex w-fit self-end'>
            <div className="custom-prev-button swiper-nav-btn backdrop-blur f-border addshadow" onClick={() => handlePrevClick()}>
                <MdOutlineChevronLeft className='text-4xl mr-[2px] ' />
            </div>
            <div className="custom-next-button swiper-nav-btn backdrop-blur f-border addshadow" onClick={() => handleNextClick()}>
                <MdOutlineChevronRight className='text-4xl ml-[2px]' />
            </div>
        </div>

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={false}
            modules={[Navigation]}
            navigation={{
                prevEl: '.custom-prev-button',
                nextEl: '.custom-next-button'
              }}
            className="mySwiper h-[30rem] w-full"
        >
          {services.map((service, index) => (
                <SwiperSlide key={index}>
                    <div className={`${styles.serviceCard} backdrop-blur addshadow`}>
                        <div className="mb-6 txtbtncolor">
                            {service.icon === 'Desktop' && <ComputerDesktopIcon className='h-12 w-12' />}
                            {service.icon === 'Code-bracket' && <CodeBracketSquareIcon className='h-12 w-12' />}
                            {service.icon === 'Arrow-rays' && <CursorArrowRaysIcon className='h-12 w-12' />}
                            {service.icon === 'Magnifying-glass' && <MagnifyingGlassCircleIcon className='h-12 w-12' />}
                        </div>
                        <h2 className='text-4xl font-bold poppins mb-3 h-20 w-full'>{ service.title }</h2>
                        <p className='montserrat font-normal text-base'>{ service.text }</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>


        <div className="stats flex items-center justify-center w-full h-[420px] gap-4">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-2/5 h-full'>
            <div className={`w-full h-full ${styles.td}`}>
                <h2 className='text-9xl font-extrabold poppins'>05</h2>
                <p className='text-3xl font-semibold montserrat'>Years Experience</p>
            </div>
            </Tilt>
            
            <div className={`w-3/5 h-full flex flex-wrap gap-4`}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[calc(50%-8px)] h-[calc(50%-8px)]'>
                <div className={`w-full h-full ${styles.td}`}>
                    <h2 className='text-4xl font-bold poppins'>12</h2>
                    <p className='text-xl font-normal montserrat'>Clients</p>
                </div>
                </Tilt>

                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[calc(50%-8px)] h-[calc(50%-8px)]'>
                <div className={`w-full h-full ${styles.td}`}>
                    <h2 className='text-4xl font-bold poppins'>05+</h2>
                    <p className='text-xl font-normal montserrat'>Years Experience</p>
                </div>
                </Tilt>

                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[calc(50%-8px)] h-[calc(50%-8px)]'>
                <div className={`w-full h-full ${styles.td}`}>
                    <h2 className='text-4xl font-bold poppins'>20+</h2>
                    <p className='text-xl font-normal montserrat'>Completed Projects</p>
                </div>
                </Tilt>

                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className='w-[calc(50%-8px)] h-[calc(50%-8px)]'>
                <div className={`w-full h-full ${styles.td}`}>
                    <h2 className='text-4xl font-bold poppins'>08</h2>
                    <p className='text-xl font-normal montserrat'>Achievements</p>
                </div>
                </Tilt>
            </div>
        </div>
    </section>
  )
}

export default About