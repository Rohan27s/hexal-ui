import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'gradient';
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | 'pill' | 'square';
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    animate?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
