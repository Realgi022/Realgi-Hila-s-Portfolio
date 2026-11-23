import { useState } from 'react'

type ProjectSection = {
  title: string
  text?: string
  items?: string[]
  steps?: string[]
}

type Project = {
  title: string
  semester: string
  description: string
  technologies: string[]
  github: string
  demo?: string
  sections: ProjectSection[]
}

const footballProject: Project = {
  title: 'Football Betting System',
  semester: 'Semester 2 · Individual Project',
  description:
    'A full-stack football betting simulation featuring user authentication, virtual wallet management, betting functionality, match management and administrator features.',

  technologies: [
    'C#',
    'ASP.NET Core MVC',
    'SQL Server',
    'ADO.NET',
    'SOLID',
    'OOP',
    'Three-Layer Architecture',
    'DTOs',
    'Dependency Injection',
    'Unit Testing',
    'Integration Testing',
  ],

  github:
    'https://github.com/Realgi022/FootballBettingWebApp',

  demo: 'https://i555208.luna.fhict.nl/',

  sections: [
    {
      title: 'Project Overview',
      text:
        'The Football Betting System is an individual full-stack web application developed during Semester 2. It simulates a football betting platform where users can register, log in, browse football matches, place bets using virtual credits and view match results. Administrators can manage teams, matches, odds and results.',
    },
    {
      title: 'Key Features',
      items: [
        'User registration and authentication',
        'Virtual wallet and credit management',
        'Football match browsing',
        'Bet placement using virtual credits',
        'Match results and bet settlement',
        'Administrator dashboard',
        'Team, match and odds management',
      ],
    },
    {
      title: 'Software Architecture',
      text:
        'The application follows a three-layer architecture, separating presentation, business logic and database operations. This separation improves maintainability, readability and testability.',
      steps: [
        'Presentation — ASP.NET Core MVC',
        'Business Logic — C# Services',
        'Data Access — ADO.NET',
        'Database — SQL Server',
      ],
    },
    {
      title: 'Analysis & Design',
      items: [
        'Created a User Requirements Specification (URS).',
        'Defined project scope, deliverables, constraints and risks.',
        'Designed low-fidelity wireframes using Figma.',
        'Created conceptual, UML class and database diagrams.',
        'Developed an acceptance test plan.',
        'Refined documentation based on teacher feedback.',
      ],
    },
    {
      title: 'Technical Implementation',
      text:
        'I implemented the application using object-oriented programming, SOLID principles, DTOs and dependency injection. The match feature was developed with maintainability in mind, followed by the remaining user and administrator functionality.',
    },
    {
      title: 'Development Process',
      items: [
        'Iteration 1 — Requirements, planning, wireframes and diagrams.',
        'Iteration 2 — Layered architecture, match functionality and user-side development.',
        'Iteration 3 — Core functionality, UML improvements and automated testing.',
        'Iteration 4 — Exception handling, final refinements and deployment.',
      ],
    },
    {
      title: 'Testing & Software Quality',
      items: [
        'Unit testing of betting functionality.',
        'Integration testing of database operations.',
        'Acceptance test planning.',
        'Exception handling.',
        'Iterative improvements based on feedback.',
      ],
    },
    {
      title: 'Deployment',
      text:
        'The completed application was deployed to the Fontys Luna hosting environment, providing an accessible live demonstration of the project.',
    },
    {
      title: 'Lessons Learned',
      text:
        'This project strengthened my understanding of full-stack development, object-oriented programming, relational databases, maintainable architecture and automated testing. It also taught me the importance of planning, documentation and iterative development.',
    },
  ],
}

const projects: Project[] = [
  {
    title: 'Mini Canvas',
    semester: 'Semester 3',
    description:
      'A full-stack learning management system featuring REST APIs, role-based authentication, layered architecture, automated testing and CI/CD deployment.',

    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'Vite',
      'SQL Server',
      'H2',
      'REST APIs',
      'JWT',
      'Spring Security',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Nginx',
      'Linux',
      'Gradle',
      'Playwright',
      'SOLID',
    ],

    github:
      'https://github.com/Realgi022/MiniCanvasProject',

    sections: [
      {
        title: 'Project Overview',
        text:
          'Mini Canvas is a learning management system designed to support educational workflows between students, teachers and administrators. The application provides functionality for managing courses, assignments, submissions, announcements and grades.',
      },
      {
        title: 'Key Features',
        items: [
          'Role-based authentication for administrators, teachers and students.',
          'Course and assignment management.',
          'Assignment submissions and file uploads.',
          'Announcements and grades.',
          'REST API communication between frontend and backend.',
          'Automated build and deployment workflows.',
        ],
      },
      {
        title: 'Software Architecture',
        text:
          'The backend follows a layered architecture using controllers, services and repositories. DTOs separate API data from internal application models, while dependency injection supports maintainability and testing.',
        steps: [
          'Frontend — React & Vite',
          'REST API — Spring Boot',
          'Business Logic — Services & DTOs',
          'Data Access — Repositories',
          'Database — SQL',
        ],
      },
      {
        title: 'Security',
        text:
          'The application uses JWT authentication together with Spring Security to provide stateless authentication and role-based authorization for ADMIN, TEACHER and STUDENT users.',
      },
      {
        title: 'Technology Decisions',
        items: [
          'Java for strong typing and object-oriented development.',
          'Spring Boot for REST APIs and dependency injection.',
          'React and Vite for modular frontend development.',
          'H2 for lightweight integration testing.',
          'Docker for isolated deployment environments.',
          'Playwright for end-to-end testing.',
        ],
      },
      {
        title: 'CI/CD & DevOps — My Implementation',
        text:
          'I configured separate CI/CD pipelines for the frontend and backend using GitHub Actions. The workflows automate builds and deployment to an Ubuntu virtual machine, reducing manual work and improving deployment consistency.',
        items: [
          'Configured backend build automation using Gradle.',
          'Configured frontend build automation using npm.',
          'Created automated frontend and backend deployment scripts.',
          'Configured SSH authentication using GitHub Secrets.',
          'Deployed SQL Server inside a Docker container.',
          'Configured Nginx as a reverse proxy and static file server.',
          'Configured API routing between frontend and backend.',
          'Verified deployment through health checks and authentication tests.',
        ],
        steps: [
          'Push Code to GitHub',
          'GitHub Actions — CI',
          'Build & Validate',
          'SSH Connection to Ubuntu VM',
          'Automated Deployment Scripts',
          'Running Application',
        ],
      },
      {
        title: 'Testing Strategy',
        items: [
          'Unit tests for service-layer business logic using mocks.',
          'Integration tests using the H2 in-memory database.',
          'Playwright end-to-end tests for user workflows.',
          'API testing and deployment health checks.',
        ],
      },
      {
        title: 'Technical Challenges',
        items: [
          'SSH host key changes following virtual machine migrations.',
          'Incorrect frontend backend API URLs.',
          'Differences between local and deployed environments.',
          'Database connectivity and Docker container issues.',
          'Deployment script and permission problems.',
        ],
      },
      {
        title: 'Challenges & Solutions',
        text:
          'I configured Nginx to forward API requests to the Spring Boot backend through a shared public address. Automated deployment scripts reduced repetitive manual deployment steps, while health checks helped verify that the deployed services were running correctly.',
      },
      {
        title: 'Lessons Learned',
        text:
          'This project strengthened my experience with Java backend development, REST APIs, authentication, automated testing, Linux server management, Docker, reverse proxies and CI/CD. It provided practical experience with deploying and maintaining a full-stack application beyond a local development environment.',
      },
    ],
  },

  {
    title: 'Secure Access',
    semester: 'Semester 2 · Group Project',
    description:
      'A remote access management application developed for Simac, featuring QR-based authentication, real-time notifications and secure access management.',

    technologies: [
      'C#',
      'ASP.NET Core',
      'SignalR',
      'EF Core',
      'SQL',
      'QR Authentication',
      'Trello',
      'Agile',
    ],

    github:
      'https://github.com/Realgi022/Secure-Access-group-project',

    sections: [
      {
        title: 'Project Overview',
        text:
          'Secure Access was developed as a group project for Simac. The goal was to provide a remote access solution for employees who forgot their badges and guests who required remote property access.',
      },
      {
        title: 'Client Problem',
        text:
          'Employees who forgot their access badges depended on receptionists to grant access manually. Simac also required a remote access solution for its Airbnb property without hiring a dedicated receptionist.',
      },
      {
        title: 'Project Requirements',
        items: [
          'Remote door unlocking.',
          'QR-based access verification.',
          'Location and identity verification.',
          'Role-based access rules and permissions.',
          'Real-time notifications.',
          'Security mechanisms and audit logging.',
          'Timeouts for unlock requests.',
        ],
      },
      {
        title: 'Software Architecture',
        text:
          'The application uses ASP.NET Core for backend development, Entity Framework Core for database persistence and SignalR for real-time communication.',
        steps: [
          'User Interface',
          'ASP.NET Core Backend',
          'Access Logic & QR Verification',
          'EF Core & SQL Database',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Implemented the QR token functionality.',
          'Collaborated with another developer on real-time notifications using SignalR.',
          'Co-authored the User Requirements Specification.',
          'Contributed to conceptual diagrams and wireframes.',
          'Worked on the introduction and current situation sections of the project plan.',
          'Co-authored research on identity verification and multi-factor authentication.',
          'Participated in client meetings, presentations and retrospectives.',
        ],
      },
      {
        title: 'Team Collaboration',
        text:
          'The team worked through four development iterations, dividing responsibilities and tracking tasks using Trello. Regular client meetings and retrospectives helped us evaluate progress and refine the application based on feedback.',
      },
      {
        title: 'Challenges & Solutions',
        text:
          'The project required coordinating individual implementations within a shared application. Task distribution, regular communication and iterative client feedback helped the team align technical decisions with the client requirements.',
      },
      {
        title: 'Lessons Learned',
        text:
          'I gained experience working with a real client, implementing QR-based functionality, developing real-time communication features and collaborating within a software development team.',
      },
    ],
  },

  {
    title: 'Financial Management App',
    semester: 'Semester 3 · Erasmus Finland · Group Project',
    description:
      'A financial management application developed in an international Agile team, featuring AI-assisted receipt scanning and automatic receipt data entry.',

    technologies: [
      'C#',
      'ASP.NET Core',
      'REST APIs',
      'AI Integration',
      'Swagger',
      'GitHub Actions',
      'Continuous Integration',
      'Jira',
      'Agile / Scrum',
    ],

    github:
      'https://github.com/Realgi022/fm-backend',

    sections: [
      {
        title: 'Project Overview',
        text:
          'This financial management application was developed in collaboration with students from Oulu University of Applied Sciences in Finland. The application aims to help students and young adults manage their personal finances more efficiently.',
      },
      {
        title: 'Key Features',
        items: [
          'Personal financial management.',
          'User authentication.',
          'AI-assisted receipt scanning.',
          'Automatic receipt information extraction.',
          'REST API integration.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Set up Continuous Integration for the backend using GitHub Actions.',
          'Implemented the AI-assisted receipt scanning feature.',
          'Worked on automatic receipt data entry.',
          'Researched AI implementation approaches.',
          'Participated in testing the login controller using Swagger.',
          'Supported frontend developers with backend integration.',
          'Prepared and presented the Sprint 2 review.',
          'Contributed to research and project documentation.',
          'Documented reflections on international collaboration and cultural differences.',
        ],
      },
      {
        title: 'AI Integration',
        text:
          'My main development responsibility was implementing an AI-assisted feature that extracts information from receipts and automatically populates the required fields. This reduces the need for users to manually enter receipt information.',
      },
      {
        title: 'Continuous Integration',
        text:
          'I configured backend Continuous Integration to support automated validation of code changes and improve collaboration between backend developers.',
        steps: [
          'Backend Code Changes',
          'Push to GitHub',
          'GitHub Actions',
          'Automated Build Validation',
        ],
      },
      {
        title: 'International Collaboration',
        text:
          'The project involved collaborating remotely with Finnish students. We used regular meetings, Agile development techniques, sprint planning, presentations and task management to coordinate our work across different educational and cultural backgrounds.',
      },
      {
        title: 'Challenges & Solutions',
        text:
          'Working internationally introduced challenges related to communication, different working approaches and language barriers. Regular meetings, clearly divided responsibilities and API documentation helped the team coordinate frontend and backend development.',
      },
      {
        title: 'Lessons Learned',
        text:
          'This project strengthened my experience with AI integration, backend development, Continuous Integration, international teamwork, Agile practices and technical communication.',
      },
    ],
  },

  {
    title: 'Sports Community',
    semester: 'Semester 1',
    description:
      'A sports community web application where users can access community features including chat, forums and event organization.',

    technologies: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
    ],

    github:
      'https://github.com/Realgi022/Sports-community',

    sections: [
      {
        title: 'Project Overview',
        text:
          'Sports Community is a web application developed during my first semester. It provides a digital environment where sports enthusiasts can connect, communicate and organize activities.',
      },
      {
        title: 'Key Features',
        items: [
          'User login functionality.',
          'Community chat.',
          'Discussion forums.',
          'Sports event organization.',
        ],
      },
      {
        title: 'Technical Implementation',
        text:
          'The application was developed using Python and Flask for backend functionality, together with HTML, CSS and JavaScript for the frontend.',
        steps: [
          'HTML, CSS & JavaScript',
          'Flask Web Application',
          'Python Application Logic',
        ],
      },
      {
        title: 'Lessons Learned',
        text:
          'This project helped me develop my understanding of web development fundamentals, Python programming, frontend development and communication between application components.',
      },
    ],
  },

  {
    title: 'Youth Fit',
    semester: 'Semester 1',
    description:
      'My first semester web application, developed while learning the fundamentals of software engineering using ASP.NET Core Razor Pages.',

    technologies: [
      'C#',
      'ASP.NET Core',
      'Razor Pages',
    ],

    github:
      'https://github.com/Realgi022/YouthFit',

    sections: [
      {
        title: 'Project Overview',
        text:
          'Youth Fit was one of my first software development projects. It was developed during Semester 1 while learning the fundamentals of C# and ASP.NET Core web development.',
      },
      {
        title: 'Technical Implementation',
        text:
          'The application was developed using ASP.NET Core Razor Pages, combining server-side C# logic with web page development.',
      },
      {
        title: 'Learning Objectives',
        items: [
          'Understanding C# programming fundamentals.',
          'Learning ASP.NET Core.',
          'Developing web pages using Razor Pages.',
          'Understanding basic application structure.',
        ],
      },
      {
        title: 'Lessons Learned',
        text:
          'Youth Fit represents the beginning of my software engineering journey and provided a foundation for the more advanced full-stack applications I developed in later semesters.',
      },
    ],
  },
]

function ProjectDetails({
  sections,
  expanded,
  id,
}: {
  sections: ProjectSection[]
  expanded: boolean
  id: string
}) {
  return (
    <div
      id={id}
      aria-hidden={!expanded}
      className={`grid
        transition-[grid-template-rows,opacity]
        duration-500 ease-in-out
        motion-reduce:transition-none ${
          expanded
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
    >
      <div className="min-h-0 overflow-hidden">
        <div className="mt-8 pt-8 border-t border-zinc-800 space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xl font-semibold text-white mb-3">
                {section.title}
              </h4>

              {section.text && (
                <p className="text-zinc-400 leading-relaxed">
                  {section.text}
                </p>
              )}

              {section.items && (
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <span className="text-blue-400 shrink-0">
                        ✓
                      </span>

                      <span className="leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.steps && (
                <div className="mt-5 flex flex-col items-center">
                  {section.steps.map((step, index) => (
                    <div
                      key={step}
                      className="w-full max-w-md"
                    >
                      <div
                        className="rounded-lg border border-zinc-700
                                   bg-zinc-900 px-5 py-4
                                   text-center text-sm font-medium
                                   text-blue-400"
                      >
                        {step}
                      </div>

                      {index < section.steps!.length - 1 && (
                        <div className="text-center text-blue-500 py-2">
                          ↓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  expanded,
  onToggle,
  featured = false,
}: {
  project: Project
  expanded: boolean
  onToggle: () => void
  featured?: boolean
}) {
  const detailsId = `details-${project.title
    .toLowerCase()
    .replace(/\s+/g, '-')}`

  return (
    <div className={featured ? 'p-8 md:p-10' : 'p-7'}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {featured && (
          <>
            <span className="text-blue-400 text-sm font-medium">
              Featured Project
            </span>

            <span className="text-zinc-600">•</span>
          </>
        )}

        <span className="text-blue-400 text-sm">
          {project.semester}
        </span>
      </div>

      {/* Clickable project name */}
      <h3
        className={
          featured
            ? 'text-3xl md:text-4xl font-bold'
            : 'text-2xl font-semibold'
        }
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={detailsId}
          className="flex w-full items-center justify-between
                     gap-4 text-left cursor-pointer
                     hover:text-blue-400 transition-colors"
        >
          {project.title}

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            className={`w-6 h-6 shrink-0 text-blue-400
              transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
          >
            <path
              d="m6 9 6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h3>

      {/* Short description */}
      <p className="mt-5 text-zinc-400 leading-relaxed">
        {project.description}
      </p>

      {/* Technology tags */}
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

      {/* Expanded content */}
      <ProjectDetails
        sections={project.sections}
        expanded={expanded}
        id={detailsId}
      />

      {/* Explore button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={detailsId}
        className="mt-6 text-blue-400 hover:text-blue-300
                   font-medium cursor-pointer transition"
      >
        {expanded
          ? 'Show less ↑'
          : 'Explore project details ↓'}
      </button>

      {/* External links */}
      <div className="mt-8 flex flex-wrap gap-6">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-zinc-200
                     hover:text-blue-400 transition"
        >
          GitHub →
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-200
                       hover:text-blue-400 transition"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}

function Projects() {
  const baseUrl = import.meta.env.BASE_URL

  const [currentImage, setCurrentImage] = useState(0)

  const [expandedProject, setExpandedProject] =
    useState<string | null>(null)

  const toggleProject = (title: string) => {
    setExpandedProject((current) =>
      current === title ? null : title
    )
  }

  const footballScreenshots = [
    {
      src: `${baseUrl}images/FrontPageFootballBettingWebApp.png`,
      title: 'Home Page',
    },
    {
      src: `${baseUrl}images/AdminSide.png`,
      title: 'Admin Dashboard',
    },
    {
      src: `${baseUrl}images/AdminSideCreateMatch.png`,
      title: 'Admin — Create Match',
    },
    {
      src: `${baseUrl}images/UserSidePlaceBet.png`,
      title: 'User Betting Page',
    },
    {
      src: `${baseUrl}images/UserSidePlaceBetPage.png`,
      title: 'Place Bet',
    },
  ]

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

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-zinc-900 py-28 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <p className="text-blue-500 font-medium mb-3">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Things I've built.
        </h2>

        <p className="mt-5 text-zinc-400 text-lg max-w-2xl">
          A selection of individual and team projects I've worked on
          throughout my Software Engineering studies.
          Explore each project to learn more about its architecture,
          technical implementation and my personal contributions.
        </p>

        {/* Featured project */}
        <div
          className="mt-12 border border-zinc-800
                     bg-zinc-950/50 rounded-2xl overflow-hidden"
        >
          {/* Screenshot carousel */}
          <div className="p-4 md:p-6 border-b border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <p className="text-zinc-300 font-medium">
                {footballScreenshots[currentImage].title}
              </p>

              <p className="text-sm text-zinc-500">
                {currentImage + 1} / {footballScreenshots.length}
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-xl
                         border border-zinc-800 bg-zinc-950"
            >
              <img
                src={footballScreenshots[currentImage].src}
                alt={footballScreenshots[currentImage].title}
                className="w-full h-auto"
              />

              {/* Previous screenshot */}
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous screenshot"
                className="absolute left-2 md:left-4 top-1/2
                           -translate-y-1/2
                           w-10 h-10 md:w-12 md:h-12
                           rounded-full bg-black/70 hover:bg-black
                           backdrop-blur border border-white/20
                           flex items-center justify-center
                           text-white text-xl md:text-2xl
                           cursor-pointer transition"
              >
                ←
              </button>

              {/* Next screenshot */}
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next screenshot"
                className="absolute right-2 md:right-4 top-1/2
                           -translate-y-1/2
                           w-10 h-10 md:w-12 md:h-12
                           rounded-full bg-black/70 hover:bg-black
                           backdrop-blur border border-white/20
                           flex items-center justify-center
                           text-white text-xl md:text-2xl
                           cursor-pointer transition"
              >
                →
              </button>
            </div>

            {/* Carousel indicators */}
            <div className="mt-5 flex justify-center gap-2">
              {footballScreenshots.map((screenshot, index) => (
                <button
                  type="button"
                  key={screenshot.src}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`View ${screenshot.title}`}
                  className={`h-2.5 rounded-full cursor-pointer
                    transition-all ${
                      currentImage === index
                        ? 'bg-blue-500 w-7'
                        : 'bg-zinc-700 hover:bg-zinc-500 w-2.5'
                    }`}
                />
              ))}
            </div>
          </div>

          <ProjectCard
            project={footballProject}
            expanded={
              expandedProject === footballProject.title
            }
            onToggle={() =>
              toggleProject(footballProject.title)
            }
            featured
          />
        </div>

        {/* Other projects */}
        <h3 className="mt-20 text-2xl font-semibold">
          Other Projects
        </h3>

        <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`border border-zinc-800
                          bg-zinc-950/50 rounded-xl
                          hover:border-zinc-600
                          transition-colors duration-300 ${
                expandedProject === project.title
                  ? 'border-blue-500/30'
                  : ''
              }`}
            >
              <ProjectCard
                project={project}
                expanded={
                  expandedProject === project.title
                }
                onToggle={() =>
                  toggleProject(project.title)
                }
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects