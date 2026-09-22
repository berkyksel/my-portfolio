export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]
        },
        {
            title: "Backend & Databases",
            skills: ["Node.js", "PostgreSQL", "Python", "REST APIs"]
        },
        {
            title: "Mobile & Game Development",
            skills: ["Flutter", "Dart", "C#", "Unity Engine"]
        },
        {
            title: "AI & Developer Tools",
            skills: ["OpenAI API", "Groq", "ElevenLabs", "Git", "GitHub", "Docker"]
        }
    ];

    return (
        <section id="skills" className="max-w-7xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-center">
            <div className="flex justify-center items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Skills
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <div key={index} className="bg-[#0d1117] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                        <h3 className="text-lg font-bold text-white mb-6 font-mono text-blue-400">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2 text-slate-300 text-sm">
                                    <span className="text-indigo-500">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}