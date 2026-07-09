import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'



export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll= () => {

            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a href="#hero" className='logo'>
            MAS Folio
        </a>
        <nav className='desktop'>
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

        {/* <a href={resume} rel="noopener noreferrer" className='contact-btn group' target="_blank">
            <div className='inner'>
                <span>Download Resume</span>
            </div>
        </a> */}
<p className="flex items-center gap-2">
  <span className="inline-block size-4 rounded-full bg-green-500 animate-pulse" />
  <span className="font-medium text-white-50 max-w-[220px] sm:max-w-none">
    Open to Full-Stack Software Engineering Opportunities
  </span>
</p>
      </div>
    </header>
  )
}
