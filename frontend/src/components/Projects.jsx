import React from 'react'

import { FaCss3Alt, FaHtml5, FaJs, FaPhp, FaReact, FaSass, FaVuejs, FaAngular, FaBootstrap, FaGithub } from "react-icons/fa6";
import { SiTailwindcss  } from "react-icons/si";

import { projects } from '../constants';

const Projects = () => {
  return (
        <section id="projectSect" className='w-full py-16 px-40'>
          <h1 className='text-4xl font-semibold poppins'>Projects I have worked on!</h1>
          <div className='w-full mt-16 flex items-center justify-between flex-wrap'>

            {projects.map((project, index) => (
              <div className="w-[30%] h-[400px] bg-[#3f6f7133] rounded-lg f-border relative my-10 overflow-hidden addshadow" key={index}>
                <div className="cover"><img src={ project.cover }className='w-full h-auto' /></div>
                <div className="absolute w-full h-56 bg-[#1d5155b3] hover:bottom-0 -bottom-40 left-0 px-10 flex flex-col bottom-rounded">
                    <div className="w-full h-16 flex items-center justify-between">
                        <h1 className='text-2xl font-semibold'><a href={ project.link }>{ project.title }</a></h1>
                        <span className="py-2 px-4 darkgreen rounded-full flex items-center text-xs">{ project.status }</span>
                    </div>

                    <p className="w-full h-10 montserrat">{ project.description }</p>

                    <div className="w-full flex items-center justify-between absolute bottom-0 h-14 left-0 px-10">
                        <span className="flex items-center montserrat"><FaGithub className='mr-2 text-lg' />{ project.gitstars } Stars</span>
                        <ul className="flex">
                            {project.icon.map((icon, iconIndex) => (
                                // Use a switch or if-else block to map the icon string to the corresponding component
                                <li key={iconIndex} className='text-lg mx-[2px]'>
                                    {icon === 'Html' && <FaHtml5 />}
                                    {icon === 'Css' && <FaCss3Alt />}
                                    {icon === 'Js' && <FaJs />}
                                    {icon === 'Php' && <FaPhp />}
                                    {icon === 'React' && <FaReact />}
                                    {icon === 'Sass' && <FaSass />}
                                    {icon === 'Vue' && <FaVuejs />}
                                    {icon === 'Angular' && <FaAngular />}
                                    {icon === 'Bootstrap' && <FaBootstrap />}
                                    {icon === 'Tailwind' && <SiTailwindcss />}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
            ))}

          </div>
      </section>

  )
}

export default Projects