'use client';
import { motion } from 'framer-motion';
import SkillMatrix from '@/components/quantum/SkillMatrix';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-4xl mx-auto px-6"
        >
          <motion.h1
            className="text-6xl font-display text-cyan-400 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            NEURAL ARCHITECT
          </motion.h1>
          
          <motion.div
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>
              I&apos;m <span className="text-cyan-400 font-mono">Aswath</span>, a quantum developer
              architecting digital realities through neural networks and quantum algorithms.
            </p>
            <p>
              With over <span className="text-purple-400">5 years</span> of experience in the digital matrix,
              I specialize in creating immersive web experiences that push the boundaries of what&apos;s possible.
            </p>
            <p>
              My expertise spans across <span className="text-green-400">full-stack development</span>,
              <span className="text-cyan-400"> AI integration</span>, and
              <span className="text-purple-400"> quantum computing principles</span>.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-12 flex justify-center gap-8 text-sm font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl text-cyan-400 font-bold">50+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-purple-400 font-bold">5+</div>
              <div className="text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-green-400 font-bold">∞</div>
              <div className="text-gray-400">Possibilities</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none quantum-grid" />
      </div>
      
      {/* Skills Matrix Section */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <h2 className="text-4xl font-display text-center text-purple-400">
            TECHNICAL EXPERTISE
          </h2>
        </motion.div>
        
        <SkillMatrix />
      </div>
    </div>
  );
}
