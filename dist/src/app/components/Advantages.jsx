'use client';
import { FaCogs, FaRocket, FaAccessibleIcon, FaPalette, FaCodeBranch, FaBolt } from 'react-icons/fa';
import MotionSection from './MotionSection';
var Advantages = function () {
    return (<MotionSection>
            <section className="py-20 bg-gray-900 text-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 opacity-20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-108 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl"></div>
                </div>
                <h2 className="text-center text-3xl font-bold mb-10 tracking-wide">Why Choose HexaUI?</h2>
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    HexaUI is a modular, customizable component library built with performance, accessibility, and scalability in mind.
                    Whether you're building a small project or scaling a large application, HexaUI gives you the tools to create seamless user experiences.
                </p>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    
                    <div className="relative p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out row-span-2">
                        <FaCogs className="text-5xl text-purple-500 mb-4"/>
                        <h3 className="font-bold text-xl mb-4">Modular & Customizable</h3>
                        <p className="text-gray-400">
                            HexaUI provides a wide range of modular and reusable components that can be customized to suit your brand and project needs, giving you full control over your UI.
                        </p>
                        
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-10"></div>
                    </div>

                    
                    <div className="relative p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <FaRocket className="text-5xl text-purple-500 mb-4"/>
                        <h3 className="font-bold text-xl mb-4">Lightweight & Fast</h3>
                        <p className="text-gray-400">
                            Built with performance in mind, HexaUI ensures your application remains lightweight and fast, even as you add more components.
                        </p>
                        
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500 to-teal-500 opacity-10"></div>
                    </div>

                    
                    <div className="relative p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out row-span-2">
                        <FaAccessibleIcon className="text-5xl text-purple-500 mb-4"/>
                        <h3 className="font-bold text-xl mb-4">Accessibility First</h3>
                        <p className="text-gray-400">
                            HexaUI components are built with accessibility in mind, ensuring your app is usable by everyone, regardless of ability, right out of the box.
                        </p>
                        
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-teal-500 to-green-500 opacity-10"></div>
                    </div>

                    
                    <div className="relative p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <FaPalette className="text-5xl text-purple-500 mb-4"/>
                        <h3 className="font-bold text-xl mb-4">Beautifully Designed</h3>
                        <p className="text-gray-400">
                            Each component is thoughtfully designed to provide a clean, modern aesthetic while still being easy to customize for your specific design needs.
                        </p>
                        
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-pink-500 to-purple-500 opacity-10"></div>
                    </div>

                    
                    <div className="relative p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <FaCodeBranch className="text-5xl text-purple-500 mb-4"/>
                        <h3 className="font-bold text-xl mb-4">Easy Integration</h3>
                        <p className="text-gray-400">
                            Integrate HexaUI components seamlessly with your existing projects, whether you're using React, Next.js, or other JavaScript frameworks.
                        </p>
                        
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-orange-500 to-yellow-500 opacity-10"></div>
                    </div>

                    
                    <div className="relative p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out col-span-2">
                        <FaBolt className="text-5xl text-purple-500 mb-4"/>
                        <h3 className="font-bold text-xl mb-4">Blazing Fast Prototyping</h3>
                        <p className="text-gray-400">
                            Build and prototype your web applications quickly with HexaUI's ready-to-use components, accelerating your development process.
                        </p>
                        
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-teal-500 to-blue-500 opacity-10"></div>
                    </div>
                </div>
            </section>
        </MotionSection>);
};
export default Advantages;
