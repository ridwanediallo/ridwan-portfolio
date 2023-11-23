import React from 'react';
import { useTranslation } from 'react-i18next';
import contactImage from '../images/rid.jpeg';

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 ">
      <div className="container mx-auto text-center mt-28 md:mb-14">
        <h1 className="text-start pt-5 ml-5 md:ml-0 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t('heading-four')} 🤙
        </h1>{' '}
        <br />
      </div>
      <div className="flex flex-wrap justify-center text-gray-600 body-font pb-5">
        <div className="container flex flex-wrap shadow-lg p-4 rounded-md">
          <img
            src={contactImage}
            alt="ridwan"
            className="md:w-2/5 rounded-l-lg object-cover mr-4"
          />
          <form
            action="https://formspree.io/f/xwkyvenp"
            method="post"
            className="flex flex-wrap -m-2 md:w-3/5 p-4"
          >
            <div className="p-2 w-1/2">
              <div className="">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto rounded-lg bg-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Contact me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
