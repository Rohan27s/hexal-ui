import React from 'react';
var PropsTable = function (_a) {
    var propsData = _a.propsData;
    return (<div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Props</h2>
        <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
            <thead>
                <tr>
                    <th className="px-4 py-2 text-left text-gray-300">Prop</th>
                    <th className="px-4 py-2 text-left text-gray-300">Type</th>
                    <th className="px-4 py-2 text-left text-gray-300">Description</th>
                </tr>
            </thead>
            <tbody>
                {propsData.map(function (prop) { return (<tr className="border-b border-gray-700" key={prop.prop}>
                        <td className="px-4 py-2 text-gray-400">{prop.prop}</td>
                        <td className="px-4 py-2 text-gray-400">{prop.type}</td>
                        <td className="px-4 py-2 text-gray-400">{prop.description}</td>
                    </tr>); })}
            </tbody>
        </table>
    </div>);
};
export default PropsTable;
