import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { services } from '../constants';

import { Service } from '../assets';

import { styles } from '../styles';



const About = () => {
  return (
    <section id="about" className='w-full overflow-x-hidden py-20 px-40 flex flex-col items-center relative'>
        <div className='h-full w-1/2 bg-[#01171733] backdrop:blur-2xl absolute -z-[2] top-0 left-0 rounded-[80px] f-border border-l-0 border-b-0'></div>
        <h1 className='w-full text-[56px] font-bold montserrat'>What I do best!</h1>
        <p className='w-full font-normal text-2xl montserrat'>Here are the services I offer</p>

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper h-[30rem] w-full"
        >
            {services.map((service, index) => (
                <SwiperSlide key={index}>
                    <div className={`${styles.serviceCard} addshadow`}>
                        <div class="blurBg"></div>
                        <div class="icon"><i class="fa-solid fa-pen-nib"></i></div>
                        <h2>{ service.title }</h2>
                        <p>{ service.text }</p>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>


        <table className='w-full mt-16 border-separate b-space'>
            <tr className='h-52'>
                <td rowspan="2" className={`${styles.td}`}>
                    <h2 className='text-9xl font-extrabold poppins'>05</h2>
                    <p className='text-3xl font-semibold montserrat'>Years Experience</p>
                </td>
                <td className={`${styles.td}`}>
                    <h2 className='text-4xl font-bold poppins'>12</h2>
                    <p className='text-xl font-normal montserrat'>Clients</p>
                </td>
                <td className={`${styles.td}`}>
                    <h2 className='text-4xl font-bold poppins'>05+</h2>
                    <p className='text-xl font-normal montserrat'>Years Experience</p>
                </td>
            </tr>
            <tr className='h-52'>
                <td className={`${styles.td}`}>
                    <h2 className='text-4xl font-bold poppins'>20+</h2>
                    <p className='text-xl font-normal montserrat'>Completed Projects</p>
                </td>
                <td className={`${styles.td}`}>
                    <h2 className='text-4xl font-bold poppins'>08</h2>
                    <p className='text-xl font-normal montserrat'>Achievements</p>
                </td>
            </tr>
        </table>
    </section>
  )
}

export default About