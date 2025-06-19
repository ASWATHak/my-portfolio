export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Aswath 👋</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A Frontend Developer building stylish, responsive web experiences.
        </p>
        <div className="mt-6">
          <a href="/projects" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
