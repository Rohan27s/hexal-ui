// components/Playground.tsx
import React from 'react';
import Button from '../ButtonComponents/Button';
import { FaShoppingCart } from 'react-icons/fa';

const Playground = ({ variant, size, shape, disabled, animate, setVariant, setSize, setShape, setDisabled, setAnimate }: any) => (
    <div className="bg-gray-800 p-6 rounded-md shadow-md overflow-auto">
        <h2 className="text-3xl font-bold mb-4">Live Playground</h2>
        <p className="text-lg text-gray-300 mb-6">Try out the button component with different options:</p>

        <div className="mb-6">
            <Button variant={variant} size={size} shape={shape} disabled={disabled} animate={animate}>
                {size === 'large' ? 'Large Button' : size === 'small' ? 'Small Button' : 'Medium Button'}
            </Button>
        </div>

        {/* Variants */}
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Variants</h3>
            <div className="flex space-x-4">
                <button onClick={() => setVariant('primary')} className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Primary</button>
                <button onClick={() => setVariant('secondary')} className={`px-4 py-2 rounded ${variant === 'secondary' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Secondary</button>
                <button onClick={() => setVariant('gradient')} className={`px-4 py-2 rounded ${variant === 'gradient' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Gradient</button>
            </div>
        </div>

        {/* Sizes */}
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Sizes</h3>
            <div className="flex space-x-4">
                <button onClick={() => setSize('small')} className={`px-4 py-2 rounded ${size === 'small' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Small</button>
                <button onClick={() => setSize('medium')} className={`px-4 py-2 rounded ${size === 'medium' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Medium</button>
                <button onClick={() => setSize('large')} className={`px-4 py-2 rounded ${size === 'large' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Large</button>
            </div>
        </div>

        {/* Shapes */}
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Shapes</h3>
            <div className="flex space-x-4">
                <button onClick={() => setShape('rounded')} className={`px-4 py-2 rounded ${shape === 'rounded' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Rounded</button>
                <button onClick={() => setShape('pill')} className={`px-4 py-2 rounded ${shape === 'pill' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Pill</button>
                <button onClick={() => setShape('square')} className={`px-4 py-2 rounded ${shape === 'square' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>Square</button>
            </div>
        </div>

        {/* Animation & Disabled */}
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Additional Options</h3>
            <div className="flex space-x-4">
                <button onClick={() => setAnimate(!animate)} className={`px-4 py-2 rounded ${animate ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>{animate ? 'Disable Animation' : 'Enable Animation'}</button>
                <button onClick={() => setDisabled(!disabled)} className={`px-4 py-2 rounded ${disabled ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>{disabled ? 'Enabled' : 'Disabled'}</button>
            </div>
        </div>
    </div>
);

export default Playground;
