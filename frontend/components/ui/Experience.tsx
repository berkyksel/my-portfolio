export default function Experience() {
    const jobs = [
        {
            company: "ThinkBro",
            role: "Yazılım Geliştirici (İşyeri Eğitimi)",
            duration: "Haziran 2026 - Mevcut",
            location: "İskenderun Teknik Üniversitesi Teknokent",
            bullets: [
                "Yazılım ekipleriyle koordineli çalışarak modern web uygulamaları geliştirilmesine katkı sağlandı.",
                "Unity ve C# kullanarak interaktif oyun bileşenleri ve kullanıcı deneyimi kurguları üzerinde çalışıldı.",
                "Takım içi sürüm kontrol sistemleri (Git) ve proje yönetim süreçleri aktif olarak deneyimlendi."
            ]
        },
        {
            company: "Winton",
            role: "Full Stack Developer (Bağımsız / Solo)",
            duration: "Mayıs 2026",
            bullets: [
                "Şirketin ihtiyaç duyduğu tüm web platformu altyapısı tek başına, uçtan uca tasarlanıp kodlandı.",
                "Frontend tarafında Next.js, TypeScript ve Tailwind CSS ile modern ve duyarlı (responsive) arayüzler inşa edildi.",
                "Backend veri yönetimi için PostgreSQL ve Prisma ORM entegrasyonu başarılı bir şekilde kuruldu."
            ]
        }
    ];

    return (
        <section id="experience" className="max-w-7xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    <span className="text-blue-500 font-mono text-2xl md:text-3xl mr-2">03.</span>
                    Deneyim
                </h2>
                <div className="h-[1px] bg-slate-800 flex-grow"></div>
            </div>

            <div className="space-y-12 max-w-4xl">
                {jobs.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l border-slate-800 hover:border-blue-500/50 transition-colors">
                        {/* Nokta İkonu */}
                        <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6px] top-2"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    {job.role} <span className="text-blue-400">@ {job.company}</span>
                                </h3>
                                {job.location && (
                                    <p className="text-slate-500 text-xs font-mono mt-1">{job.location}</p>
                                )}
                            </div>
                            <span className="text-slate-400 font-mono text-sm bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800 self-start md:self-center">
                                {job.duration}
                            </span>
                        </div>

                        <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                            {job.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex gap-2">
                                    <span className="text-indigo-500 select-none">▹</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}