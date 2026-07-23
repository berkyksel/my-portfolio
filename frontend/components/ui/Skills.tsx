export default function Skills() {
    const skillCategories = [
        {
            title: "Web Geliştirme",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]
        },
        {
            title: "Backend & Veritabanı",
            skills: ["Node.js", "PostgreSQL", "Prisma ORM", "Python", "REST APIs"]
        },
        {
            title: "Mobil & Oyun Geliştirme",
            skills: ["Flutter", "Dart", "C#", "Unity Engine"]
        },
        {
            title: "Yapay Zeka & Diğer",
            skills: ["OpenAI API", "Groq", "ElevenLabs", "Git / GitHub", "Docker"]
        }
    ];

    return (
        <section id="skills" className="max-w-7xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    <span className="text-blue-500 font-mono text-2xl md:text-3xl mr-2">02.</span>
                    Yetenekler
                </h2>
                <div className="h-[1px] bg-slate-800 flex-grow"></div>
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