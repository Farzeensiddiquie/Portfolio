"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 98,suffix: "%", label: "Client Retention Rate" },
];

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    // Animate the counters one by one with stagger
    gsap.fromTo(
      countersRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
      }
    );

    // Number animation
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        delay: index * 0.2, // matches the stagger
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <div
      id="counter"
      ref={counterRef}
      className="px-6 pb-15 flex justify-center sm:px-12 xl:mt-0 mt-32"
    >
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-8xl">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-gray/5 min-w-[18vw] backdrop-blur-lg border border-white/20 rounded-lg p-10 flex flex-col justify-center items-center text-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              0 {item.suffix}
            </div>
            <div className="text-white/70 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
