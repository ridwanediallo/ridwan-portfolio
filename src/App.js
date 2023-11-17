import React, { useState, useEffect } from 'react';
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import SkillSection from "./components/SkillSection";
import TabsRender from "./components/Tab";
import TestimonialsSlider from './components/Recommendation';

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
      <NavigationBar scrollingPastHero={scrollingPastHero}/>
      <Hero/>
      <TabsRender />
      <SkillSection />
      <TestimonialsSlider />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

