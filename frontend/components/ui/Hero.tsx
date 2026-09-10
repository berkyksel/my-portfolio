import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[calc(100vh-100px)]">

            {/* Left Section */}
            <div className="flex-1 space-y-8">
                <p className="text-blue-500 font-mono text-sm md:text-base">
                    Hi, my name is Berk Yüksel
                </p>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                    <span className="text-purple-500">
                        Frontend <br />
                        Developer
                    </span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl max-w-xl">
                    I build exceptional digital experiences with modern technologies and
                    creative solutions.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                        href="#projects"
                        className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-md text-md transition-colors"
                    >
                        View My Work
                    </Link>

                    <Link
                        href="#contact"
                        className="text-slate-300 border-slate-700 hover:bg-slate-800 px-8 py-6 rounded-md text-md bg-transparent"
                    >
                        Contact Me
                    </Link>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 pt-8">
                    {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",

                    ].map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-slate-300 text-xs md:text-sm font-mono"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 w-full max-w-lg">
                <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-slate-800 shadow-2xl shadow-indigo-500/20 transition-shadow duration-300">

                    {/* Terminal Üst Bar */}
                    <div className="flex items-center space-x-2 px-4 py-3 bg-[#161b22] border-b border-slate-800">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>

                    {/* Terminal İçerik */}
                    <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
                        <div className="text-purple-400">
                            const <span className="text-blue-400">developer</span> = {"{"}
                        </div>

                        <div className="ml-4 text-slate-300">
                            name:{" "}
                            <span className="text-green-400">&apos;Frontend Dev&apos;</span>,
                        </div>

                        <div className="ml-4 text-slate-300">
                            skills: [
                            <span className="text-green-400">&apos;React&apos;</span>,{" "}
                            <span className="text-green-400">&apos;Next.js&apos;</span>,{" "}
                            <span className="text-green-400">&apos;TypeScript&apos;</span>
                            ],
                        </div>

                        <div className="ml-4 text-slate-300">
                            status:{" "}
                            <span className="text-green-400">&apos;Building modern web applications&apos;</span>
                        </div>

                        <div className="text-purple-400">{"}"}</div>

                        <br />

                        <div className="text-slate-500">$ npm run dev</div>
                        <div className="text-slate-400">&gt; Building for production...</div>

                        <div className="text-green-400 flex items-center gap-2">
                            <span>✔</span>
                            Build Successful!
                        </div>

                        <div className="text-slate-400">&gt; Ready in 1.2s</div>

                        <div className="animate-pulse w-2 h-5 bg-slate-400 mt-2 inline-block align-middle"></div>
                    </div>
                </div>
            </div>

        </section>
    );
}