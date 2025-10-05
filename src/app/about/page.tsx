
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SkillMatrix from '@/components/quantum/SkillMatrix';

export default function AboutPage() {
  // Refs for scrolling
  const heroRef = React.useRef<HTMLDivElement>(null);
  const skillRef = React.useRef<HTMLDivElement>(null);
  const expRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => {
      skillRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 3000));
    timers.push(setTimeout(() => {
      expRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 8000));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center">
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
            FULL STACK ENGINEER
          </motion.h1>
          
          <motion.div
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>
              I&apos;m <span className="text-cyan-400 font-mono">Aswath</span>, a Full Stack Engineer
              specializing in full-stack development, AI/LLM integration, and scalable backend systems.
            </p>
            <p>
              With <span className="text-purple-400">1.5 years</span> of experience in modern web technologies,
              I focus on building robust, scalable, and intelligent web applications.
            </p>
            <p>
              My expertise spans across <span className="text-green-400">full-stack development</span>,
              <span className="text-cyan-400"> AI integration</span>, and
              <span className="text-purple-400"> scalable backend systems</span>.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-12 flex justify-center gap-8 text-sm font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* <div className="text-center">
              <div className="text-3xl text-cyan-400 font-bold">50+</div>
              <div className="text-gray-400">Projects</div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl text-purple-400 font-bold">1.5</div>
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
      <div ref={skillRef} className="relative flex flex-col items-center justify-center min-h-[80vh] py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 w-full flex justify-center"
        >
          <h2 className="text-4xl font-display text-center text-purple-400">
            TECHNICAL EXPERTISE
          </h2>
        </motion.div>
        <div className="w-full max-w-6xl">
          <SkillMatrix />
        </div>
      </div>
      
      {/* Experience Highlights Section */}
      <div ref={expRef} className="relative flex flex-col items-center justify-center min-h-[60vh] py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 w-full flex justify-center"
        >
          <motion.h2
            className="text-4xl font-display text-center text-cyan-400 mb-0"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            EXPERIENCE HIGHLIGHTS
          </motion.h2>
        </motion.div>
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md">
                <p className="text-gray-300 leading-relaxed">
                  Drove <span className="text-cyan-400 font-semibold">end-to-end product development</span>, taking applications from initial concept and design through final deployment and scaling.
                </p>
              </div>
              <div className="p-6 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md">
                <p className="text-gray-300 leading-relaxed">
                  Built and optimized <span className="text-purple-400 font-semibold">robust APIs and microservices</span> using <span className="text-green-400">Node.js/NestJS</span> and <span className="text-yellow-400">PHP/Laravel</span> to ensure high performance and data integrity.
                </p>
              </div>
              <div className="p-6 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md">
                <p className="text-gray-300 leading-relaxed">
                  Specialized in <span className="text-pink-400 font-semibold">AI-augmented systems</span>, integrating <span className="text-cyan-400">LLMs</span> with <span className="text-purple-400">Vector Databases</span> to implement features like <span className="text-green-400">RAG</span> for creating intelligent, automated product features.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md">
                <p className="text-gray-300 leading-relaxed">
                  Engineered dynamic, responsive user interfaces and managed application state using <span className="text-cyan-400">React</span> and <span className="text-purple-400">Angular</span>.
                </p>
              </div>
              <div className="p-6 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md">
                <p className="text-gray-300 leading-relaxed">
                  Managed database schemas and optimized queries for <span className="text-blue-400">MySQL</span> and <span className="text-green-400">PostgreSQL</span> in high-transaction environments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
