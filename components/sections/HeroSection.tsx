// components/sections/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Left Vertical Nav */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-sm text-gray-400">
        <p className="rotate-[-90deg]">Project 12</p>
        <p className="rotate-[-90deg]">Overview</p>
        <p className="rotate-[-90deg]">Econs</p>
      </div>

      {/* Central glowing orb background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-purple-700 to-indigo-800 blur-3xl opacity-60"
        />
      </div>

      {/* Main Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-7xl font-bold tracking-wider"
        >
          PROJECT
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-6xl sm:text-7xl font-bold tracking-wider"
        >
          TWELVE
        </motion.h1>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-center gap-2 border px-4 py-2 rounded-md cursor-pointer hover:bg-white hover:text-black transition"
        >
          <span className="text-sm tracking-wide">LEARN MORE</span>
          <span>→</span>
        </motion.div>
      </div>
    </section>
  );
}
