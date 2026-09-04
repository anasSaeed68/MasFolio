import React from 'react'
import {Check, Flag} from 'lucide-react'
import { WindowControls } from '../components';
import { techStack } from '../data/macIndex';
import WindowWrapper from '../hoc/WindowWrapper';

const Terminal = () => {
 
    return (
    <>
    <div id="window-header">
        <WindowControls target="terminal"/>
        <h2>Tech Stack</h2>
    </div>
    <div className='techstack'>
        <p className="text-gray-800">
            <span className='font-bold'>
              {"@anas % "}
            </span>
          show tech stack
        </p>
        <div className='label text-gray-800'>
            <p className='w-32'>Category</p>
            <p>Technologies</p>
        </div>

        <ul className='content'>
        {techStack.map(({category, items}) => (
          <li key={category} className="flex items-center">
            <Check className="check" size={20}/>
            <h3>{category}</h3>
            <ul>
               {items.map((item, i) => (
                <li key={i} className='text-gray-800'>
                    {item}{i < items.length -1 ? ",":""}
                </li>
               ))}
            </ul>
          </li>
        ))}
        </ul>

        <div className='footnote'>
          <p>
            <Check size={20}/>
            5 of 5 stacks loaded successfully
          </p>
          <p className='text-black'>
            <Flag size={25} fill='black'/>
            Render time: 6ms
          </p>
        </div>
    </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal');
export default TerminalWindow;