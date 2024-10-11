// components/PageSection.tsx
import React from 'react';

interface PageSectionProps {
    title: string;
    children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ title, children }) => {
    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {children}
        </div>
    );
};

export default PageSection;
