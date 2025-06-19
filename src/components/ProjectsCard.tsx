export default function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition bg-white dark:bg-gray-800"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  );
}
