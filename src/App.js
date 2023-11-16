import React, { useState, useEffect } from 'react';

import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import NavigationBar from "./components/NavigationBar";
import Recommendation from "./components/Recommendation";
import SkillSection from "./components/SkillSection";
import TabsRender from "./components/Tab";
// import WorkSection from "./components/WorkSection";

function App() {
  const [scrollingPastHero, setScrollingPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrollingPastHero(true);
      } else {
        setScrollingPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      {/* <Navigation /> */}
      <NavigationBar scrollingPastHero={scrollingPastHero}/>
      <Hero/>
      <TabsRender />
      <SkillSection />
      <ContactForm />
      {/* <Recommendation /> */}
      {/* <WorkSection /> */}
      <Footer />
    </div>
  );
}

export default App;

