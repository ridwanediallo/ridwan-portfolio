import React from 'react';
import { useTranslation } from 'react-i18next';

const skills = {
  languages: [
    {
      name: 'JavaScript',
      icon: '/images/javascript_icon.png',
    },
    {
      name: 'HTML/CSS',
      icon: '/images/html5_icon.png',
    },
    {
      name: 'Ruby',
      icon: '/images/ruby_icon.png',
    },
    {
      name: 'C#',
      icon: '/images/csharp_icon.png',
    },
    {
      name: 'Node.js',
      icon: '/images/node_js_icon.png',
    },
    {
      name: 'PostgreSQL',
      icon: '/images/postgres_icon.png',
    },
  ],
  frameworks: [
    {
      name: 'React.js',
      icon: '/images/react.png',
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
    },
    {
      name: 'VS Code',
      icon: '/images/visual-studio_icon.png',
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
  const { t } = useTranslation();
  return (
    <section id='skills' className="bg-blue-600 py-24">
      <div className="container mx-auto px-10 md:px-0">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-5xl mb-10">
          {t('heading-two')} 💪
        </h2>
        <div className="flex flex-wrap lg:justify-between gap-10">
          <SkillCategory category={t('languages')} skills={skills.languages} />
          <SkillCategory category={t('frameworks')} skills={skills.frameworks} />
          <SkillCategory category={t('tools')} skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
