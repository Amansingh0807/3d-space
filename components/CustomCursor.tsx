'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="cursor-outer"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="cursor-inner"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
    </>
  );
}
