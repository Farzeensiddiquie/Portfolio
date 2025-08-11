import React from 'react'
import AboutModel from './AboutModel'
import AboutForeground from './AboutForeground'


export default function About() {
  return (
     <section
      
      className="relative w-full h-screen  text-white overflow-hidden"
    >
        
        <AboutModel />
        <AboutForeground />
    </section>
  )
}
