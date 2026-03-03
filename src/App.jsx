import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { StackSection } from "./components/StackSection";
import { VideoCarousel } from "./components/VideoCarousel";
import { Hero } from "./sections/Hero";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import { Resume_Analyzer } from "./features/Resume_Analyzer";
import { VirtualTryOn } from "./features/VirtualTryOn";
import { LogoShowCase } from "./sections/LogoShowCase";
import FeatureCards from "./sections/FeatureCards";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import Footer from "./sections/Footer";
import { ToastContainer } from "react-toastify";
import TitleHeader from "./components/TitleHeader";
import "react-toastify/dist/ReactToastify.css";
    // Custom Hook
//  export const useToggle = () => {
//     const [val, setVal] = useState(false);
//     const toggle = () => setVal(!val);

//     return [val, toggle];
//   }
function App() {
//const [val, toggle] = useToggle();

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000}/>
        <Navbar />
        <Hero />
        <VideoCarousel />
        <ShowcaseSection />
        <FeatureCards />
        <Experience />
         <LogoShowCase />
        <div className="flex flex-col items-center gap-10 mt-30 " id="features">
          <TitleHeader 
          sub='👕 Try It On Virtually – See It Fit! 👖'
          title="Virtual Try-On Experience"
          />
          <VirtualTryOn />
        </div>
          
        
        
        {/* <Resume_Analyzer /> */}

        <Contact />
        <Footer />




         {/* Custom Hook */}
        {/* <div>
          <button onClick={toggle}>Toggle</button>
         { val && <h1>Heading</h1>}
        </div> */}

    </>
  );
}

export default App;
