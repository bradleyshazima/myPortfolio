import React from 'react'

import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaPython, FaAngular, FaReact, FaBootstrap } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { DiSass } from 'react-icons/di';
import { BsGit } from 'react-icons/bs';
import { styles } from '../styles';

import Tilt from 'react-parallax-tilt';

const Tools = () => {
  return (
    <div className='w-full flex flex-col items-center mt-32 p-4 lg:p-12'>
      <h2 className='lg:text-3xl text-xl montserrat lg:font-semibold font-normal text-center lg:text-left'>Check out my development tools</h2>
      <ul className='flex items-center justify-center lg:mt-16 mt-4 flex-wrap'>
          <li className={`${styles.devTool}`}><AiFillHtml5 /></li>
          <li className={`${styles.devTool}`}><FaCss3Alt /></li>
          <li className={`${styles.devTool}`}><BiLogoJavascript /></li>
          <li className={`${styles.devTool}`}><DiSass /></li>
          <li className={`${styles.devTool}`}><FaPython /></li>
          <li className={`${styles.devTool}`}><FaAngular /></li>
          <li className={`${styles.devTool}`}><FaReact /></li>
          <li className={`${styles.devTool}`}><BsGit /></li>
          <li className={`${styles.devTool}`}><FaBootstrap /></li>
      </ul>
  </div>
  )
}

export default Tools