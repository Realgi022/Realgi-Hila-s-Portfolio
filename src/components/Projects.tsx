import { useState } from 'react'

function Projects() {
  const footballScreenshots = [
    {
      src: '/images/FrontPageFootballBettingWebApp.png',
      title: 'Home Page',
    },
    {
      src: '/images/AdminSide.png',
      title: 'Admin Dashboard',
    },
    {
      src: '/images/AdminSideCreateMatch.png',
      title: 'Admin — Create Match',
    },
    {
      src: '/images/UserSidePlaceBet.png',
      title: 'User Betting Page',
    },
    {
      src: '/images/UserSidePlaceBetPage.png',
      title: 'Place Bet',
    },
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0
        ? footballScreenshots.length - 1
        : current - 1
    )
  }

  const nextImage = () => {
    setCurrentImage((current) =>
      current === footballScreenshots.length - 1
        ? 0
        : current + 1
    )
  }

  const projects = [
    {
      title: 'Mini Canvas',
      semester: 'Semester 3',
      description:
        'A learning management system with REST APIs for courses, assignments, submissions and grades, built using SOLID principles and a structured three-layer architecture.',
      technologies: [
        'Java',
        'Spring Boot',
        'React',
        'SQL',
        'REST APIs',
        'SOLID',
      ],
      github: 'https://github.com/Realgi022/MiniCanvasProject',
    },
    {
      title: 'Secure Access',
      semester: 'Semester 2',
      description:
        'A QR-based authentication and access system with real-time notifications and database persistence for access and session management.',
      technologies: [
        'C#',
        'ASP.NET Core',
        'SignalR',
        'EF Core',
        'SQL',
      ],
      github:
        'https://github.com/Realgi022/Secure-Access-group-project',
    },
    {
      title: 'Financial Management App',
      semester: 'Semester 3 · Erasmus Finland',
      description:
        'A financial management application developed in an international Agile team, featuring AI-assisted receipt scanning and automatic receipt data entry.',
      technologies: [
        'C#',
        'ASP.NET Core',
        'REST APIs',
        'AI',
        'Jira',
        'Agile / Scrum',
      ],
      github: 'https://github.com/Realgi022/fm-backend',
    },
    {
      title: 'Sports Community',
      semester: 'Semester 1',
      description:
        'A sports community web application where users can log in and access community features including chat, forums and event organization.',
      technologies: [
        'Python',
        'Flask',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      github: 'https://github.com/Realgi022/Sports-community',
    },
    {
      title: 'Youth Fit',
      semester: 'Semester 1',
      description:
        'My first semester web application, created while learning the fundamentals of software development using ASP.NET Core Razor Pages.',
      technologies: [
        'C#',
        'ASP.NET Core',
        'Razor Pages',
      ],
      github: 'https://github.com/Realgi022/YouthFit',
    },
  ]

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-zinc-900 py-28 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <p className="text-blue-500 font-medium mb-3">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Things I've built.
        </h2>

        <p className="mt-5 text-zinc-400 text-lg max-w-2xl">
          A selection of individual and team projects I've worked on
          throughout my Software Engineering studies.
        </p>

        {/* Featured Football Betting Project */}
        <div
          className="mt-12 border border-zinc-800
                     bg-zinc-950/50 rounded-2xl overflow-hidden"
        >

          {/* Screenshot Carousel */}
          <div className="p-4 md:p-6 border-b border-zinc-800">

            {/* Screenshot title */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-zinc-300 font-medium">
                {footballScreenshots[currentImage].title}
              </p>

              <p className="text-sm text-zinc-500">
                {currentImage + 1} / {footballScreenshots.length}
              </p>
            </div>

            {/* Image */}
            <div
              className="relative overflow-hidden rounded-xl
                         border border-zinc-800 bg-zinc-950"
            >
              <img
                src={footballScreenshots[currentImage].src}
                alt={footballScreenshots[currentImage].title}
                className="w-full h-auto"
              />

              {/* Left Arrow */}
              <button
                onClick={previousImage}
                aria-label="Previous screenshot"
                className="absolute left-4 top-1/2 -translate-y-1/2
                           w-12 h-12 rounded-full
                           bg-black/70 hover:bg-black
                           backdrop-blur
                           border border-white/20
                           flex items-center justify-center
                           text-white text-2xl
                           cursor-pointer
                           transition"
              >
                ←
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 -translate-y-1/2
                           w-12 h-12 rounded-full
                           bg-black/70 hover:bg-black
                           backdrop-blur
                           border border-white/20
                           flex items-center justify-center
                           text-white text-2xl
                           cursor-pointer
                           transition"
              >
                →
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="mt-5 flex justify-center gap-2">
              {footballScreenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`View ${screenshot.title}`}
                  className={`h-2.5 rounded-full cursor-pointer transition-all ${
                    currentImage === index
                      ? 'bg-blue-500 w-7'
                      : 'bg-zinc-700 hover:bg-zinc-500 w-2.5'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Football Betting Information */}
          <div className="p-8 md:p-10">

            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-400 text-sm font-medium">
                Featured Project
              </span>

              <span className="text-zinc-600">
                •
              </span>

              <span className="text-zinc-500 text-sm">
                Semester 2
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold">
              Football Betting System
            </h3>

            <p
              className="mt-5 text-zinc-400
                         leading-relaxed max-w-3xl"
            >
              A full-stack football betting simulation featuring user
              authentication, wallet management, betting functionality,
              match management and administrator features. The application
              follows a three-layer architecture and includes DTOs,
              dependency injection, unit testing and integration testing.
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'C#',
                'ASP.NET Core',
                'SQL Server',
                'ADO.NET',
                'Three-Layer Architecture',
                'DTOs',
                'Dependency Injection',
                'Unit Testing',
                'Integration Testing',
              ].map((technology) => (
                <span
                  key={technology}
                  className="text-sm text-blue-400
                             bg-blue-500/10
                             border border-blue-500/10
                             px-3 py-1 rounded-md"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-6">

              <a
                href="https://github.com/Realgi022/FootballBettingWebApp"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-zinc-200
                           hover:text-blue-400 transition"
              >
                GitHub →
              </a>

              <a
                href="https://i555208.luna.fhict.nl/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-zinc-200
                           hover:text-blue-400 transition"
              >
                Live Demo →
              </a>

            </div>
          </div>
        </div>

        {/* Other Projects */}
        <h3 className="mt-20 text-2xl font-semibold">
          Other Projects
        </h3>

        <div className="mt-8 grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-zinc-800
                         bg-zinc-950/50 rounded-xl
                         p-7 flex flex-col
                         hover:border-zinc-600
                         hover:-translate-y-1
                         transition duration-300"
            >

              <p className="text-sm text-blue-400">
                {project.semester}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm text-blue-400
                               bg-blue-500/10
                               border border-blue-500/10
                               px-3 py-1 rounded-md"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-200
                             hover:text-blue-400 transition"
                >
                  GitHub →
                </a>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects