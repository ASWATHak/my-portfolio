import ProjectCard from "@/components/ProjectsCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: 'My Portfolio Website',
      description: 'A personal portfolio built with Next.js and Tailwind CSS.',
      link: 'https://your-portfolio-link.com',
    },
    {
      title: 'Todo App',
      description: 'A simple todo app with local storage and animations.',
      link: 'https://todo-app-link.com',
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
