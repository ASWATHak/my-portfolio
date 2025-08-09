import { motion } from '@/components/ui/FramerMotion';
import SkillsGrid from '@/components/sections/SkillsGrid';
import Timeline from '@/components/sections/Timeline';
import skillsData from '@/data/skills.json';
import experienceData from '@/data/experience.json';
import { Experience } from '@/types/index'; 

export default function AboutPage() {
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
            About Me
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm Aswath, a passionate full-stack developer with over 5 years of experience 
              crafting digital solutions that bridge the gap between innovative design and 
              robust functionality.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Specializing in modern web technologies, I build scalable applications with 
              a focus on user experience, performance, and maintainable code. Currently 
              exploring AI integration to create more intelligent and interactive web experiences.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills & Technologies
          </h2>
          <SkillsGrid skills={skillsData} />
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience & Education
          </h2>
          <Timeline experiences={experienceData as Experience[]} />
        </motion.section>
      </div>
    </div>
  );
}
