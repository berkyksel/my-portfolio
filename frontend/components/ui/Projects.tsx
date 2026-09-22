export default function Projects() {
    const portfolioItems = [
        {
            title: "AI Destekli Resmi Yazı Dönüştürücü",
            role: "Proje Yöneticisi & Geliştirici",
            description: "TÜBİTAK 2209-A araştırma programı kapsamında kabul alan, yapay zeka API'leri entegre edilerek geliştirilmiş resmi metin dönüştürme mobil uygulaması.",
            tech: ["Flutter", "Dart", "AI APIs"],
            link: "#"
        },
        {
            title: "Winton Web Platformu",
            role: "Full Stack Developer",
            description: "Winton firması için tek başıma üstlendiğim, uçtan uca tüm mimarisini ve geliştirmesini tek başıma yaptığım modern web projesi.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            link: "#"
        },
        {
            title: "ThinkBro İşyeri Eğitimi",
            role: "Yazılım Geliştirici",
            description: "İskenderun Teknik Üniversitesi Teknokent bünyesindeki ThinkBro'da yazılım ekipleriyle koordineli çalışarak profesyonel projelere teknik katkı sağladığım dönem.",
            tech: ["React", "C#", "Unity", "Git"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="max-w-7xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-center">
            <div className="flex justify-center items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Projects
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#0d1117] border border-slate-800 rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-4xl text-blue-500 group-hover:text-purple-400 transition-colors">
                                📁
                            </div>
                            <a href={item.link} className="text-slate-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>

                        <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-purple-400 text-xs font-mono mb-4">{item.role}</p>
                        <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {item.tech.map((t) => (
                                <span key={t} className="text-xs font-mono text-slate-500">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}