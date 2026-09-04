import { modesList } from '@/constants/data';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';



function ModeStyle({name, imgClass, pClass,imgUrl,link}){

  const location = useLocation();  
  const navigate = useNavigate();

  console.log(location.pathname);
  const handleRoute = (link) => {

    navigate(link);
}
  
    return (
        <div className={`modes p-1 rounded-2xl  ${location.pathname === link && "bg-green-500 "}`}>
<img src={imgUrl} alt="mode icon" 
      className={`size-10 rounded-full p-1  group-hover:bg-black-50 z-50  ${imgClass}`}
      />
      <p className={`text-gray-300 font-bold text-center p-1.5 rounded-xl z-50 ${pClass}`} onClick={()=>handleRoute(link)}>{name}</p>
      </div>
    )
}


const Modes = () => {

    const [showModes, setShowModes] = useState(false);    
  return (
       <div className="fixed bottom-10 right-5 z-60 flex flex-col gap-5">
    <div className="modes -ml-1 group" onClick={()=>setShowModes(!showModes)}>
       <ModeStyle
       name="Choose Modes"  
       imgClass="modes-img-bg animate-bounce"  
       pClass="modes-p-bg" 
       imgUrl="/icons/mode.png"
       />
    </div>
  

      {showModes && <>
        <div className="absolute left-3 top-0 h-full border-l-4 border-green-500 "/>
      {modesList.map(({id, name, imgClass, pClass,image, symbol,link}) => (
     <div className={`modes ml-2 group`} key={id}>
        <span className="text-cyan-300  font-bold">{symbol}</span>
       <ModeStyle 
       name={name} 
       imgClass={imgClass} 
       pClass={pClass} 
       imgUrl={image}  
       link={link}
       />
      </div>
      ))}
      </>
      }
      
      </div>
  )
}

export default Modes