import React, { useEffect, useRef, useState } from "react";
import { words } from "../constants";
import { Button } from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TypeWriter } from "../components/TypeWriter";
import { think, bg } from "../utils/index";
export const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [loading, setLoading] = useState(true);
  // const imgRef = useRef(null);

  // useEffect(()=>{
  //   if(imgRef.current && imgRef.current.complete){
  //     setLoading(false);
  //   }

  // },[]);

  useGSAP(() => {
    const t1 = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        setShowText(true);
      },
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
    ).fromTo(
      "#think",
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 1,
        duration: 1,
        ease: "power3.inOut",
      },

      "-=0.5",
    );
  });

  return (
    <section id="hero" className="relative ">
      <div className="absolute top-0 left-0 z-10">
        <img src={bg} alt="" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="flex justify-between items-center flex-row max-lg:flex-col ">
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
              {/* absolute size-1/3 right-10  -top-5 xl:top-15 md:top-5  xl:size-1/2 md:right-0 sm:right-5 p-2 z-10 hover:rotate-3 hover:scale-105 */}

              <div className="relative right-10">
                {loading && (
                  <div role="status" className="animate-pulse ">
                    <div className="w-full max-sm:h-58 h-78 flex items-center justify-center bg-gray-300 rounded-md ">
                      <svg
                        class="w-11 h-11 text-fg-disabled"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                <figure className={`${loading ? "hidden" : "block"}`}>
                  <div className="" id="think">
                    <img
                      //ref={imgRef}
                      src={think}
                      alt="thoughts image"
                      className="w-full h-full cursor-zoom-in hover:scale-105 hover:rotate-6 transition-all duration-300"
                      onLoad={() => {
                        setTimeout(() => {
                          setLoading(false);
                        }, 2000);
                      }}
                    />
                  </div>
                </figure>
              </div>
            </div>

            {showText && (
              <TypeWriter
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
            )}

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
      </div>
    </section>
  );
};
