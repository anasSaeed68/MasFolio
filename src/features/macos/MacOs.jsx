import React, { useEffect, useRef, useState } from 'react'
import  "./MacOs.css";

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Dock, Home, Navbar, Welcome } from './components';
import { Contact, Finder, ImageWindowContent, Resume, Safari, Terminal, TextWindowContent } from './windows';
import dayjs from 'dayjs';


gsap.registerPlugin(Draggable);


const MacOs = () => {
 const [isSignedIn, setIsSignedIn] = useState(false);
 const [password, setPassword] = useState("");
const [isCLicked, setIsClicked] = useState(false);
const loginScreenRef = useRef(null);
const desktopRef = useRef(null);


 useEffect(()=>{
   document.body.style.overflow="hidden";
  

   return ()=>{
    document.body.style.overflow="";
   }
  },[])

useEffect(() => {
  if (isCLicked && !isSignedIn) {
    gsap.fromTo(
      loginScreenRef.current,
      {
        opacity: 0,
        scale: 1.08,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }
}, [isCLicked, isSignedIn]);

useEffect(() => {
  if (isSignedIn) {
    const tl = gsap.timeline();

    tl.fromTo(
      desktopRef.current,
      {
        opacity: 0,
        scale: 1.04,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power2.out",
      }
    );

    tl.from(
      ".macos-navbar",
      {
        opacity: 0,
        y: -15,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }
}, [isSignedIn]);




  const handleSignIn = (event) => {
    event.preventDefault();
    setIsSignedIn(true);
  };

  function handleCLick(){
    if(!isCLicked) setIsClicked(true)
  }
  
  return (
    <div
    style={{
      width: "100dvw",
      height: "100dvh",
      backgroundImage: 'url("/images/wallpaper.png")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      {isSignedIn ? (
        <div ref={desktopRef} className="w-full h-full">
         <div className="macos-navbar">
    <Navbar />
  </div>

  <Welcome />

 
    <Dock />

          <Safari />
          <Terminal />
          <Resume />
          <Finder />
          <TextWindowContent />
          <ImageWindowContent />
          <Contact />
          <Home />
        </div>
      ) : (
        <main
  className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#12151d]/45 text-white before:absolute before:inset-0 before:bg-[#0b0e14]/35 before:backdrop-blur-md"
  onClick={handleCLick}
>
  {!isCLicked ? (
    <div className="w-full h-full flex items-center flex-col">
      <div className="absolute top-10 flex items-center flex-col">
        <h1 className="text-7xl font-extrabold">
          {dayjs().format("h:mm")}
        </h1>

        <h2 className="font-bold">
          {dayjs().format("dddd, MMMM D")}
        </h2>
      </div>

      <p className="bottom-5 absolute opacity-5 animate-pulse transition-colors duration-75">
        Click anywhere to unlock
      </p>
    </div>
  ): <div className="relative z-10 flex w-full max-w-sm flex-col items-center px-6 text-center"
        ref={loginScreenRef}
       >
            <img
              src="/images/anas-2.png"
              alt="Anas Saeed"
              className="mb-5 size-28 rounded-full border-2 border-white/50 object-cover shadow-2xl"
            />
            <h1 className="text-2xl font-medium tracking-wide">Anas Saeed</h1>
            <p className="mt-1 text-sm text-white/75">Welcome back</p>
            <form onSubmit={handleSignIn} className="mt-7 flex w-full flex-col gap-3">
              <label className="sr-only" htmlFor="macos-password">Password</label>
              <input
                id="macos-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoFocus
                autoComplete="current-password"
                placeholder="Password"
                className="w-full rounded-md border border-white/35 bg-black/30 px-4 py-3 text-center text-sm text-white outline-none placeholder:text-white/60 focus:border-white/80 focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="rounded-md bg-white/90 px-4 py-3 text-sm font-semibold text-[#20242d] shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Sign In
              </button>
            </form>
          </div>
       }
          
          {/* <p className="absolute bottom-7 z-10 text-xs text-white/65">Press Enter or select Sign In to continue</p> */}
        </main>
      )}
      </div>
  )
}

export default MacOs
