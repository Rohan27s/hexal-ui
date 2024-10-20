'use client';
import React from 'react';
var Button = function (_a) {
    var children = _a.children, variant = _a.variant, _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.shape, shape = _c === void 0 ? 'rounded' : _c, icon = _a.icon, disabled = _a.disabled, onClick = _a.onClick, _d = _a.animate, animate = _d === void 0 ? false : _d;
    var baseStyles = 'flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    var variantStyles = {
        primary: 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg hover:shadow-xl transform focus:ring-cyan-400',
        secondary: 'border border-cyan-400 text-white hover:bg-gray-700 hover:border-gray-600 focus:ring-cyan-400',
        gradient: 'bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transform focus:ring-indigo-400',
    };
    var sizeStyles = {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
    };
    var shapeStyles = {
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        square: 'rounded-none',
    };
    var animationStyles = animate ? 'hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300' : '';
    return (<button onClick={onClick} disabled={disabled} className={"".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(sizeStyles[size], " ").concat(shapeStyles[shape], " ").concat(animationStyles)}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>);
};
export default Button;
