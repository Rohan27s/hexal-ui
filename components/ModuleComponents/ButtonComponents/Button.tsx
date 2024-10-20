'use client';
import React from 'react';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'gradient';
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | 'pill' | 'square';
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    animate?: boolean;
    className?: string; // Allow users to pass custom class names
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant,
    size = 'medium',
    shape = 'rounded',
    icon,
    disabled,
    onClick,
    animate = false,
    className = '', // Default to an empty string if no custom class is provided
}) => {
    const variantClass = `button-${variant}`;
    const sizeClass = `button-${size}`;
    const shapeClass = `button-${shape}`;
    const animationClass = animate ? 'button-animate' : '';

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button ${variantClass} ${sizeClass} ${shapeClass} ${animationClass} ${className}`}
        >
            {icon && <span className="icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
