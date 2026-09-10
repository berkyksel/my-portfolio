export default function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-center">
            <div className="flex justify-center items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    About Me
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-slate-400 leading-relaxed text-md md:text-lg">

                    <p>
                        Hello! I&apos;m a <span className="text-white font-medium">Frontend Developer</span> passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean, interactive, and visually appealing digital experiences.
                    </p>

                    <p>
                        My primary focus is frontend development, where I create intuitive user interfaces using modern technologies such as React, Next.js, TypeScript, and Tailwind CSS. I also have a solid understanding of backend fundamentals, allowing me to build applications that are both functional and scalable.
                    </p>

                    <p>
                        I am committed to continuous learning and always strive to improve my skills by exploring new technologies and best practices. I enjoy integrating AI-powered features into my projects and building solutions that provide a better experience for users.
                    </p>


                </div>

                {/* Görsel veya Tasarımsal Alan */}
                <div className="flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 group-hover:opacity-45 blur transition duration-500"></div>
                        <div className="relative bg-[#0d1117] border border-slate-800 p-8 rounded-2xl max-w-sm space-y-4">

                            <div className="text-blue-500 font-mono text-sm"> Education & Goals</div>

                            <h3 className="text-xl font-bold text-white">
                                Computer Engineering
                            </h3>

                            <p className="text-slate-400 text-sm">
                                I aim to combine a strong theoretical foundation with hands-on project experience to build modern, scalable, and industry-standard software solutions.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}