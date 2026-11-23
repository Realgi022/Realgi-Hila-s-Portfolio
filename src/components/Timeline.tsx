function Timeline() {
  const experiences = [
    {
      date: 'February 2027',
      title: 'Software Engineering Internship',
      organization: 'Upcoming Opportunity',
      type: 'Career',
      description:
        'Seeking a hands-on software engineering internship focused on backend development, full-stack applications and solving real-world technical challenges.',
      skills: [
        'Backend Development',
        'Full-Stack Development',
        'Software Engineering',
      ],
    },
    {
      date: 'September 2026 – Present',
      title: 'Smart Mobile Development',
      organization: 'Fontys · Semester 4',
      type: 'Education',
      description:
        'Developing mobile applications using Flutter and Dart, with a focus on sensor integration, user-centered design and interactive mobile experiences.',
      skills: [
        'Flutter',
        'Dart',
        'Mobile Development',
        'Sensor Integration',
        'UI/UX',
      ],
    },
    {
      date: '2026',
      title: 'International Software Development',
      organization: 'OAMK · Oulu, Finland',
      type: 'Erasmus',
      description:
        'Collaborated with Finnish students on an international financial management application. My contributions included AI-assisted receipt scanning, backend Continuous Integration, API testing and international team collaboration.',
      skills: [
        'C#',
        'ASP.NET Core',
        'AI Integration',
        'Continuous Integration',
        'Agile / Scrum',
      ],
    },
    {
      date: 'October 2025 – Present',
      title: 'Kitchen Crew Member',
      organization: 'Mojo · Eindhoven, Netherlands',
      type: 'Work Experience',
      description:
        'Working in a fast-paced professional kitchen environment, developing strong communication, teamwork, adaptability and time management skills while balancing employment with my studies.',
      skills: [
        'Teamwork',
        'Communication',
        'Time Management',
        'Adaptability',
        'Working Under Pressure',
      ],
    },
    {
      date: '2024 – Present',
      title: "Bachelor's Degree — ICT",
      organization: 'Fontys University of Applied Sciences',
      type: 'Education',
      description:
        'Studying ICT with a focus on Software Engineering in Eindhoven, Netherlands. Throughout my studies, I have developed individual and team projects covering backend development, frontend development, relational databases, software architecture, automated testing and CI/CD.',
      skills: [
        'Java',
        'C#',
        'React',
        'SQL',
        'Software Architecture',
        'CI/CD',
      ],
    },
  ]

  return (
    <section
      id="timeline"
      className="scroll-mt-20 bg-zinc-900 py-28 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <p className="text-blue-500 font-medium mb-3">
          My Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Education & Experience.
        </h2>

        <p className="mt-5 text-zinc-400 text-lg max-w-3xl leading-relaxed">
          My academic journey, professional experience and
          continuous development as a software engineer.
        </p>

        {/* Timeline */}
        <div className="relative mt-14">

          {/* Vertical Timeline Line */}
          <div
            className="absolute left-[11px] md:left-[15px]
                       top-3 bottom-3 w-px bg-zinc-700"
          />

          <div className="space-y-8">

            {experiences.map((experience) => (
              <div
                key={experience.title}
                className="relative pl-10 md:pl-16"
              >

                {/* Timeline Dot */}
                <div
                  className="absolute left-0 top-7
                             w-6 h-6 md:w-8 md:h-8
                             rounded-full bg-zinc-900
                             border-2 border-blue-500
                             flex items-center justify-center"
                >
                  <div
                    className="w-2 h-2 md:w-3 md:h-3
                               bg-blue-500 rounded-full"
                  />
                </div>

                {/* Experience Card */}
                <article
                  className="border border-zinc-800
                             bg-zinc-950/50 rounded-2xl
                             p-6 md:p-8
                             hover:border-blue-500/30
                             transition duration-300"
                >

                  {/* Date and Type */}
                  <div
                    className="flex flex-wrap items-center
                               justify-between gap-3 mb-4"
                  >
                    <p className="text-blue-400 text-sm font-medium">
                      {experience.date}
                    </p>

                    <span
                      className="text-xs text-blue-400
                                 bg-blue-500/10
                                 border border-blue-500/20
                                 px-3 py-1 rounded-full"
                    >
                      {experience.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {experience.title}
                  </h3>

                  {/* Organization */}
                  <p className="mt-2 text-zinc-400 font-medium">
                    {experience.organization}
                  </p>

                  {/* Description */}
                  <p className="mt-5 text-zinc-400 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-blue-400
                                   bg-blue-500/10
                                   border border-blue-500/10
                                   px-3 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </article>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Timeline