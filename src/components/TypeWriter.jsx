import React, { useEffect, useState } from 'react'

export const TypeWriter = ({text, tag, className}) => {
    const [displayed, setDisplayed] = useState("");
    
    useEffect(() => {
        let index = 0;
        let start;
        const step = (timestamp) => {
            if(!start) start = timestamp;
            const progress = timestamp - start;
            if(progress > 10){
                setDisplayed((prev) => prev + text[index]);
                index++;
                start = timestamp;
            }

            if(index < text.length-1) requestAnimationFrame(step);
        };

      const raf = requestAnimationFrame(step);

      return () => cancelAnimationFrame(raf);


    },[text]);
    const Tag = tag;

  return (
    <Tag className={`${className} transition-all duration-300 `}>{displayed} <span className=' font-extrabold text-xl animate-bounce transition duration-200 rotate-5 inline-block border-b-6 border-b-white rounded-2xl bg-green-400  text-transparent'>|</span></Tag>
  )
}
