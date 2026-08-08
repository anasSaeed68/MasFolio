import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";

import ShowcaseSection from "./sections/ShowcaseSection";


import LogoShowCase from "./sections/LogoShowCase";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { ToastContainer } from "react-toastify";
import TitleHeader from "./components/TitleHeader";
import "react-toastify/dist/ReactToastify.css";
import { LazySection } from "./components/LazySection";
import TechStack from "./sections/TechStack";
import Education from "./sections/Education";


function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
   
      <Navbar />
      <Hero />

   
 <Education />
    
   
      <LazySection>
        <ShowcaseSection />
      </LazySection>
      
      <Experience />
      <LazySection>
        <LogoShowCase />
      </LazySection>
      <LazySection>
        <TechStack />
      </LazySection>
      
      <LazySection>
        <Contact />
      </LazySection>
      
        <Footer />
      
    </>
  );
}

export default App;
