import React from 'react';
import contactImage from '../images/ridwan.jpg';

const ContactForm = () => {
  return (
    <section>
      <div className=" text-center mt-28 mb-14">
        <h1 className="text-xl">Contact me</h1> <br />
      </div>
      <div className="flex flex-wrap justify-center text-gray-600 body-font relative">
        <div className="container flex flex-wrap shadow-lg">
          <img
            src={contactImage}
            alt="Image"
            class="md:w-2/5 rounded-l-lg object-cover mr-4"
          />
          <form
            action="https://formspree.io/f/xwkyvenp"
            method="post"
            className="flex flex-wrap -m-2 md:w-3/5"
          >
            <div className="p-2 w-1/2">
              <div className="relative">
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
              <div className="relative">
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
              <div className="relative">
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


      // <div className="container px-5 py-24 mx-auto">
      //   <div className="flex flex-col text-center w-full mb-12">
      //     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      //       Contact Us
      //     </h1>
      //     <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
      //       Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
      //       gentrify.
      //     </p>
      //   </div>
