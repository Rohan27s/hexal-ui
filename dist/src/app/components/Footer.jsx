'use client';
import { FaGithub, FaEnvelope, FaDollarSign, FaBook } from 'react-icons/fa';
var Footer = function () {
    var links = [
        { href: '#', icon: FaBook, label: 'Docs' },
        { href: '#', icon: FaGithub, label: 'GitHub' },
        { href: '#', icon: FaDollarSign, label: 'Pricing' },
        { href: '#', icon: FaEnvelope, label: 'Contact' },
    ];
    return (<footer className="relative bg-gray-900 text-white py-16 px-4 text-center overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">

            <p className="mb-8 text-3xl font-bold tracking-wide leading-relaxed">
                Ready to start building faster? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                    Join HexalUI today.
                </span>
            </p>


            <nav className="flex justify-center space-x-10 text-lg mb-10">
                {links.map(function (link, index) {
                    return (<a key={index} href={link.href} className="flex items-center space-x-2 group transition-colors duration-300">
                        <link.icon className="text-2xl group-hover:text-cyan-400 group-hover:scale-110 transition-transform duration-300 ease-out" />
                        <span className="group-hover:text-cyan-400 transition-colors duration-300">{link.label}</span>
                    </a>);
                })}
            </nav>


            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} HexalUI. All rights reserved.
            </p>
        </div>
    </footer>);
};
export default Footer;
