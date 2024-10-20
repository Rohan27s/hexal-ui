import React from 'react';
import { FaCopy } from 'react-icons/fa';
var CodePreview = function (_a) {
    var code = _a.code, copied = _a.copied, handleCopy = _a.handleCopy;
    return (<div className="bg-gray-800 p-6 rounded-md shadow-md relative flex flex-col">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
            Code Preview
        </h2>
        <button onClick={handleCopy} className="absolute top-4 right-4 p-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition">
            {copied ? <span className="text-green-400">Copied!</span> : <FaCopy />}
        </button>
        <pre className="bg-gray-800 p-4 rounded-md text-gray-200 whitespace-pre-wrap">
            <code>{code}</code>
        </pre>
    </div>);
};
export default CodePreview;
