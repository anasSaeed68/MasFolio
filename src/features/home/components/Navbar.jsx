import React, { useEffect, useState } from 'react'
import { navLinks } from '../data/homeData';



export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
       const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll= () => {

            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);

            const topY = window.scrollY;
                  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            
                  const progress = Math.max(0, (topY / documentHeight) * 100)
                
                  console.log(Math.floor(progress));
                  setScrollProgress(Math.floor(progress));
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[]);


  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} `}>
          <span className="fixed top-2 left-0 z-50 h-2 progressBar-bg transition-all duration-100 rounded-2xl " 
            style={{
              width: `${scrollProgress}%`
             }}
            /> 
      <div className='inner'>
        
        <a href="#hero" className='logo'>
            MAS Folio
        </a>
        <nav className='desktop bg-transparent! backdrop-blur-none!'>
            <ul>
                {navLinks.map(({link,  name})=> (
                    <li key={name} className='group'>
                        <a href={link}>
                            <span>{name}</span>
                            <span className='underline'/>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

     
<p className="flex items-center gap-2">
  <span className="inline-block size-4 rounded-full bg-green-500 animate-pulse" />
  <span className="font-medium text-white-50 max-w-[220px] sm:max-w-none">
    Open to Work
  </span>
</p>
      </div>
      
    </header>
  )
}
