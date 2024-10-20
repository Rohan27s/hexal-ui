'use client';
import { useState } from 'react';
import Link from 'next/link';
var componentsData = [
    {
        id: 1,
        name: 'Button',
        category: 'Forms',
        description: 'A simple button component.',
        image: '/images/button.png',
        link: '/button'
    },
    {
        id: 2,
        name: 'Card',
        category: 'Layout',
        description: 'A flexible card component.',
        image: '/images/card.png',
        link: '/button'
    },
    {
        id: 3,
        name: 'Modal',
        category: 'Overlays',
        description: 'A pop-up modal component.',
        image: '/images/modal.png',
        link: '/button'
    },
];
var categories = ['All', 'Forms', 'Layout', 'Overlays', 'Navigation'];
var ComponentGallery = function () {
    var _a = useState(''), searchQuery = _a[0], setSearchQuery = _a[1];
    var _b = useState('All'), selectedCategory = _b[0], setSelectedCategory = _b[1];
    var filteredComponents = componentsData.filter(function (component) {
        return (selectedCategory === 'All' || component.category === selectedCategory) &&
            component.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return (<section className="py-36 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4">
                
                <h1 className="text-4xl font-extrabold mb-8 text-center">Component Gallery</h1>

                
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    
                    <input type="text" placeholder="Search components..." className="w-full md:w-1/2 p-3 rounded bg-gray-800 text-white placeholder-gray-400 mb-4 md:mb-0" value={searchQuery} onChange={function (e) { return setSearchQuery(e.target.value); }}/>

                    
                    <div className="flex space-x-4 overflow-x-auto">
                        {categories.map(function (category) { return (<button key={category} className={"px-4 py-2 rounded-full ".concat(selectedCategory === category
                ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white'
                : 'bg-gray-700 text-gray-400')} onClick={function () { return setSelectedCategory(category); }}>
                                {category}
                            </button>); })}
                    </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredComponents.map(function (component) { return (<Link key={component.id} href={component.link}>
                            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer">
                                
                                <img src={component.image} alt={component.name} className="w-full h-40 object-cover rounded-lg mb-4"/>

                                
                                <h3 className="text-2xl font-bold mb-2">{component.name}</h3>
                                <p className="text-gray-400 mb-4">{component.description}</p>
                                <button className="px-4 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform">
                                    View Details
                                </button>
                            </div>
                        </Link>); })}

                    
                    {filteredComponents.length === 0 && (<p className="col-span-3 text-center text-gray-400">No components found.</p>)}
                </div>
            </div>
        </section>);
};
export default ComponentGallery;
