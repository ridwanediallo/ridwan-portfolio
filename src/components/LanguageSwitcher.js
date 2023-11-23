import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)} className="border border-gray-300 rounded-md px-3 py-1 ml-4">
      <option value="en" className='m-1'>English</option>
      <option value="fr" className='m-1'>Français</option>
      <option value="ar" className='m-1'>Arabic</option>
    </select>
  );
};

export default LanguageSwitcher;
