import { BriefcaseBusiness, Code2, Mail } from "lucide-react";

const contactLinks = [
    {
        label: "Email",
        value: "berk00yuksel@gmail.com",
        href: "mailto:berk00yuksel@gmail.com",
        icon: Mail,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/berkyksel/",
        href: "https://linkedin.com/in/berkyksel/",
        icon: BriefcaseBusiness,
    },
    {
        label: "GitHub",
        value: "github.com/berkyksel",
        href: "https://github.com/berkyksel",
        icon: Code2,
    },
];

export default function Iletisim() {
    return (
        <section id="iletisim" className="max-w-5xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-2xl mb-12">
                <p className="text-blue-500 font-mono text-sm mb-4">04 / Contact</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                    Let&apos;s build something together.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or simply want to say hello, you can reach me through any of the channels below.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactLinks.map(({ label, value, href, icon: Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 border border-slate-800 bg-[#0d1117] p-5 rounded-xl transition-colors hover:border-blue-500/60 hover:bg-slate-900"
                    >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Icon aria-hidden="true" size={20} />
                        </span>
                        <span className="min-w-0">
                            <span className="block text-sm text-slate-500 mb-1">{label}</span>
                            <span className="block truncate text-slate-200 group-hover:text-white">{value}</span>
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}