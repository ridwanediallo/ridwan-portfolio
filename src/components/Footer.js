import React from 'react'
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import profile from '../images/ridwan-trans-bg.png';

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
            src={profile}
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="Profile"
          />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Ridwan
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/ridwanediallo">
            <VscGithub className="text-2xl mx-6 mt-1" />
          </a>
          <a href="https://www.linkedin.com/in/ridwan-diallo/">
            <FaLinkedin className="text-2xl mt-1" />
          </a>
          <a href="https://twitter.com/RidwaneD">
            <FaTwitter className="text-2xl mt-1 ml-6" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer
