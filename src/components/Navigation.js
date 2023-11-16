import { useState } from 'react';
import profile from '../images/ridwan-trans-bg.png';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navigation({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 py-6 bg-black">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img
            src={profile}
            className="ml-3 h-6 sm:h-9 rounded-full"
            alt="Flowbite Logo"
          />
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2 text-base">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2 text-base">Recommendations</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2 text-base">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
