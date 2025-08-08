'use client';

import Navbar from '@/components/navbar/Navbar';
import { Link } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';

function Contact() {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center text-white min-h-screen bg-gradient-to-r from-[#08101F] to-[#093341]'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Contact Page</h1>
          <p className='text-lg'>You are currently on: {pathname}</p>
          <p className='text-lg mt-2'>Feel free to reach out!</p>
        </div>
        <div className='mt-8'>
          <a href="mailto:farzeenwasif39@gmail.com" className='text-lg text-blue-400 hover:underline'>
  Email: farzeenwasif39@gmail.com
</a>

        </div>
      </div>
    </>
  );
}

export default Contact;
