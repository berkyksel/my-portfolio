import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects'},
        { name: 'Experience', href: '#experience'},
        { name: 'Contact', href: '#contact'},
    ];
    
    return(
        <nav className= "w-full flex items- center justify-between py-6 px-8 max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-500 tracking-tighter">
                &lt;Dev/&gt;
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
                {navLinks.map((link) => (
                    <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Hire Me Button */}
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-6 hidden md:inline-flex">
                Hire Me
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden text-slate-300">
                ☰
            </div>
        </nav>    

    )
};    