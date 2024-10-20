'use client';
import React, { useState } from 'react';
import Playground from '../../../components/DetailsPageComponents/Playground';
import CodePreview from '../../../components/DetailsPageComponents/CodePreview';
import PropsTable from '../../../components/DetailsPageComponents/PropsTable';
import HeadingSection from '../../../components/DetailsPageComponents/HeadingSection';

const ButtonComponentPage = () => {
    const [variant, setVariant] = useState<'primary' | 'secondary' | 'gradient'>('primary');
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [shape, setShape] = useState<'rounded' | 'pill' | 'square'>('rounded');
    const [disabled, setDisabled] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [copied, setCopied] = useState(false);

    const generateCode = () => {
        const variantCode = `variant="${variant}"`;
        const sizeCode = `size="${size}"`;
        const shapeCode = `shape="${shape}"`;
        const disabledCode = disabled ? `disabled={true}` : '';
        const animateCode = animate ? `animate={true}` : '';
        return `<Button ${variantCode} ${sizeCode} ${shapeCode} ${disabledCode} ${animateCode}><FaShoppingCart /></Button>`;
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(generateCode());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const propsData = [
        { prop: 'variant', type: '"primary" | "secondary" | "gradient"', description: 'Defines the button style.' },
        { prop: 'size', type: '"small" | "medium" | "large"', description: 'Controls the button size.' },
        { prop: 'shape', type: '"rounded" | "pill" | "square"', description: 'Defines the button shape.' },
        { prop: 'icon', type: 'ReactNode', description: 'Optional icon to be displayed inside the button.' },
        { prop: 'disabled', type: 'boolean', description: 'Disables the button.' },
        { prop: 'onClick', type: '() => void', description: 'Callback function when button is clicked.' },
    ];

    return (
        <section className="py-28 px-8 bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto">
                {/* Heading Section */}
                <HeadingSection
                    title="Button Component"
                    subtitle="The Button component is highly customizable. Try out the available props to see how the button behaves."
                />

                {/* Playground and Code Preview */}
                <div className="grid my-12 grid-cols-1 md:grid-cols-2 gap-8">
                    <Playground
                        variant={variant}
                        size={size}
                        shape={shape}
                        disabled={disabled}
                        animate={animate}
                        setVariant={setVariant}
                        setSize={setSize}
                        setShape={setShape}
                        setDisabled={setDisabled}
                        setAnimate={setAnimate}
                    />
                    <CodePreview code={generateCode()} copied={copied} handleCopy={handleCopyCode} />
                </div>

                {/* Props Documentation */}
                <PropsTable propsData={propsData} />
            </div>
        </section>
    );
};

export default ButtonComponentPage;