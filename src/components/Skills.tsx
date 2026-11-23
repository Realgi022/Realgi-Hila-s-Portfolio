function Skills() {
    const skillGroups = [
        {
            title: 'Backend Development',
            skills: [
                'Java',
                'Spring Boot',
                'C#',
                'ASP.NET Core',
                'ASP.NET Core MVC',
                'Python',
                'Flask',
                'REST APIs',
                'SignalR',
                'Spring Security',
                'JWT Authentication',
            ],
        },
        {
            title: 'Frontend Development',
            skills: [
                'React',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS',
                'Tailwind CSS',
                'Vite',
                'Razor Pages',
            ],
        },
        {
            title: 'Databases & Data Access',
            skills: [
                'SQL',
                'Microsoft SQL Server',
                'H2 Database',
                'Entity Framework Core',
                'ADO.NET',
                'Relational Database Design',
            ],
        },
        {
            title: 'DevOps & CI/CD',
            skills: [
                'CI/CD Pipelines',
                'GitHub Actions',
                'Docker',
                'Linux / Ubuntu',
                'Nginx',
                'Reverse Proxy',
                'SSH',
                'Virtual Machines',
                'Deployment Automation',
                'GitHub Secrets',
                'Gradle',
                'npm',
            ],
        },
        {
            title: 'Software Architecture & Design',
            skills: [
                'Object-Oriented Programming',
                'SOLID Principles',
                'Three-Layer Architecture',
                'Dependency Injection',
                'DTOs',
                'Repository Pattern',
                'Service Pattern',
                'Exception Handling',
                'UML Diagrams',
            ],
        },
        {
            title: 'Testing & Quality Assurance',
            skills: [
                'Unit Testing',
                'Integration Testing',
                'End-to-End Testing',
                'Playwright',
                'Mocking',
                'Swagger',
                'Bruno',
                'Acceptance Test Planning',
                'API Testing',
            ],
        },
        {
            title: 'Development Tools',
            skills: [
                'Git',
                'GitHub',
                'Visual Studio',
                'VS Code',
                'IntelliJ IDEA',
                'Jira',
                'Trello',
                'Figma',
            ],
        },
        {
            title: 'Professional & Development Practices',
            skills: [
                'Scrum / Agile',
                'Requirements Analysis',
                'Technical Documentation',
                'AI Integration',
                'Client Communication',
                'International Collaboration',
                'Teamwork',
                'Problem Solving',
                'Iterative Development',
            ],
        },
    ]

    return (
        <section
            id="skills"
            className="scroll-mt-20 bg-zinc-950 py-28 text-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                <p className="text-blue-500 font-medium mb-3">
                    Skills
                </p>

                <h2 className="text-4xl md:text-5xl font-bold">
                    Technologies I work with.
                </h2>

                <p className="mt-5 text-zinc-400 text-lg max-w-3xl">
                    Technologies, tools and development practices I've used
                    while building individual and team software projects.
                    My experience covers full-stack development, software
                    architecture, automated testing, DevOps and continuous
                    integration and deployment.
                </p>

                {/* Skill Categories */}
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="border border-zinc-800 rounded-xl p-7
                                       hover:border-blue-500/30
                                       transition duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-5">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-zinc-900
                                                   border border-zinc-800
                                                   text-zinc-300 px-4 py-2
                                                   rounded-lg text-sm
                                                   hover:text-blue-400
                                                   hover:border-blue-500/30
                                                   transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* DevOps Experience Highlight */}
                <div
                    className="mt-10 border border-blue-500/20
                               bg-blue-500/5 rounded-xl p-7 md:p-9"
                >
                    <p className="text-blue-400 text-sm font-medium mb-3">
                        Practical Engineering Experience
                    </p>

                    <h3 className="text-2xl md:text-3xl font-semibold">
                        From development to deployment.
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-relaxed max-w-4xl">
                        Beyond developing applications, I have hands-on
                        experience configuring CI/CD pipelines, automating
                        frontend and backend deployments, managing Ubuntu
                        virtual machines, running databases in Docker
                        containers and configuring Nginx reverse proxies.
                    </p>

                    <p className="mt-4 text-zinc-400 leading-relaxed max-w-4xl">
                        Using GitHub Actions, SSH and automated deployment
                        scripts, I have implemented repeatable deployment
                        workflows that reduce manual work and improve
                        application reliability.
                    </p>

                    {/* CI/CD Pipeline */}
                    <div className="mt-8 flex flex-col md:flex-row
                                    items-center gap-3">

                        {[
                            'Code Changes',
                            'GitHub Actions',
                            'Build & Test',
                            'SSH Deployment',
                            'Live Application',
                        ].map((step, index, steps) => (
                            <div key={step} className="contents">

                                <div
                                    className="w-full md:flex-1
                                               bg-zinc-900
                                               border border-zinc-700
                                               rounded-lg px-4 py-4
                                               text-center text-sm
                                               font-medium text-blue-400"
                                >
                                    {step}
                                </div>

                                {index < steps.length - 1 && (
                                    <>
                                        <span className="hidden md:block text-blue-500">
                                            →
                                        </span>

                                        <span className="md:hidden text-blue-500">
                                            ↓
                                        </span>
                                    </>
                                )}

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills