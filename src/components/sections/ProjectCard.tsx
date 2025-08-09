'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="warning" className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </Badge>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="primary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex gap-3">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}