import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import VideoCarousel from "./components/VideoCarousel";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";

import LogoShowCase from "./sections/LogoShowCase";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { ToastContainer } from "react-toastify";
import TitleHeader from "./components/TitleHeader";
import "react-toastify/dist/ReactToastify.css";
import { LazySection } from "./components/LazySection";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Hero />
      <VideoCarousel />

      <LazySection>
        <ShowcaseSection />
      </LazySection>

      <LazySection>
        <FeatureCards />
      </LazySection>

      <Experience />

      <LazySection>
        <LogoShowCase />
      </LazySection>


      <LazySection>
        <Contact />
      </LazySection>
      <LazySection>
        <Footer />
      </LazySection>
    </>
  );
}

export default App;
