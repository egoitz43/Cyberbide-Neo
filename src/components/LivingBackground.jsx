import React from 'react';
import { motion } from 'framer-motion';

const ORBS = [
  {
    className: 'left-[-12%] top-[-12%] h-[52vw] w-[52vw] max-h-[520px] max-w-[520px] bg-cyan-500/25',
    duration: 26,
    x: [0, 60, -30, 0],
    y: [0, 40, 90, 0],
    scale: [1, 1.15, 0.95, 1],
  },
  {
    className: 'right-[-14%] top-[16%] h-[46vw] w-[46vw] max-h-[460px] max-w-[460px] bg-fuchsia-500/20',
    duration: 34,
    x: [0, -70, 30, 0],
    y: [0, 70, -40, 0],
    scale: [1, 0.9, 1.2, 1],
  },
  {
    className: 'bottom-[-18%] left-[22%] h-[54vw] w-[54vw] max-h-[540px] max-w-[540px] bg-violet-600/25',
    duration: 42,
    x: [0, 50, -50, 0],
    y: [0, -50, -10, 0],
    scale: [1, 1.1, 1.3, 1],
  },
];

const PARTICLE_COLORS = ['#67e8f9', '#f0abfc', '#c4b5fd', '#fcd34d'];

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 6.3 + 4) % 96}%`,
  delay: (i % 8) * 1.7,
  duration: 16 + ((i * 3) % 12),
  size: i % 3 === 0 ? 3 : 2,
  color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
}));

export default function LivingBackground() {
  return (
    <div className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#070716]">
      {ORBS.map((orb, index) => (
        <motion.span
          key={index}
          aria-hidden
          className={`absolute rounded-full blur-[110px] ${orb.className}`}
          animate={{ x: orb.x, y: orb.y, scale: orb.scale, opacity: [0.5, 0.85, 0.55, 0.5] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="stars-layer absolute inset-0 opacity-70" />
      <div className="stars-layer-slow absolute inset-0 opacity-50" />

      {PARTICLES.map((p, index) => (
        <span
          key={index}
          aria-hidden
          className="absolute bottom-[-10%] animate-drift-up rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-[38vh] [mask-image:linear-gradient(to_top,black,transparent)]">
        <div className="grid-horizon absolute inset-0 opacity-40" />
      </div>

      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(70%_100%_at_50%_0%,rgba(56,231,224,0.16),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,rgba(168,85,247,0.18),transparent_65%)]" />
    </div>
  );
}