function Contact() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-zinc-950 py-28 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-500 font-medium mb-3">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Let's get in touch.
        </h2>

        <p className="mt-5 text-zinc-400 text-lg max-w-2xl leading-relaxed">
          I'm always interested in new opportunities, collaborations
          and software development projects. Feel free to reach out.
        </p>

        {/* Contact Links */}
        <div className="mt-10 flex flex-wrap gap-4">

          {/* Email */}
          <a
            href="mailto:hrealgi@gmail.com"
            className="flex items-center gap-3 border border-zinc-800
                       bg-zinc-900 hover:border-zinc-600
                       px-5 py-3 rounded-lg transition"
          >
            <img
              src={`${baseUrl}images/Gmail.png`}
              alt="Email"
              className="w-6 h-6 object-contain"
            />

            <span className="font-medium">
              Email
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/realgi-hila-7a9a53326/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border border-zinc-800
                       bg-zinc-900 hover:border-zinc-600
                       px-5 py-3 rounded-lg transition"
          >
            <img
              src={`${baseUrl}images/LinkedIn.png`}
              alt="LinkedIn"
              className="w-6 h-6 object-contain"
            />

            <span className="font-medium">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Realgi022"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border border-zinc-800
                       bg-zinc-900 hover:border-zinc-600
                       px-5 py-3 rounded-lg transition"
          >
            <img
              src={`${baseUrl}images/GitHub.png`}
              alt="GitHub"
              className="w-6 h-6 object-contain"
            />

            <span className="font-medium">
              GitHub
            </span>
          </a>

        </div>

        {/* Footer */}
        <div
          className="mt-24 pt-8 border-t border-zinc-800
                     flex flex-col md:flex-row gap-3
                     md:items-center md:justify-between"
        >
          <p className="text-zinc-500 text-sm">
            © 2026 Realgi Hila
          </p>

          <p className="text-zinc-600 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact