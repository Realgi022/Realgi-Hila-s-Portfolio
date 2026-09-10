function About() {
  return (
    <section id="about" className="bg-zinc-900 py-28 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-500 font-medium mb-3">
          About me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Building, learning and improving.
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-12">

          <div className="text-zinc-400 text-lg leading-relaxed space-y-5">
            <p>
              I'm a Software Engineering student at Fontys University
              of Applied Sciences in Eindhoven.
            </p>

            <p>
              I enjoy building full-stack applications and turning ideas
              into working software. Throughout my studies, I've worked
              with technologies including C#, .NET, Java, Spring Boot,
              React and SQL.
            </p>

            <p>
              I'm especially interested in backend development, APIs,
              software architecture and creating applications that are
              structured, maintainable and easy to expand.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="border border-zinc-800 rounded-xl p-6">
              <p className="text-3xl font-bold">3+</p>
              <p className="text-zinc-500 mt-2">Major Projects</p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6">
              <p className="text-3xl font-bold">Full Stack</p>
              <p className="text-zinc-500 mt-2">Development</p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6">
              <p className="text-3xl font-bold">Fontys</p>
              <p className="text-zinc-500 mt-2">Software Engineering</p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6">
              <p className="text-3xl font-bold">Eindhoven</p>
              <p className="text-zinc-500 mt-2">Netherlands</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About