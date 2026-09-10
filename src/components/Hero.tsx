function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-zinc-950 text-white">
      <div
        className="max-w-6xl mx-auto px-6 w-full
                   grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center
                   pt-28 pb-16 md:py-0"
      >
        {/* Left side */}
        <div>
          <p className="text-blue-500 font-medium mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight">
            Realgi Hila
          </h1>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold text-zinc-400">
            Software Engineering Student
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            I build full-stack applications using technologies such as
            Java, C#, React and SQL, with a focus on clean architecture
            and maintainable software.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            {/* Projects */}
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500
                         px-6 py-3 rounded-lg
                         font-medium transition"
            >
              View My Work
            </a>

            {/* CV */}
            <a
              href="/files/RealgiHila_CV.pdf"
              download="RealgiHila_CV.pdf"
              className="border border-zinc-700
                         hover:border-blue-500
                         hover:text-blue-400
                         px-6 py-3 rounded-lg
                         font-medium transition"
            >
              Download CV ↓
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Realgi022"
              target="_blank"
              rel="noreferrer"
              className="border border-zinc-700
                         hover:border-zinc-500
                         px-6 py-3 rounded-lg
                         font-medium transition"
            >
              GitHub
            </a>

          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center md:justify-end">
          <div
            className="w-64 h-80 lg:w-72 lg:h-96
                       rounded-2xl overflow-hidden
                       border border-zinc-800
                       shadow-2xl"
          >
            <img
              src="/images/RealgiHilaPicture.jpeg"
              alt="Realgi Hila"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero