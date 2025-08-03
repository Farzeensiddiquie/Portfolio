// app/page.jsx (or .tsx)
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';

// ⏳ Simulate server-side delay
async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
 await wait(2000)

  return (
    <>
    < div className='bg-img'>
      <Hero />
    </div>
<div class="md:px-[4rem] sm:px-[2rem] px:px-[1rem] bg-gradient-to-r from-[#08101F] to-[#093341]  ">
  <div class="h-[2px] w-full bg-gradient-to-r from-[#1875A3] via-[#325565] to-[#049191] rounded-full shadow-[0_0_12px_#8f5cf7]/50"></div>
</div>
      <About/>
      </>
  );
}
