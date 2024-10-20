'use client';
import Link from 'next/link';
import React from 'react';
var Button = function (_a) {
    var children = _a.children, variant = _a.variant;
    var baseStyles = "px-4 py-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    var variantStyles = variant === 'primary'
        ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transform focus:ring-cyan-400"
        : "border border-cyan-400 text-white hover:bg-gray-700 hover:border-gray-600 focus:ring-cyan-400";
    return (<button className={"".concat(baseStyles, " ").concat(variantStyles)}>
        {children}
    </button>);
};
var NavLink = function (_a) {
    var children = _a.children, href = _a.href, isActive = _a.isActive;
    var handleClick = function (e) {
        if (href.startsWith('#')) {
            e.preventDefault();
            var targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    };
    return (<Link href={href} onClick={handleClick} className="relative group transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:border-0" aria-current={isActive ? "page" : undefined}>
        {children}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
    </Link>);
};
var Navbar = function () {
    var navLinks = [
        { name: 'Components', href: '/component-gallery', isActive: true },
        { name: 'Docs', href: '#docs' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'GitHub', href: '#' },
    ];
    return (<header className="flex justify-between fixed top-0 z-50 w-full items-center p-6 bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-lg shadow-md">

        <div className="text-3xl font-extrabold tracking-tight">
            <Link href="/" aria-label="HexalUI Home" className="focus:outline-none focus:ring-2 focus:ring-cyan-400">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 animate-gradient-move">
                    HexalUI
                </span>
            </Link>
        </div>


        <nav className="hidden md:flex space-x-8 text-lg" aria-label="Main navigation">
            {navLinks === null || navLinks === void 0 ? void 0 : navLinks.map(function (link, index) {
                return (<NavLink key={index} href={link.href} isActive={link.isActive}>
                    {link.name}
                </NavLink>);
            })}
        </nav>


        <div className="flex space-x-4">
            <Button variant="secondary">Login</Button>
            <Button variant="primary">Sign Up</Button>
        </div>
    </header>);
};
export default Navbar;
