import React, { useEffect, useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import { educationList } from '../constants'
import { StackSection } from '../components/StackSection'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const Education = () => {

  const educationRef = useRef([]);


  useEffect(()=>{

    const ctx = gsap.context(()=>{
 educationRef.current.forEach((element) =>{
        if(!element) return;

        gsap.from(element, {
          opacity:0,
          x:100,
          duration: 1,
          ease: "power2.out",
          scrollTrigger:{
            trigger: element,
            start: "top 50%",
            toggleActions: "play none none reverse",
          }
        })
      })
    });

    return () => ctx.revert();
     
  },[]);



  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-20" id='education'>

            <TitleHeader  title="🎓 My Education"
  sub="Academic Journey"/>
    <div className='space-y-12 w-full max-w-5xl'>
   {educationList.map((education, index) => (

        
        
        <div className=' shadow-blue-400/60 shadow-lg edu-block p-4 gap-2' key={index} ref={(el) => educationRef.current[index] = el}>
            <span className='inline-block py-2 px-3 border-2 border-blue-900 rounded-2xl text-sm mb-2 bg-purple-900'>📅 {education.date}</span>
            <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>{education.uniName}</h3>
            <h4 className='text-gray-300 font-bold'>{education.degName}</h4>
           <p className='text-gray-400 font-bold'>
             {education.desc}
           </p>
           <span className='inline-block h-0.5 bg-gray-600'></span>
           <div className='space-y-6 mt-2'>
            <h5 className='flex gap-2 items-center'><span className="inline-block border-2 p-1 border-blue-300 bg-blue-700 rounded-lg">📚 </span>Relevant Courses</h5>
            <div className='grid  grid-cols-2 md:grid-cols-3  gap-2'>
                 
                {education.courses.map((course) => (
<span className='p-3 border border-blue-600 rounded-lg text-center bg-blue-900 flex items-center justify-center cursor-pointer shadow-2xl hover:shadow-purple-700 hover:border-purple-950' key={course}>{course}</span>
                ))} 
            
            </div>
            </div>
           </div>
        </div>
      
     ))
   }
</div>
    </div>
  )
}

export default Education