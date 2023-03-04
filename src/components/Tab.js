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
      <div className="text-center mt-28 mb-14 border-b-2">
        <h1 className="text-xl">Recent Projects</h1>
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
                Simple
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
                Full-Stack
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
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
    <>
      <Tabs color="blue" />;
    </>
  );
}
