'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-start"
          >
            {/* Timeline Dot */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full shadow-lg">
              {experience.type === 'work' ? (
                <Briefcase className="w-6 h-6 text-blue-500" />
              ) : (
                <GraduationCap className="w-6 h-6 text-purple-500" />
              )}
            </div>
            
            {/* Content */}
            <div className="ml-6 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {experience.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {experience.company}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {experience.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}