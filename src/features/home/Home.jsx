import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import Education from "./sections/Education";
import { LazySection } from "./components/LazySection";
import ShowcaseSection from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";
import LogoShowCase from "./sections/LogoShowCase";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";
import "./variable.css";
import ContactHome from "./sections/ContactHome";

const Home = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowX = "";
      document.body.style.overflowY = "";
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#000",
        color: "#fff",
        fontFamily: "'Mona Sans', sans-serif",
      }}
    >
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
        <ContactHome />
      </LazySection>

      <Footer />
    </div>
  );
};

export default Home;
