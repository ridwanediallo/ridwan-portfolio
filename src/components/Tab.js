import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Card from './Card';

const Tabs = ({ color }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Force re-render on language change
    i18n.changeLanguage(i18n.language);
  }, [i18n.language]);

  const dataObject = [
    {
      id: 'project-2',
      title: `Space Traveler's Hub`,
      image: '/images/space-traveler.png',
      sourceLink: 'https://github.com/ridwanediallo/Space-travelers--hub',
      liveLink: 'https://ridwanediallo.github.io/Space-travelers--hub/',
      tech1: 'React',
      tech2: 'Redux',
      tech3: 'Bootstrap',
      tech4: ' React-Router',
      stack: ['React', 'React-Router', 'Redux', 'Bootstrap'],
      end: 'Front-End Dev',
      front: true,
      description: t('SpaceTHub'),
    },
    {
      id: 'project-3',
      title: 'Tonic',
      canopy: 'Canopy',
      image: '/images/countries.png',
      sourceLink: 'https://github.com/ridwanediallo/The-Countries',
      liveLink: 'https://rid-the-counties.netlify.app/',
      tech1: 'React',
      tech2: 'Redux',
      tech3: 'React-Router',
      stack: ['React', 'React-Router', 'Redux', 'Bootstrap'],
      front: true,
      description: t('Countries'),
    },
    {
      id: 'project-4',
      title: 'BookStore CMS',
      canopy: 'Canopy',
      image: '/images/bookstore.png',
      sourceLink: 'https://github.com/ridwanediallo/Bookstore-CMS',
      liveLink: 'https://rid-bookstore-cms.netlify.app/',
      tech1: 'React',
      tech2: 'Redux',
      stack: ['React', 'React-Router', 'Redux', 'Bootstrap'],
      end: 'Front-End Dev',
      front: true,
      description: t('BookStore'),
    },
    {
      id: 'project-5',
      title: 'Budget App',
      canopy: 'Canopy',
      image: '/images/countries.png',
      sourceLink: 'https://github.com/ridwanediallo/Bookstore-CMS',
      liveLink: 'https://rid-bookstore-cms.netlify.app/',
      tech1: 'React',
      tech2: 'Redux',
      stack: ['React', 'React-Router', 'Redux', 'Bootstrap'],
      end: 'Front-End Dev',
      back: true,
      description: t('BudgetApp'),
    },
    {
      id: 'project-6',
      title: 'Recipe App',
      canopy: 'Canopy',
      image: '/images/bookstore.png',
      sourceLink: 'https://github.com/ridwanediallo/Bookstore-CMS',
      liveLink: 'https://rid-bookstore-cms.netlify.app/',
      tech1: 'React',
      tech2: 'Redux',
      stack: ['React', 'React-Router', 'Redux', 'Bootstrap'],
      end: 'Front-End Dev',
      back: true,
      description: t('RecipeApp'),
    },
  ];

  const [openTab, setOpenTab] = useState(1);
  const [data, setData] = useState(dataObject);

  const fontEndData = dataObject.filter((data) => data.front === true);
  const backEndData = dataObject.filter((data) => data.back === true);

  const displayAllProjectHandler = () => {
    setOpenTab(1);
    setData(dataObject);
  };
  const displayFrontEndProjectHandler = (e) => {
    e.preventDefault();
    setOpenTab(2);
    setData(fontEndData);
  };
  const displayFullStackProjectHandler = (e) => {
    e.preventDefault();
    setOpenTab(3);
    setData(backEndData);
  };
  return (
    <section id="projects">
      <div className=" text-center mb-5 mt-10 ml-5 md:mt-24 md:mb-14">
        <h1 className="container mx-auto text-2xl text-start font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t('heading-one')} 📚️
        </h1>{' '}
        <br />
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="container">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-2"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                data-toggle="tab"
                href="#link1"
                role="tablist"
                onClick={displayAllProjectHandler}
              >
                All
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={displayFrontEndProjectHandler}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Front-End Projects
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={displayFullStackProjectHandler}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Full-Stack Project
              </a>
            </li>
          </ul>
          <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="lg:grid grid-cols-2">
                    <Card data={data} />
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="lg:grid grid-cols-2">
                    <Card data={data} />
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div className="lg:grid grid-cols-2">
                    <Card data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TabsRender() {
  return (
    <section id="projects">
      <Tabs color="blue" />
    </section>
  );
}
