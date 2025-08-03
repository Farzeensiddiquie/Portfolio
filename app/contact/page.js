'use client'
import Navbar from '@/components/Navbar'
import { usePathname } from 'next/navigation';
import React from 'react'

function Contact() {
  const pathname = usePathname();
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Contact
