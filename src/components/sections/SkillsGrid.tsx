'use client';

import { motion } from 'framer-motion';
import { SkillCategory } from '@/types';

interface SkillsGridProps {
  skills: SkillCategory;
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const categories = [
    { title: 'Frontend', skills: skills.frontend, color: 'blue' },
    { title: 'Backend', skills: skills.backend, color: 'purple' },
    { title: 'Tools & Others', skills: skills.tools, color: 'green' },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            {category.title}
          </h3>
          
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses]}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}