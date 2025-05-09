// components/sections/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiJavascript, SiMongodb, SiNodedotjs } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <SiReact className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: 'spring',
    },
  }),
};

export default function SkillsSection() {
  return (
    <section className="min-h-screen w-full bg-[#0d0d0d] text-white py-20 px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              className="bg-[#1a1a1a] p-6 rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
