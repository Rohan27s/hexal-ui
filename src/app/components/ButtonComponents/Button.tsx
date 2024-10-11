'use client';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'gradient'; // Added 'gradient' variant
    size?: 'small' | 'medium' | 'large'; // New size prop
    shape?: 'rounded' | 'pill' | 'square'; // New shape prop
    icon?: React.ReactNode; // Option to add an icon
    disabled?: boolean; // Disabled state
    onClick?: () => void;
    animate?: boolean; // Option to add animation
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant,
    size = 'medium',
    shape = 'rounded',
    icon,
    disabled,
    onClick,
    animate = false
}) => {
    const baseStyles =
        'flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    // Variant styles, including gradient buttons
    const variantStyles = {
        primary: 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg hover:shadow-xl transform focus:ring-cyan-400',
        secondary: 'border border-cyan-400 text-white hover:bg-gray-700 hover:border-gray-600 focus:ring-cyan-400',
        gradient: 'bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transform focus:ring-indigo-400',
    };

    // Size styles
    const sizeStyles = {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
    };

    // Shape styles (rounded, pill, square)
    const shapeStyles = {
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        square: 'rounded-none',
    };

    // Conditional animation class for hover effect
    const animationStyles = animate ? 'hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300' : '';

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${shapeStyles[shape]} ${animationStyles}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
