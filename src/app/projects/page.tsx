import { motion } from 'framer-motion';
import ProjectCard from '@/components/sections/ProjectCard';
import projectsData from '@/data/projects.json';
import { Project } from '@/types';

export default function ProjectsPage() {
  const projects: Project[] = projectsData;
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            from AI-powered applications to scalable web platforms.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Other Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
