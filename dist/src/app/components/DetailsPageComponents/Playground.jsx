import React from 'react';
import Button from '../ButtonComponents/Button';
var Playground = function (_a) {
    var variant = _a.variant, size = _a.size, shape = _a.shape, disabled = _a.disabled, animate = _a.animate, setVariant = _a.setVariant, setSize = _a.setSize, setShape = _a.setShape, setDisabled = _a.setDisabled, setAnimate = _a.setAnimate;
    return (<div className="bg-gray-800 p-6 rounded-md shadow-md overflow-auto">
        <h2 className="text-3xl font-bold mb-4">Live Playground</h2>
        <p className="text-lg text-gray-300 mb-6">Try out the button component with different options:</p>

        <div className="mb-6">
            <Button variant={variant} size={size} shape={shape} disabled={disabled} animate={animate}>
                {size === 'large' ? 'Large Button' : size === 'small' ? 'Small Button' : 'Medium Button'}
            </Button>
        </div>

        
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Variants</h3>
            <div className="flex space-x-4">
                <button onClick={function () { return setVariant('primary'); }} className={"px-4 py-2 rounded ".concat(variant === 'primary' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Primary</button>
                <button onClick={function () { return setVariant('secondary'); }} className={"px-4 py-2 rounded ".concat(variant === 'secondary' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Secondary</button>
                <button onClick={function () { return setVariant('gradient'); }} className={"px-4 py-2 rounded ".concat(variant === 'gradient' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Gradient</button>
            </div>
        </div>

        
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Sizes</h3>
            <div className="flex space-x-4">
                <button onClick={function () { return setSize('small'); }} className={"px-4 py-2 rounded ".concat(size === 'small' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Small</button>
                <button onClick={function () { return setSize('medium'); }} className={"px-4 py-2 rounded ".concat(size === 'medium' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Medium</button>
                <button onClick={function () { return setSize('large'); }} className={"px-4 py-2 rounded ".concat(size === 'large' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Large</button>
            </div>
        </div>

        
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Shapes</h3>
            <div className="flex space-x-4">
                <button onClick={function () { return setShape('rounded'); }} className={"px-4 py-2 rounded ".concat(shape === 'rounded' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Rounded</button>
                <button onClick={function () { return setShape('pill'); }} className={"px-4 py-2 rounded ".concat(shape === 'pill' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Pill</button>
                <button onClick={function () { return setShape('square'); }} className={"px-4 py-2 rounded ".concat(shape === 'square' ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>Square</button>
            </div>
        </div>

        
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Additional Options</h3>
            <div className="flex space-x-4">
                <button onClick={function () { return setAnimate(!animate); }} className={"px-4 py-2 rounded ".concat(animate ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>{animate ? 'Disable Animation' : 'Enable Animation'}</button>
                <button onClick={function () { return setDisabled(!disabled); }} className={"px-4 py-2 rounded ".concat(disabled ? 'bg-teal-500' : 'bg-gray-700', " text-white")}>{disabled ? 'Enabled' : 'Disabled'}</button>
            </div>
        </div>
    </div>);
};
export default Playground;
