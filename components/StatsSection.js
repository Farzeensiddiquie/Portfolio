"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

function CountUpNumber({ to = 0, duration = 1600, suffix = "" }) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const frameRef = useRef(0);

  const start = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * to);
      setValue(current);
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
  };

  return (
    <motion.span
      onViewportEnter={start}
      viewport={{ once: true, amount: 0.8 }}
      className="tabular-nums"
    >
      {value}
      {suffix}
    </motion.span>
  );
}

function StatCard({ title, value, suffix, icon }) {
  return (
    <motion.div
      variants={item}
      className="relative rounded-2xl p-[2px] group w-full max-w-[320px]"
    >
      <div className="absolute inset-0 rounded-2xl border border-white/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </div>

      <div className="relative rounded-2xl  bg-gray-900/10 backdrop-blur-lg py-8 px-4 h-full flex flex-col justify-between">
        <div className="flex justify-center py-2 items-center gap-4">
          {icon}
          <p className="text-base  text-white/70">{title}</p>
        </div>
        <div className="mt-6 flex justify-center text-5xl  font-semibold tracking-tight text-white">
          <CountUpNumber to={value} suffix={suffix} />
        </div>
      </div>
    </motion.div>
  );
}

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function StatsSection() {
  const stats = [
    { title: "Total Clients", value: 48, suffix: "+", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white/80"><path d="M16 11C18.2091 11 20 9.20914 20 7C20 4.79086 18.2091 3 16 3C13.7909 3 12 4.79086 12 7C12 9.20914 13.7909 11 16 11Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 14C10.7614 14 13 11.7614 13 9C13 6.23858 10.7614 4 8 4C5.23858 4 3 6.23858 3 9C3 11.7614 5.23858 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/><path d="M21 21C21 17.6863 18.3137 15 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 21C11 16.5817 7.41828 13 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
    { title: "Happy Clients", value: 97, suffix: "%", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white/80"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M8 14c1.333 1.333 2.667 2 4 2s2.667-.667 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
    { title: "Completed Projects", value: 120, suffix: "+", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white/80"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
    { title: "Ongoing Projects", value: 6, suffix: "", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white/80"><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/></svg>) },
  ];

  return (
    <section id="stats" className="relative w-full flex justify-center pb-20 md:pb-25">
      <div className="absolute inset-0 -z-10 bg-gray-900/10 backdrop-blur-lg" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mx-auto max-w-6xl"
        >
          {stats.map((s) => (
            <StatCard key={s.title} title={s.title} value={s.value} suffix={s.suffix} icon={s.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
