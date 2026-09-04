import React, { useEffect } from 'react'
import  "./MacOs.css";

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Dock, Home, Navbar, Welcome } from './components';
import { Contact, Finder, ImageWindowContent, Resume, Safari, Terminal, TextWindowContent } from './windows';


gsap.registerPlugin(Draggable);


const MacOs = () => {
 useEffect(()=>{
   document.body.style.overflow="hidden";
  

   return ()=>{
    document.body.style.overflow="";
   }
  },[])
  
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
      <Navbar />
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
  )
}

export default MacOs