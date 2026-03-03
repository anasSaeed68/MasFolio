import React, { useState } from "react";
import { words } from "../constants";
import { Button } from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TypeWriter } from "../components/TypeWriter";

export const Hero = () => {
  const [showText, setShowText] = useState(false);
  
  useGSAP(() => {

    const t1 = gsap.timeline({
      delay:0.5,
      onComplete: () => {
        setShowText(true);
      }
    });

    t1.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }, 
    ).fromTo("#think",{
      x:50,
      opacity: 0,
    },{
      x:0,
      opacity:1,
      stagger:1,
      duration:1,
      ease:"power3.inOut",
    },
    
    "-=0.5"
  
  );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Real Projects</h1>
              <h1>that deliver Results</h1>
            </div>

          { showText && <TypeWriter
            text={`
               Hi, I'm Anas Saeed, a passionate Full-Stack Developer dedicated to
              crafting seamless web/mobile applications experiences. With expertise in both
              front-end and back-end technologies, I specialize in building
              robust applications that not only look great but also perform
              flawlessly. Let's collaborate to bring your ideas to life and
              create impactful digital solutions together.
              `}
              tag="p"
              className="text-white-50 md:text-xl relative z-10 pointer-events-none"
            />
          }

            {/* <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Anas Saeed, a passionate Full-Stack Developer dedicated to
              crafting seamless web/mobile applications experiences. With expertise in both
              front-end and back-end technologies, I specialize in building
              robust applications that not only look great but also perform
              flawlessly. Let's collaborate to bring your ideas to life and
              create impactful digital solutions together.
            </p> */}

            {/* Button */}
            <Button
              text={"See My Work"}
              className="md:w-80 md:h-16 w-60 h-12"
              id="work"
            />
          </div>
        </header>

        <figure>
          <div className="absolute size-1/3 right-10  -top-5 xl:top-15 md:top-5  xl:size-1/2 md:right-0 sm:right-5 p-2 z-10 hover:rotate-3 hover:scale-105 " id="think">
              <img src="/images/thinking.png" alt="thoughts image" 
              className="w-full h-full "
              />
          </div>
        </figure>
      </div>
    </section>
  );
};
