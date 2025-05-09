// components/sections/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">Get in Touch</h2>
        <p className="text-gray-300 mb-6">
          I’m currently open to opportunities — freelance, internship, or full-time. Whether you have a question, idea, or just want to say hi, feel free to drop a message!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="text-purple-400 hover:text-purple-200 font-semibold text-lg underline underline-offset-4"
        >
          your.email@example.com
        </a>

        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/Amansingh0807" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
            <FaGithub size={28} className="text-white hover:text-purple-400 transition" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
            <FaLinkedin size={28} className="text-white hover:text-purple-400 transition" />
          </a>
          <a href="mailto:your.email@example.com" title="Send an email">
            <FaEnvelope size={28} className="text-white hover:text-purple-400 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
