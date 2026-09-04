import React from 'react'

export const SvgLoader = () => {
  return (
    <svg
    width="60"
    height="40"
    viewBox='0 0 60 30'
    xmlns='http://www.w3.org/2000/svg'
    
    >
        

        {/* Dot 2 */}
        <circle cx="10" cy="10" r="3" fill='red'>
           <animate 
           attributeName='cx'
           values='10;20;40'
           dur="1.2s"
           repeatCount="indefinite"
           />
        </circle>

        {/* Dot3 */}
         <circle cx="20" cy="10" r="3" fill='cyan'>
           <animate 
           attributeName='cx'
           values='20;40;50'
           dur="1.4s"
           repeatCount="indefinite"
           />
        </circle>
        {/* Dot 1 */}
        <circle 
        r={3}
        cx={20}
        cy={10}
        fill='yellow'
        >
            <animateMotion 
            dur='1.4s'
            repeatCount='indefinite'
            path='M30 0 L20 -15 L0 0'

            />
        </circle>

    </svg>
  )
}
