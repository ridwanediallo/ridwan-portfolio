import React from 'react';

const skills = {
  languages: [
    {
      name: 'JavaScript',
      icon: '/images/javascript_icon.png',
      //   icon: 'fab fa-js-square',
    },
    {
      name: 'HTML/CSS',
      icon: '/images/html5_icon.png',
      //   icon: 'fas fa-code',
    },
    {
      name: 'Ruby',
      icon: '/images/ruby_icon.png',
      //   icon: 'fab fa-js-square',
    },
    {
      name: 'C#',
      icon: '/images/csharp_icon.png',
      //   icon: 'fas fa-code',
    },
    {
      name: 'Node.js',
      icon: '/images/node_js_icon.png',
      //   icon: 'fas fa-code',
    },
    {
      name: 'PostgreSQL',
      icon: '/images/postgres_icon.png',
      //   icon: 'fas fa-code',
    },
    // Add more languages
  ],
  frameworks: [
    {
      name: 'React.js',
      icon: '/images/react.png',
      //   icon: 'fab fa-react',
    },
    {
      name: 'Rails',
      icon: '/images/rails_icon.png',
    },
    {
      name: 'Express.js',
      icon: '/images/react.png',
    }
  ],
  tools: [
    {
      name: 'Git',
      icon: '/images/git_icon.png',
    },
    {
      name: 'GitHub',
      icon: '/images/github_icon.png',
      //   icon: 'fas fa-code',
    },
    {
      name: 'VS Code',
      icon: '/images/visual-studio_icon.png',
      //   icon: 'fas fa-code',
    },
    // Add more tools
  ],
};

const SkillCategory = ({ category, skills }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{category}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 lg:grid-rows-2 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow-md rounded-md text-center hover:bg-black hover:text-white"
        >
          {/* <i className={`text-4xl ${skill.icon} text-indigo-500 mb-2`}></i> */}
          <img src={skill.icon} alt="" />
          <p
            className="text-lg font-semibold overflow-ellipsis whitespace-nowrap"
            title={skill.name}
          >
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const SkillSection = () => {
  return (
    <section className="bg-blue-600 py-24">
      <div className="container mx-auto px-16 md:px-0">
        <h2 className="text-3xl font-semibold mb-10 text-white text-center">Skills</h2>
        <div className="flex flex-wrap lg:justify-between gap-10">
          <SkillCategory category="Languages" skills={skills.languages} />
          <SkillCategory category="Frameworks" skills={skills.frameworks} />
          <SkillCategory category="Tools" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
