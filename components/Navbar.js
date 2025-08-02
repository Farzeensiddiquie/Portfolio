import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex mt-5 md:top-5 justify-center gap-10 md:gap-25 items-center w-full md:w-[45vw] md:rounded-xl  md:relative md:left-[27%] h-[7vh] md:backdrop-blur-3xl  md:border-b md:border-l md:border-white/10'>
      <div className='logo flex items-center'>
        <img className='w-[50px] h-[50px]' src="/Logo.png" alt="logo" />
        
      </div>
   <nav className='flex justify-center  items-center h-[40px] gap-[5vw]'>
     <Link className='transform transition duration-300 hover:scale-130' href="/">Home</Link>
     <Link className='transform transition duration-300 hover:scale-130' href="/About">About</Link>
     <Link className='transform transition duration-300 hover:scale-130' href="/project">Projects</Link>
     <Link className='transform transition duration-300 hover:scale-130'  href="/contact">Contact</Link>
   </nav>
   
   </div>
  )
}
