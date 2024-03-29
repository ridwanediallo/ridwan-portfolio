import React from 'react';

const Card = ({ data }) => {
  return (
    <>
      {data.map((data) => (
        <div className="w-full mb-6 transition-transform" key={data.id}>
          <div className="mx-4 -mt-6">
            <a href={data.liveLink} blur-shadow-image="true">
              <img
                className="w-auto rounded-lg shadow-md"
                src={`${data.image}`}
                alt="screenshot"
              />
            </a>
          </div>
          <div className="text-secondary flex-1 p-6">
            <h4 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data.title}
            </h4>
            <p className="leading-relaxed mb-3">{data.description}</p>
            <div className="d-flex">
              <button
                className="middle none center rounded-lg bg-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-6"
                data-ripple-light="true"
              >
                <a href={data.liveLink}>Live</a>
              </button>
              <button
                className="middle none center rounded-lg bg-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                <a href={data.sourceLink}>Source</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
