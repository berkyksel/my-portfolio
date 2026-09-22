"use client";

import Link from 'next/link';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { FileText } from 'lucide-react';

function GithubIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
        >
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.38-3.37-1.38-.45-1.19-1.1-1.51-1.1-1.51-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.74-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.7 1.05A9.1 9.1 0 0 1 12 7.06c.84 0 1.69.12 2.48.35 1.87-1.32 2.7-1.05 2.7-1.05.54 1.37.2 2.39.1 2.64.63.71 1.01 1.62 1.01 2.74 0 3.94-2.35 4.8-4.58 5.06.36.32.69.95.69 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#iletisim' },
    ];

    function handleNavigation(event: MouseEvent<HTMLAnchorElement>, href: string) {
        setIsMenuOpen(false);

        if (!href.startsWith('#')) {
            return;
        }

        event.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', href);
    }

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/80 flex items-center justify-between py-6 px-8">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-500 tracking-tighter">
                &lt;Dev/&gt;
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-base font-medium text-slate-400">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={(event) => handleNavigation(event, link.href)}
                        className="hover:text-blue-400 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
                <a
                    href="https://github.com/berkyksel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-purple-500 px-6 py-2 text-white transition-colors hover:bg-purple-600"
                >
                    <GithubIcon />
                    GitHub
                </a>
                <a
                    href="/BerkYüksel-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700"
                >
                    <FileText aria-hidden="true" size={16} />
                    CV
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                type="button"
                aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
                className="md:hidden text-slate-300 text-2xl"
            >
                {isMenuOpen ? '×' : '☰'}
            </button>

            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 border-t border-slate-800 bg-black/95 px-8 py-4 md:hidden">
                    <div className="flex flex-col gap-4 text-slate-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(event) => handleNavigation(event, link.href)}
                                className="hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>

    )
};    