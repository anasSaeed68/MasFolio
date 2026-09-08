import React, {useState } from 'react'

import { WindowControls } from '../components';
import { educationStack, helpStack, techStack } from '../data/macIndex';
import WindowWrapper from '../hoc/WindowWrapper';
import dayjs from 'dayjs';
import { Check, Flag } from 'lucide-react';

const Terminal = () => {
 
const [command, setCommand] = useState("");
const [showStack, setShowStack] = useState(false);
const [data, setData] = useState([]);
const [typeStack, setTypeStack] = useState("");

const handleCommand = (e) =>{
  if(e.key !=="Enter" || command.length<4) return;

  const cmd = command.trim().toLowerCase().split(' ');

   if(cmd[0] === "--help"){
     if(helpStack.length > 0){
      setData(helpStack)
      setTypeStack(cmd[0])
      setShowStack(true);
     }
      
  }
  else if(cmd[0] === "show")
    {
    const stack = getCategory(cmd[1]);

    if(stack === null) return;
    
    if(cmd[2] === 'stack'){
        setData(stack);
    } 
    else if(stack.find((val) => val.category.toLowerCase() === cmd[2])){
            setData(searchCategory(stack, cmd[2]));
    }
  
    setTypeStack(cmd[1]);
    setShowStack(true);
  }

  else if(cmd[0] === "clear" || cmd[0] === "cls"){
    setData([]);
    setShowStack(false);
  }
  
  
  setCommand("");
}

function searchCategory(stack, name){
//  console.log(`stack: ${stack[0].category} \n Category: ${name}`)
  return stack.filter((obj) => obj.category.toLowerCase() == name);
}

function getCategory(category){
     switch(category){
      case "tech":
           return techStack;
      case "edu":
         return educationStack;
      default:
        return [];
     }
}
    return (
    <>
    <div className="window-header">
        <WindowControls target="terminal"/>
        <h2>Tech Stack</h2>
    </div>
    <div className='techstack'>
      <h3 className="text-gray-100 font-bold my-1">Last Login: {dayjs().format("ddd MMM D h:mm A")}</h3>
      <h3 className="text-gray-300 font-bold my-2">Welcome to zsh</h3>
        <div className="terminal-line">
            <span className='terminal-prompt'>
              {"anas@MacBook-Pro ~ % "}
            </span>
           <input 
           type="text" 
           name="terminal-input" 
           id="terminal-input" 
           className="terminal-input" 
           value={command}
           onChange={(e) => setCommand(e.target.value)}
           onKeyDown={handleCommand}
           autoFocus
           spellCheck={false}
           autoComplete="off"
           placeholder="--help"
           />
          
        </div>
        {/* <div className='label text-gray-800'>
            <p className='w-32'>Category</p>
            <p>Technologies</p>
        </div> */}

        <ul className='content'>
        {showStack && data.map(({category, items}) => (
          <li key={category} className={`flex gap-4 ${typeStack !== "tech" ? "flex-col items-start" : "items-center"} border-t-2 border-dashed`}>
            <h3>{"---"+category}</h3>
            <ul className={`${typeStack === "--help" ? "flex-col items-start" : "items-center"}`}>
               {items.map((item, i) => (
                <li key={i} className='text-gray-100'>
                    {item}{i < items.length -1 ? ",":""}
                </li>
               ))}
            </ul>
          </li>
        ))}
           

        </ul>

       {data.length > 0 &&  <div className='footnote'>
          <p>
            <Check size={20}/>
            {`${data.length} out of ${data.length} stacks loaded successfully`}
          </p>
          <p className='text-gray-400'>
            <Flag size={25} fill='blue'/>
            Render time: 6ms
          </p>
        </div>}
    </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal');
export default TerminalWindow;