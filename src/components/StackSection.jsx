import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger);
export const StackSection = ({children, className}) => {
  gsap.from(`.${className}`,{
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: `.${className}`,
      start: "top 80%",
    }
  });
 
 
  return (
     <>
      <div className={className}> 
          {children}
      </div>
    </>
  )
}
