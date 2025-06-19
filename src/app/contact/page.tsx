export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="space-y-6"
      >
        <input type="text" name="name" required placeholder="Name" className="w-full p-3 rounded border" />
        <input type="email" name="email" required placeholder="Email" className="w-full p-3 rounded border" />
        <textarea name="message" rows={5} required placeholder="Message" className="w-full p-3 rounded border" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
