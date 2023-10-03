import React from 'react'

import { navLinks } from '../constants/'

const Navbar = () => {
  return (
    <nav className='w-[100vw] h-20 flex justify-center trans-div b-border fixed top-0 left-0 z-[999] backdrop-blur-lg addshadow'>
        <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}><a className='text-white' href={ link.link }>{ link.title }</a></li>
            ))}
        </ul>
    </nav>

  )
}

export default Navbar