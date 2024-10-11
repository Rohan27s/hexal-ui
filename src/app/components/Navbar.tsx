'use client';
import Link from 'next/link';
import React from 'react';

// Reusable Button Component
const Button = ({ children, variant }: { children: React.ReactNode, variant: 'primary' | 'secondary' }) => {
    const baseStyles = "px-4 py-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantStyles =
        variant === 'primary'
            ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transform focus:ring-cyan-400"
            : "border border-cyan-400 text-white hover:bg-gray-700 hover:border-gray-600 focus:ring-cyan-400";
    return (
        <button className={`${baseStyles} ${variantStyles}`}>
            {children}
        </button>
    );
};

// Reusable NavLink Component with ARIA and custom focus style
const NavLink = ({ children, href, isActive }: { children: React.ReactNode, href: string, isActive?: boolean }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (href.startsWith('#')) {
            e.preventDefault(); // Prevent default anchor click behavior for internal navigation
            const targetElement = document.querySelector(href); // Select the target element based on ID (e.g., #section)

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
        // Otherwise, allow normal navigation for external links (like "/component-gallery")
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className="relative group transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:border-0" // Custom focus styles
            aria-current={isActive ? "page" : undefined}
        >
            {children}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
        </Link>
    );
};


const Navbar = () => {
    const navLinks = [
        { name: 'Components', href: '/component-gallery', isActive: true },
        { name: 'Docs', href: '#docs' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'GitHub', href: '#' },
    ];

    return (
        <header className="flex justify-between fixed top-0 z-50 w-full items-center p-6 bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-lg shadow-md">
            {/* Brand / Logo */}
            <div className="text-3xl font-extrabold tracking-tight">
                <Link href="/" aria-label="HexaUI Home" className="focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 animate-gradient-move">
                        HexaUI
                    </span>
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8 text-lg" aria-label="Main navigation">
                {navLinks?.map((link, index) => (
                    <NavLink key={index} href={link.href} isActive={link.isActive}>
                        {link.name}
                    </NavLink>
                ))}
            </nav>

            {/* Login / Sign Up Buttons */}
            <div className="flex space-x-4">
                <Button variant="secondary">Login</Button>
                <Button variant="primary">Sign Up</Button>
            </div>
        </header>
    );
};

export default Navbar;
