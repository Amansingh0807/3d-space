// components/sections/ProjectsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Course Generator',
    description:
      'Personalized course generation platform for college students with AI-powered recommendations and YouTube integration.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'TailwindCSS'],
    link: 'https://yourproject1.com',
  },
  {
    title: 'Caff Healthcare',
    description:
      'A healthcare platform to assist rural India with features like multilingual chatbot, medicine reminders, and telehealth.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    link: 'https://yourproject2.com',
  },
  {
    title: 'Sonic Chess Engine',
    description:
      'Built a chess engine in C++ capable of evaluating moves and game states efficiently, with a front-end UI.',
    tech: ['C++', 'React', 'HTML', 'CSS'],
    link: 'https://github.com/Amansingh0807/sonic',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.6,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-shadow"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600/20 border border-purple-500 text-purple-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-200 transition-colors"
              >
                Visit Project <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
