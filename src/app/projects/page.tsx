'use client';
import ProjectConstellation from '@/components/quantum/ProjectConstellation';
import projectsData from '@/data/projects.json';
import { Project } from '@/types';

export default function ProjectsPage() {
  const projects: Project[] = projectsData;

  return (
    <ProjectConstellation projects={projects} />
  );
}
