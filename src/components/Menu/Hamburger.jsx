import React from 'react'

const Hamburger = ({handleClick}) => {
  return (
    <div onClick={handleClick} className='hamMenu'>

      <div className='hamElement'></div>
      <div className='hamElement'></div>
      <div className='hamElement'></div>
   
    </div>
  )
}

export default Hamburger