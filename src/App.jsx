import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import VideoCarousel from "./components/VideoCarousel";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import VirtualTryOn from "./features/VirtualTryOn";
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
        <div className="flex flex-col items-center gap-10 mt-30 " id="features">
          <TitleHeader
            sub="👕 Try It On Virtually – See It Fit! 👖"
            title="Virtual Try-On Experience"
          />

          <VirtualTryOn />
        </div>
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
