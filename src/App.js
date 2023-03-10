import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Recommendation from "./components/Recommendation";
import TabsRender from "./components/Tab";
// import WorkSection from "./components/WorkSection";

function App() {
  return (
    <div>
      <Navigation />
      <Hero/>
      <TabsRender />
      <ContactForm />
      {/* <Recommendation /> */}
      {/* <WorkSection /> */}
      <Footer />
    </div>
  );
}

export default App;

