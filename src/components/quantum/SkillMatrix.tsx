'use client';

import React from 'react';
import { motion } from 'framer-motion';
import skills from '@/data/skills.json';

export default function SkillMatrix() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'languages': return '#00D4FF';
      case 'frontend_frameworks': return '#4ADE80';
      case 'backend_frameworks': return '#8A2BE2';
      case 'databases': return '#FF6B35';
      case 'devops_tools': return '#F59E0B';
      case 'ai_technologies': return '#EC4899';
      default: return '#6B7280';
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden py-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, rgba(255, 107, 53, 0.2) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Skills Matrix */}
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skill Matrix
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive skill set across modern web technologies and AI integration
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([categoryName, skillList], categoryIndex) => (
              <motion.div
                key={categoryName}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                {/* Category Card */}
                <div className="relative p-6 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md hover:border-gray-400/50 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: getCategoryColor(categoryName) }}
                    />
                    <h3 className="text-xl font-mono text-white capitalize">
                      {categoryName}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {skillList.map((skill: { name: string; level: number }, skillIndex: number) => (
                      <motion.div
                        key={skill.name}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      >
                        {/* Skill Name */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 font-mono text-sm">
                            {skill.name}
                          </span>
                          <span className="px-2 py-1 bg-gray-800/50 border border-gray-600/50 rounded text-xs text-gray-300">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Skill Level Bar */}
                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{ 
                              background: `linear-gradient(90deg, ${getCategoryColor(categoryName)}, ${getCategoryColor(categoryName)}80)`
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut"
                            }}
                          />
                        </div>

                        {/* Highlight particles for high-level skills */}
                        {skill.level >= 80 && (
                          <div className="absolute -top-1 -right-1">
                            <motion.div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: getCategoryColor(categoryName) }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: skillIndex * 0.2
                              }}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}