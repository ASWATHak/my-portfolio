'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectConstellationProps {
  projects: Project[];
}

export default function ProjectConstellation({ projects }: ProjectConstellationProps) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 70%)
            `
          }}
        />
      </div>

      {/* Project Grid */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Card */}
              <div className="relative p-6 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300">
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${project.featured ? '#39FF14' : '#00D4FF'}, transparent)`
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-mono text-white">{project.title}</h3>
                    {project.featured && (
                      <div className="px-2 py-1 bg-green-400/20 border border-green-400/50 rounded text-xs text-green-400">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 border border-gray-600/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-cyan-400/20 border border-cyan-400/50 rounded text-xs text-cyan-400 hover:bg-cyan-400/30 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded text-xs text-gray-300 hover:bg-gray-700/70 transition-colors"
                      >
                        <Github size={12} />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover particles effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 40%),
                      radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 40%)
                    `
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quantum particles overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
