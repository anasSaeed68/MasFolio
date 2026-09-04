import React from 'react'
import useWindowStore from '../store/window';
import { Maximize2, Minus, X } from 'lucide-react';

const WindowControls = ({target}) => {
 const {closeWindow} = useWindowStore();

 
    return (
    <div id='window-controls'>
       <div className="close group" onClick={() => closeWindow(target)}>
  <X
  strokeWidth={5}
    className="opacity-0 group-hover:opacity-100 text-gray-800 font-bold size-3"
  />
</div>

<div className="minimize group">
  <Minus
    
    strokeWidth={5}
    className="opacity-0 group-hover:opacity-100 size-3 font-bold text-gray-800"
  />
</div>

<div className="maximize group">
  <Maximize2
  
    strokeWidth={3}
    className="opacity-0 group-hover:opacity-100 size-3 font-bold text-gray-800"
  />
</div>
    </div>
  )
}

export default WindowControls