import React from 'react';

import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

import image from '../images/undraw_Developer_activity_re_39tg.png'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded w-full"
            alt="hero"
            src={image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi <span className="animate-[wave_5s_ease-in-out_2]">👋</span>,
            <br className="hidden lg:inline-block" />I am Ridwan
          </h1>
          <p className="mb-8  text-white text-base body-font">
            I am a Full-Stack software engineer, currently working as Code
            Reviewer At Microverse. I have more that one year of experience in
            writing code. I am looking for a position as a backend, frontend, or
            full-stack web developer. I am a dedicated and driven professional
            who is eager to build, learn, grow, and be a valuable member of a
            software development team. I have experience working with Ruby,
            JavaScript, PostgreSQL, React, Git, Ruby on Rails, HTML5, CSS3, and
            various web frameworks such as Ruby on Rails, React, and Express.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg">
              Contact me
            </button>
            <a href="https://github.com/ridwanediallo">
              <VscGithub className="text-4xl mx-6 mt-1" />
            </a>
            <a href="https://www.linkedin.com/in/ridwan-diallo/">
              <FaLinkedin className="text-4xl mt-1" />
            </a>
            <a href="https://twitter.com/RidwaneD">
              <FaTwitter className="text-4xl mt-1 ml-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
