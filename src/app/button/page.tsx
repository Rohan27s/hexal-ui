'use client';
import React, { useState } from 'react';
import { FaCode, FaPlay, FaShoppingCart, FaCopy } from 'react-icons/fa';
import Button from '../components/ButtonComponents/Button';

const ButtonComponentPage = () => {
    const [variant, setVariant] = useState<'primary' | 'secondary' | 'gradient'>('primary');
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [shape, setShape] = useState<'rounded' | 'pill' | 'square'>('rounded');
    const [disabled, setDisabled] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [copied, setCopied] = useState(false);

    // Function to generate the code based on user's selection
    const generateCode = () => {
        const variantCode = `variant="${variant}"`;
        const sizeCode = size ? `size="${size}"` : '';
        const shapeCode = shape ? `shape="${shape}"` : '';
        const disabledCode = disabled ? `disabled={true}` : '';
        const animateCode = animate ? `animate={true}` : '';
        const iconCode = `<FaShoppingCart />`;

        return `<Button ${variantCode} ${sizeCode} ${shapeCode} ${disabledCode} ${animateCode}>${iconCode}</Button>`;
    };

    // Function to handle code copy
    const handleCopyCode = () => {
        navigator.clipboard.writeText(generateCode());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the "Copied" status after 2 seconds
    };

    return (
        <section className="py-28 px-8 bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto">
                {/* Title */}
                <h1 className="text-5xl font-extrabold mb-10 text-gradient bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                    Button Component
                </h1>

                {/* Overview */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Overview</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        The <strong>Button</strong> component is highly customizable. It supports multiple styles using the <code>variant</code>, <code>size</code>, and <code>disabled</code> props. You can also add icons for enhanced visual interaction.
                    </p>
                </div>

                {/* Playground with Code Preview */}
                <div className="grid h-[80vh]  grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Playground */}
                    <div className="bg-gray-800 overflow-y-scroll p-6 rounded-md shadow-md">
                        <h2 className="text-3xl font-bold mb-4 flex items-center">
                            <FaPlay className="mr-3" /> Live Playground
                        </h2>
                        <p className="text-lg text-gray-300 mb-6">Try out the button component with different options:</p>

                        {/* Button Preview */}
                        <h3 className="text-2xl font-semibold mb-2">Preview</h3>
                        <p className="text-gray-400 mb-4">The buttons below reflect your current selection.</p>
                        <div className="flex space-x-6 mb-8">
                            <Button variant={variant} size={size} shape={shape} disabled={disabled} animate={animate}>
                                {size === 'large' ? 'Large Button' : size === 'small' ? 'Small Button' : 'Medium Button'}
                            </Button>
                            <Button variant={variant} size={size} shape={shape} icon={<FaShoppingCart />} disabled={disabled} animate={animate}>
                                Button with Icon
                            </Button>
                        </div>

                        {/* Variant Controls */}
                        <h3 className="text-2xl font-semibold mb-2">Button Variants</h3>
                        <p className="text-gray-400 mb-4">Choose between primary, secondary, and gradient buttons.</p>
                        <div className="flex space-x-6 mb-8">
                            <button onClick={() => setVariant('primary')} className={`px-4 py-2 rounded-md ${variant === 'primary' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Primary
                            </button>
                            <button onClick={() => setVariant('secondary')} className={`px-4 py-2 rounded-md ${variant === 'secondary' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Secondary
                            </button>
                            <button onClick={() => setVariant('gradient')} className={`px-4 py-2 rounded-md ${variant === 'gradient' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Gradient
                            </button>
                        </div>

                        <hr className="my-6 border-gray-600" />

                        {/* Size Controls */}
                        <h3 className="text-2xl font-semibold mb-2">Button Sizes</h3>
                        <p className="text-gray-400 mb-4">Select different button sizes for different use cases.</p>
                        <div className="flex space-x-6 mb-8">
                            <button onClick={() => setSize('small')} className={`px-4 py-2 rounded-md ${size === 'small' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Small
                            </button>
                            <button onClick={() => setSize('medium')} className={`px-4 py-2 rounded-md ${size === 'medium' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Medium
                            </button>
                            <button onClick={() => setSize('large')} className={`px-4 py-2 rounded-md ${size === 'large' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Large
                            </button>
                        </div>

                        <hr className="my-6 border-gray-600" />

                        {/* Shape Controls */}
                        <h3 className="text-2xl font-semibold mb-2">Button Shapes</h3>
                        <p className="text-gray-400 mb-4">Choose different shapes like rounded, pill, or square buttons.</p>
                        <div className="flex space-x-6 mb-8">
                            <button onClick={() => setShape('rounded')} className={`px-4 py-2 rounded-md ${shape === 'rounded' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Rounded
                            </button>
                            <button onClick={() => setShape('pill')} className={`px-4 py-2 rounded-md ${shape === 'pill' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Pill
                            </button>
                            <button onClick={() => setShape('square')} className={`px-4 py-2 rounded-md ${shape === 'square' ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                Square
                            </button>
                        </div>

                        <hr className="my-6 border-gray-600" />

                        {/* Animation and Disabled Controls */}
                        <h3 className="text-2xl font-semibold mb-2">Additional Options</h3>
                        <p className="text-gray-400 mb-4">Toggle animation and disabled states.</p>
                        <div className="flex space-x-6 mb-8">
                            <button onClick={() => setAnimate(!animate)} className={`px-4 py-2 rounded-md ${animate ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                {animate ? 'Disable Animation' : 'Enable Animation'}
                            </button>
                            <button onClick={() => setDisabled(!disabled)} className={`px-4 py-2 rounded-md ${disabled ? 'bg-teal-500' : 'bg-gray-700'} text-white`}>
                                {disabled ? 'Enabled' : 'Disabled'}
                            </button>
                        </div>
                    </div>

                    {/* Code Preview with Copy Button */}
                    <div className="bg-gray-800 p-6 overflow-y-scroll rounded-md shadow-md relative flex flex-col">
                        <h2 className="text-3xl font-bold mb-8 flex items-center">
                            <FaCode className="mr-3" /> Code Preview
                        </h2>

                        {/* Button Preview at the Top */}
                        <div className="mb-6">
                            <Button variant={variant} size={size} shape={shape} disabled={disabled} animate={animate}>
                                {size === 'large' ? 'Large Button' : size === 'small' ? 'Small Button' : 'Medium Button'}
                            </Button>
                        </div>

                        {/* Copy Button */}
                        <button
                            onClick={handleCopyCode}
                            className="absolute top-4 right-4 p-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                        >
                            {copied ? <span className="text-green-400">Copied!</span> : <FaCopy />}
                        </button>

                        {/* Code Block */}
                        <pre className="bg-gray-800 p-4 rounded-md text-gray-200 whitespace-pre-wrap">
                            <code>{generateCode()}</code>
                        </pre>
                    </div>
                </div>

                {/* Props Documentation */}
                <div className="mb-12 mt-12">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                        <FaCode className="mr-3" /> Props
                    </h2>
                    <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-300">Prop</th>
                                <th className="px-4 py-2 text-left text-gray-300">Type</th>
                                <th className="px-4 py-2 text-left text-gray-300">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2 text-gray-400">variant</td>
                                <td className="px-4 py-2 text-gray-400">"primary" | "secondary" | "gradient"</td>
                                <td className="px-4 py-2 text-gray-400">Defines the button style.</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2 text-gray-400">size</td>
                                <td className="px-4 py-2 text-gray-400">"small" | "medium" | "large"</td>
                                <td className="px-4 py-2 text-gray-400">Controls the button size.</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2 text-gray-400">shape</td>
                                <td className="px-4 py-2 text-gray-400">"rounded" | "pill" | "square"</td>
                                <td className="px-4 py-2 text-gray-400">Defines the button shape.</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2 text-gray-400">icon</td>
                                <td className="px-4 py-2 text-gray-400">ReactNode</td>
                                <td className="px-4 py-2 text-gray-400">Optional icon to be displayed inside the button.</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2 text-gray-400">disabled</td>
                                <td className="px-4 py-2 text-gray-400">boolean</td>
                                <td className="px-4 py-2 text-gray-400">Disables the button.</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2 text-gray-400">onClick</td>
                                <td className="px-4 py-2 text-gray-400">{`() => void`}</td>
                                <td className="px-4 py-2 text-gray-400">Callback function when button is clicked.</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2 text-gray-400">children</td>
                                <td className="px-4 py-2 text-gray-400">ReactNode</td>
                                <td className="px-4 py-2 text-gray-400">Content inside the button.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ButtonComponentPage;
