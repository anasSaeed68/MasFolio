import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'


gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(()=>{
        //Animation for main section
        gsap.fromTo(sectionRef.current,
            {opacity:0 },
            {
                opacity: 1,
                duration: 1.5
            }
        );

        //Aniamtion for each app showcase

        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(card, {
                y:50,
                opacity: 0,
            },
             { y: 0, 
                opacity: 1, 
                duration: 1, 
                delay: 0.3 * (index + 1),
                scrollTrigger:{
                    trigger: card,
                    start: 'top bottom-=100',
                }
             }
        
        );
        });
    },[]);

  return (
    <div id='work' className='app-showcase' ref={sectionRef}>
        <div className='w-full'>
            <div className='showcase-layout'>
                <div className='first-project-wrapper' ref={rydeRef}>
                <div className='image-wrapper'>
                <img src="/images/project1.png" alt="Ryder app interface" className='transition-transform duration-200 ease-in-out hover:rotate-2 hover:scale-105'/>
                </div>
            
            <div className='text-content'>
                <h2>
                    On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde
                </h2>
                <p className='text-white-50 md:text-xl'>An app built with React Native, Expo & Tailwindcss for a fast, user-friendly experience.</p>
            </div>
        </div>

        <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={libraryRef}>
                <div className='image-wrapper bg-[#FFEFDB]'>
                    <img src="/images/project2.png" alt="Library Management Platform" className='transition-transform duration-200 ease-in-out hover:rotate-2 hover:scale-105'/>
                </div>
                <h2>The Library Management Platform</h2>
            </div>
             <div className='project' ref={ycDirectoryRef}>
                <div className='image-wrapper bg-[#FFEFDB]'>
                    <img src="/images/project3.png" alt="YC Directory App" className='transition-transform duration-200 ease-in-out hover:rotate-2 hover:scale-105'/>
                </div>
                <h2>YC Directory - A Start Showcase App</h2>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
