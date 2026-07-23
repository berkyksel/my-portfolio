export default function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    <span className="text-blue-500 font-mono text-2xl md:text-3xl mr-2">01.</span>
                    Hakkımda
                </h2>
                <div className="h-[1px] bg-slate-800 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-slate-400 leading-relaxed text-md md:text-lg">
                    <p>
                        Merhaba! Ben bilgisayar ve yazılım dünyasında modern çözümler üretmeye odaklanmış bir <span className="text-white font-medium">Yazılım Mühendisliği</span> öğrencisiyim. Fikirleri çalışan, estetik ve ölçeklenebilir dijital ürünlere dönüştürmeyi seviyorum.
                    </p>
                    <p>
                        Geliştirme sürecinde hem kullanıcı arayüzünün estetiğine (Frontend) hem de arka plandaki sistemlerin mimari sağlamlığına (Backend) büyük önem veriyorum. Web teknolojilerinin yanı sıra mobil uygulama geliştirme ve interaktif oyun mekanikleri tasarlama konusunda da aktif olarak çalışıyorum.
                    </p>
                    <p>
                        Sürekli öğrenmeyi ve yeni teknolojileri projelerime entegre etmeyi bir vizyon olarak benimsedim. Yapay zeka entegrasyonlarından veritabanı optimizasyonlarına kadar geniş bir teknik yelpazede projeler üretiyorum.
                    </p>
                </div>

                {/* Görsel veya Tasarımsal Alan */}
                <div className="flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 group-hover:opacity-45 blur transition duration-500"></div>
                        <div className="relative bg-[#0d1117] border border-slate-800 p-8 rounded-2xl max-w-sm space-y-4">
                            <div className="text-blue-500 font-mono text-sm">// Eğitim & Hedefler</div>
                            <h3 className="text-xl font-bold text-white">Yazılım/Bilgisayar Mühendisliği</h3>
                            <p className="text-slate-400 text-sm">
                                Teorik altyapıyı pratik projelerle birleştirerek endüstri standartlarında yazılımlar geliştirmeyi amaçlıyorum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}