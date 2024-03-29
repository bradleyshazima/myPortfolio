import React from 'react'

import { FaCss3Alt, FaHtml5, FaJs, FaPhp, FaReact, FaSass, FaVuejs, FaAngular, FaBootstrap, FaGithub } from "react-icons/fa6";
import { SiTailwindcss  } from "react-icons/si";

import { projects } from '../constants';

const Projects = () => {
  return (
        <section id="projectSect" className='w-full py-16 px-20 mt-40'>
          <h1 className='text-4xl font-semibold poppins'>Projects I have worked on!</h1>
          <div className='w-full mt-8 flex items-center justify-between flex-wrap'>

            {projects.map((project, index) => (
                <div className="w-[48%] h-[200px] bg-[#3f6f7133] rounded-lg f-border my-5 overflow-hidden addshadow" key={index}>
                    <div className='w-full bg-slate-400 h-12'>{project.title}</div>
                </div>
            ))}

          </div>
      </section>

  )
}

export default Projects