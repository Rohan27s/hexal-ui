import React from 'react';
var PageSection = function (_a) {
    var title = _a.title, children = _a.children;
    return (<div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {children}
        </div>);
};
export default PageSection;
