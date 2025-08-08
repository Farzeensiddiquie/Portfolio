'use client';
import { motion } from 'framer-motion';

export default function DownArrow({ step }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: step === 2 ? 1 : 0 }}
      transition={{ delay: 6, duration: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-white text-3xl">↓</span>
      </motion.div>
    </motion.div>
  );
}
