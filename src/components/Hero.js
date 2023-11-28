import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import resumePDF from '../resume.pdf';

import image from '../images/undraw_Developer_activity_re_39tg.png'

const Hero = () => {
    const { t } = useTranslation();
    const downloadResume = () => {
      window.open(resumePDF, '_blank');
    };

  return (
    <section id="hero" className="text-gray-600 body-font bg-black lg:py-24">
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
            {t('greeting')} <span className="animate-wave inline-block">👋</span>
            <br className="hidden lg:inline-block" />{t('name')}
          </h1>
          <p className="mb-8  text-white text-base body-font">
            {t('about-me')}
          </p>
          <div className="flex justify-center">
            <button onClick={downloadResume} className="inline-flex text-white bg-blue-600 hover:border py-2 px-6 focus:outline-none hover:bg-transparent hover:border-blue-600 rounded text-lg">
              {t('hire-me')}
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
