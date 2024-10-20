'use client';
import React, { useState } from 'react';
import Playground from '../components/DetailsPageComponents/Playground';
import CodePreview from '../components/DetailsPageComponents/CodePreview';
import PropsTable from '../components/DetailsPageComponents/PropsTable';
import HeadingSection from '../components/DetailsPageComponents/HeadingSection';
var ButtonComponentPage = function () {
    var _a = useState('primary'), variant = _a[0], setVariant = _a[1];
    var _b = useState('medium'), size = _b[0], setSize = _b[1];
    var _c = useState('rounded'), shape = _c[0], setShape = _c[1];
    var _d = useState(false), disabled = _d[0], setDisabled = _d[1];
    var _e = useState(false), animate = _e[0], setAnimate = _e[1];
    var _f = useState(false), copied = _f[0], setCopied = _f[1];
    var generateCode = function () {
        var variantCode = "variant=\"".concat(variant, "\"");
        var sizeCode = "size=\"".concat(size, "\"");
        var shapeCode = "shape=\"".concat(shape, "\"");
        var disabledCode = disabled ? "disabled={true}" : '';
        var animateCode = animate ? "animate={true}" : '';
        return "<Button ".concat(variantCode, " ").concat(sizeCode, " ").concat(shapeCode, " ").concat(disabledCode, " ").concat(animateCode, "><FaShoppingCart /></Button>");
    };
    var handleCopyCode = function () {
        navigator.clipboard.writeText(generateCode());
        setCopied(true);
        setTimeout(function () { return setCopied(false); }, 2000);
    };
    var propsData = [
        { prop: 'variant', type: '"primary" | "secondary" | "gradient"', description: 'Defines the button style.' },
        { prop: 'size', type: '"small" | "medium" | "large"', description: 'Controls the button size.' },
        { prop: 'shape', type: '"rounded" | "pill" | "square"', description: 'Defines the button shape.' },
        { prop: 'icon', type: 'ReactNode', description: 'Optional icon to be displayed inside the button.' },
        { prop: 'disabled', type: 'boolean', description: 'Disables the button.' },
        { prop: 'onClick', type: '() => void', description: 'Callback function when button is clicked.' },
    ];
    return (<section className="py-28 px-8 bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto">
                
                <HeadingSection title="Button Component" subtitle="The Button component is highly customizable. Try out the available props to see how the button behaves."/>

                
                <div className="grid my-12 grid-cols-1 md:grid-cols-2 gap-8">
                    <Playground variant={variant} size={size} shape={shape} disabled={disabled} animate={animate} setVariant={setVariant} setSize={setSize} setShape={setShape} setDisabled={setDisabled} setAnimate={setAnimate}/>
                    <CodePreview code={generateCode()} copied={copied} handleCopy={handleCopyCode}/>
                </div>

                
                <PropsTable propsData={propsData}/>
            </div>
        </section>);
};
export default ButtonComponentPage;
