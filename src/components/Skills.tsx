function Skills() {
    const skillGroups = [
        {
            title: 'Backend',
            skills: ['Java', 'Spring Boot', 'C#', 'ASP.NET Core', 'REST APIs'],
        },
        {
            title: 'Frontend',
            skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'Tailwind CSS'],
        },
        {
            title: 'Database',
            skills: ['SQL', 'Microsoft SQL Server'],
        },
        {
            title: 'Tools & Practices',
            skills: [
                'Git',
                'GitHub',
                'Visual Studio',
                'VS Code',
                'IntelliJ IDEA',
                'Jira',
                'Scrum / Agile',
                'Unit Testing',
                'Integration Testing',
            ],
        },
    ]

    return (
        <section id="skills" className="bg-zinc-950 py-28 text-white">
            <div className="max-w-6xl mx-auto px-6">

                <p className="text-blue-500 font-medium mb-3">
                    Skills
                </p>

                <h2 className="text-4xl md:text-5xl font-bold">
                    Technologies I work with.
                </h2>

                <p className="mt-5 text-zinc-400 text-lg max-w-2xl">
                    Technologies, tools and development practices I've used while
                    building individual and team software projects.
                </p>

                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="border border-zinc-800 rounded-xl p-7
                         hover:border-zinc-700 transition"
                        >
                            <h3 className="text-xl font-semibold mb-5">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-zinc-900 border border-zinc-800
                               text-zinc-300 px-4 py-2 rounded-lg text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills