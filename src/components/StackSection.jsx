import React from 'react'

export const StackSection = ({children, index}) => {
  return (
     <>
      <section className=''>
        <div className=''>
          {children}
        </div>
      </section>
    </>
  )
}
