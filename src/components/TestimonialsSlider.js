import React, { useEffect, useRef, useState } from 'react';
import KeenSlider from 'keen-slider';
import { useTranslation } from 'react-i18next';
import 'keen-slider/keen-slider.min.css';

const TestimonialsSlider = () => {
  const {t} = useTranslation();

  const testimonies = [
    {
      id: 1,
      name: `Emirjeta Veisllari`,
      title: 'Full-Stack web Developer',
      image: '/images/ridwan.jpeg',
      testimony: t('Emi'),
    },
    {
      id: 2,
      name: 'Brahim Didi',
      title: 'Full-Stack Developer',
      profile: 'https://linkedin.com/in/ridwan-diallo/',
      image: '/images/ridwan.jpeg',
      testimony: t('Brahim'),
    },
    {
      id: 3,
      name: 'Adekunle Ismail',
      title: 'Web Developer',
      profile: 'https://linkedin.com/in/ridwan-diallo/',
      image: '/images/ridwan.jpeg',
      testimony: t('Ismail'),
    },
    {
      id: 4,
      name: `Said Rašinlić`,
      title: 'Software Developer',
      profile: 'https://linkedin.com/in/ridwan-diallo/',
      image: '/images/ridwan.jpeg',
      testimony: t('Said'),
    },
    {
      id: 5,
      name: 'Mohammed Mahdi',
      title: 'Full-Stack Developer',
      profile: 'https://linkedin.com/in/ridwan-diallo/',
      image: '/images/ridwan.jpeg',
      testimony: t('Mohammad'),
    },
  ];

  const [showMoreStates, setShowMoreStates] = useState(
    testimonies.map(() => false)
  );
  const sliderRef = useRef(null);

  // Initialize Keen Slider on component mount
  useEffect(() => {
    if (sliderRef.current) {
      const keenSlider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      // Add event listeners for previous and next buttons
      const keenSliderPrevious = document.getElementById(
        'keen-slider-previous'
      );
      const keenSliderNext = document.getElementById('keen-slider-next');

      keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
      keenSliderNext.addEventListener('click', () => keenSlider.next());
    }
  }, []);

  const toggleShowMore = (index) => {
      setShowMoreStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        return newStates;
      });
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('heading-three')} 🤗
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-blue-600 p-3 text-rose-600 transition hover:bg-blue-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-blue-600 p-3 text-rose-600 transition hover:bg-blue-600 hover:text-white"
            >
              <svg
                className="h-5 w-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {testimonies.map((testimony, index) => (
              <div key={testimony.id} className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="mt-4">
                      <img
                        className="h-16 w-16 rounded-full"
                        src={testimony.image}
                        alt=""
                      />
                      <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                        {testimony.name}
                      </p>
                      <div className="flex gap-0.5 text-blue-600 mt-5">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        {showMoreStates[index]
                          ? testimony.testimony
                          : testimony.testimony.substring(0, 200) + '...'}
                      </p>
                      {testimony.testimony.length > 200 && (
                        <button
                          onClick={ () => toggleShowMore(index)}
                          className="mt-4 text-white bg-blue-600 hover:border hover:text-blue-600 py-2 px-6 focus:outline-none hover:bg-transparent hover:border-blue-600 rounded text-lg"
                        >
                          {showMoreStates[index] ? 'Show less' : 'Show more'}
                        </button>
                      )}
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; {testimony.title}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
