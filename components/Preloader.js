"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fake loading progress (you can replace with real asset loader)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // delay before fade out
          return 100;
        }
        return old + 2;
      });
    }, 50);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-xl font-bold"
            >
              Farzeen's <span className="text-[#14827ec1]">Portfolio</span>
            </motion.div>

            {/* Percentage */}
            <motion.div
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl"
            >
              {progress}%
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-700 mt-4 rounded">
              <motion.div
                className="h-1 bg-white rounded"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show content after loader */}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity"}>
        {children}
      </div>
    </>
  );
}
