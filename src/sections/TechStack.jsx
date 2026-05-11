import React, { useEffect, useState } from 'react'
import TitleHeader from './../components/TitleHeader';
import { skillsSet } from '../constants';


const TechStack = () => {
  
  const [text, setText] = useState("");
  const [size , setSize] = useState(600);

  useEffect((effect)=>{
    const updateSize = () => {
      setSize(window.innerWidth < 640 ? 400 : 600);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
   return () => window.removeEventListener("resize", updateSize);
  },[]);

  const radius = (size/2) - 30;
  const [rotation, setRotation] =  useState(0);


  const handleClick = (index, text) => {
    //  const angle = (360/items.length) * index;
    setText(text);
    const step = (2*Math.PI) / skillsSet.length;
    const itemAngle = index * step;
    const targetRotation = -Math.PI/2 - itemAngle;
    setRotation(targetRotation);
  }



  return (
    <div id='skills'>
     <div>
        <TitleHeader 
        title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className='relative w-full max-w-3xl aspect-square mx-auto flex items-center justify-center overflow-hidden'>
          {/* Outer Circle Border */}
       <div className="absolute inset-0 border-4 border-amber-800 rounded-full  circle-bg">
      <div
        className="relative w-full h-full transition-transform duration-700   z-10"
        style={{
          transform: `rotate(${rotation}rad)`
        }}
      >
        {skillsSet.map((skill, i) => {
          const angle = (i / skillsSet.length) * (2 * Math.PI);

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              onClick={() => handleClick(i, skill.details)}
              className="absolute w-14 h-14 sm:w-20 sm:h-20   cursor-pointer flex items-center justify-center "
              style={{
                left: "50%",
                top: "50%",
                transform: `
                  translate(${x}px, ${y}px)
                  translate(-50%, -50%)
                  
                `,
                // transformOrigin:"0 0"
              }}
            > 
              <img 
              className='shadow-lg hover:shadow-gray-800 border-black border-2 rounded-2xl p-1 bg-gray-100'
                src={skill.imgPath}
              style={{
                transform: `rotate(${-rotation }rad)`
              }}
              
              />
                
              
              </div>
          );
        })}
             
      </div>
      
    
    </div>
    {/* Center Content */}
      <div className='absolute  flex items-center justify-center hover:shadow-teal-600 shadow-lg  z-0'>
              <div className='w-38 h-fit  card card-border p-2 border-2 border-y-teal-600 rounded-xl'>
                <p className=' wrap-break-word '>{
                text ? text
                :"Skilled in designing relational databases, writing optimized SQL queries, managing schemas, and handling efficient data storage using MySQL."
                }</p>
              
              </div>
             </div>
      </div>
      </div>
    </div>
  )
}

export default TechStack