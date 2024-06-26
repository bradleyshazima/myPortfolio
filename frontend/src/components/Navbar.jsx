import React, { useState } from 'react';
import { navLinks } from '../constants/';
import { FiMenu, FiX } from 'react-icons/fi'; // Import the hamburger menu and close icons

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleLinkClick = () => {
    if (isSideMenuOpen) {
      setIsSideMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top navbar */}
      <nav className='sm:px-4 lg:px-12 b-border trans-div w-full flex lg:justify-center justify-end items-center bg-opacity-50 backdrop-blur-lg fixed top-0 left-0 z-50 h-16 '>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          {/* Hamburger menu button for small screens */}
          <button
            className="lg:hidden"
            onClick={toggleSideMenu}
          >
            {isSideMenuOpen ? <FiX className="text-white" size={24} /> : <FiMenu className="text-white" size={24} />}
          </button>

          {/* Navlinks (only shown on larger screens) */}
          <ul className={`hidden lg:flex items-center gap-4 lg:gap-8`}>
            {navLinks.map((link, index) => (
              <li key={index} className="lg:text-base">
                <a className='text-white montserrat' href={link.link} onClick={handleLinkClick}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Side menu */}
      <div className={`z-50 fixed top-0 right-0 h-full w-64 green  backdrop-blur-lg transform transition-transform duration-200 ease-in-out ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden rounded-l-lg l-border`}>
        <button className="absolute top-4 right-4" onClick={toggleSideMenu}>
          <FiX size={24} />
        </button>
        <ul className="flex flex-col items-center gap-4 p-4">
          {navLinks.map((link, index) => (
            <li key={index} className="text-lg">
              <a className='montserrat' href={link.link} onClick={handleLinkClick}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (shown when side menu is open) */}
      {isSideMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleSideMenu}
        />
      )}
    </>
  );
};

export default Navbar;
