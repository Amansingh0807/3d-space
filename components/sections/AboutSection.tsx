// components/sections/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="min-h-screen w-full bg-[#0e0e0e] text-white py-20 px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Aman Singh</span> — a Frontend Developer with a passion for
          creating immersive user experiences. I enjoy turning complex problems into elegant and interactive interfaces.
        </p>
        <p className="text-gray-400 mt-4">
          Currently exploring the MERN stack, animation libraries like Framer Motion, and contributing to open source. Let’s build
          something cool together!
        </p>
      </motion.div>
    </section>
  );
}
