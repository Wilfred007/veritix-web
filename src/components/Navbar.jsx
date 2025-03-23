import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 w-full bg-[#000625] z-50'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between space-x-4 lg:space-x-8 items-center h-16'>
          {/* Logo */}
          <Link
            to='/'
            className='text-white text-2xl font-bold flex items-center space-x-2'
          >
            <img
              src={'/veritix_logo.svg'}
              alt='Veritixlogo'
              className='w-24 h-24'
            />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4 lg:space-x-8 whitespace-nowrap max-lg:text-sm'>
            <Link
              to='/'
              className='text-[#00FFA0] border-b-2 border-[#00FFA0] pb-1'
            >
              Home
            </Link>
            <Link
              to='/upcoming-events'
              className='text-white hover:text-[#00FFA0] transition-colors'
            >
              Upcoming Events
            </Link>
            <Link
              to='/how-it-works'
              className='text-white hover:text-[#00FFA0] transition-colors'
            >
              How it Works
            </Link>
          </div>
          <div className='hidden md:flex space-x-4 lg:space-x-8 items-center whitespace-nowrap max-lg:text-sm'>
            <Link
              to='/connect-wallet'
              className='text-[#00FFA0] border border-[#00FFA0] px-6 py-2 rounded-full hover:bg-[#00FFA0] hover:text-[#000625] transition-colors'
            >
              Connect Wallet
            </Link>
            <Link
              to='/sign-up'
              className='bg-[#00FFA0] text-[#000625] px-6 py-2 rounded-full font-medium hover:bg-[#00FFA0]/90 transition-colors'
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white text-2xl z-50'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#000625] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className='flex flex-col pt-20 px-6 space-y-6'>
          <Link
            to='/'
            className='text-[#00FFA0] text-lg border-b border-[#00FFA0] pb-1 w-fit'
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to='/upcoming-events'
            className='text-white text-lg'
            onClick={toggleMobileMenu}
          >
            Upcoming Events
          </Link>
          <Link
            to='/how-it-works'
            className='text-white text-lg'
            onClick={toggleMobileMenu}
          >
            How it Works
          </Link>
          <Link
            to='/connect-wallet'
            className='text-[#00FFA0] border border-[#00FFA0] px-6 py-2 rounded-full text-center'
            onClick={toggleMobileMenu}
          >
            Connect Wallet
          </Link>
          <Link
            to='/sign-up'
            className='bg-[#00FFA0] text-[#000625] px-6 py-2 rounded-full font-medium text-center'
            onClick={toggleMobileMenu}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
