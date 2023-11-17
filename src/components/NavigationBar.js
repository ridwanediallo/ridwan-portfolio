import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import profile from '../images/ridwan-trans-bg.png';

const NavigationBar = ({ scrollingPastHero }) => {
  let links = [
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact me', id: 'contact' },
  ];

  let [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const navigationStyle = {
    position: 'sticky',
    top: 0,
    width: '100%',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    ...(scrollingPastHero
      ? { background: '#1c64f2' }
      : { backgroundColor: 'white' }),
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={navigationStyle}>
      <nav className="container mx-auto md:flex py-5 items-center justify-between">
        {/* <img src={logo} alt="" className={`h-16`} /> */}
        <img
          src={profile}
          className="ml-3 h-6 sm:h-9 rounded-full"
          alt="Logo"
        />
        <div
          onClick={() => setisOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pt-16 md:pt-0 pb-12 absolute md:static md:z-auto z-[-1] bg-white md:bg-transparent left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? 'top-0' : 'top-[-490px]'
          }`}
        >
          {links.map((link, index) => (
            <li
              className={`cursor-pointer font-bold my-7 md:my-0 md:ml-8 hover:border-b-2 hover:border-blue-600 transition ${
                scrollingPastHero ? 'md:text-white' : 'text-black'
              }`}
              key={index}
            >
              <Link to={`#${link.id}`} smooth onClick={toggleMenu}>
                {' '}
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            to="#contact"
            onClick={toggleMenu}
            smooth
            className={`btn focus:outline-none py-1 px-3 md:ml-8 rounded md:static ${
              scrollingPastHero
                ? 'bg-white text-blue-600'
                : 'bg-blue-600 text-white'
            }`}
          >
            Contactez nous
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
