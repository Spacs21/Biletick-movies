import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <div className='flex justify-center w-screen h-screen items-center bg-black fixed z-10'>
        <span class="loader"></span>
    </div>
  )
}

export default Loader