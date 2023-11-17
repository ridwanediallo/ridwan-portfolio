import React, { useState } from 'react';
import dataObject from '../data';
import Card from './Card';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  const [data, setData] = useState(dataObject);

  const fontEndData = dataObject.filter((data) => data.front === true);
  const backEndData = dataObject.filter((data) => data.back === true);


  const displayAllProjectHandler = (e) => {
    e.preventDefault();
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
    <>
      <div className=" text-center mt-24 mb-14">
        <h1 className="container mx-auto text-2xl text-start font-bold tracking-tight text-gray-900 sm:text-5xl">
          Recent Projects 📚️
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
    </>
  );
};

export default function TabsRender() {
  return (
    <section id='projects' >
      <Tabs color="blue" />
    </section>
  );
}
