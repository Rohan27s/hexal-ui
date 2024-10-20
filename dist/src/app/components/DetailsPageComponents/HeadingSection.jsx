import React from 'react';
var HeadingSection = function (_a) {
    var title = _a.title, subtitle = _a.subtitle;
    return (<div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-300 leading-relaxed">{subtitle}</p>}
    </div>);
};
export default HeadingSection;
