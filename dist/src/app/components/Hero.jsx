'use client';
import React from 'react';
var Button = function (_a) {
    var children = _a.children, variant = _a.variant, className = _a.className;
    var baseStyles = "px-8 py-4 sm:py-3 font-semibold rounded-full shadow-md hover:scale-105 transform transition-transform duration-300 ease-out";
    var variantStyles = variant === 'primary'
        ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:shadow-2xl border-2 border-transparent hover:border-cyan-400"
        : "bg-gray-700 text-gray-200 hover:shadow-lg border-2 border-transparent hover:border-gray-600";
    return (<button className={"".concat(baseStyles, " ").concat(variantStyles, " ").concat(className)}>
        {children}
    </button>);
};
var BackgroundCircle = function (_a) {
    var size = _a.size, color = _a.color, animation = _a.animation, additionalStyles = _a.additionalStyles;
    return (<div className={"absolute ".concat(size, " ").concat(color, " opacity-20 rounded-full blur-3xl ").concat(animation, " ").concat(additionalStyles)}></div>);
};
var Hero = function () {
    return (<section id='hero_section' className="relative h-screen text-center flex items-center py-40 bg-gradient-to-bl from-gray-900 to-gray-800 text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
            <BackgroundCircle size="h-[30rem] w-[30rem]" color="bg-gradient-to-br from-blue-800 to-purple-800" animation="animate-horizontal-move" additionalStyles="top-0 left-0 opacity-20" />
            <BackgroundCircle size="h-72 w-72" color="bg-gradient-to-br from-indigo-700 to-teal-700" animation="animate-diagonal-move" additionalStyles="bottom-0 right-0 opacity-30" />
            <BackgroundCircle size="h-96 w-96" color="bg-gradient-to-br from-pink-500 to-red-500" animation="animate-vertical-move" additionalStyles="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25" />
        </div>


        <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-8">
                Build Better, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 animate-gradient-move">
                    Scalable UIs
                </span>
                <br /> with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 animate-gradient-move">
                    HexalUI
                </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-12">
                HexalUI is a complete, modular, and customizable component library for rapidly
                building modern, efficient web applications.
            </p>

            <div className="flex justify-center space-x-6">
                <Button variant="primary">Get Started</Button>
                <Button variant="secondary">View Components</Button>
            </div>
        </div>
    </section>);
};
export default Hero;
