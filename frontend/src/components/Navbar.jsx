import React from 'react'

import { navLinks } from '../constants/'

const Navbar = () => {
  return (
    <nav className='w-[100vw] h-20 flex justify-center trans-div b-border'>
        <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}><a className='text-white' href={ link.link }>{ link.title }</a></li>
            ))}
        </ul>
    </nav>

  )
}

export default Navbar