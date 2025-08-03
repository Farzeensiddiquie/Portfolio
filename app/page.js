// app/page.jsx (or .tsx)
import React from 'react';
import Hero from '@/components/Hero';

// ⏳ Simulate server-side delay
async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
 await wait(2000)

  return (
    < div className='bg-img'>
      <Hero />
    </div>
  );
}
