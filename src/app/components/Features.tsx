import { FaCogs, FaRocket, FaPalette } from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion';
import MotionSection from './MotionSection'; // Reusable motion wrapper

const Features = () => {
    return (
        <MotionSection>

            <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16  text-white">
                <div className="group relative p-8 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="flex items-center mb-4">
                        <FaCogs className="text-teal-400 text-4xl mr-4 group-hover:text-teal-300 transition-colors duration-300" />
                        <h3 className="font-semibold text-xl text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                            Modular Components
                        </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        HexaUI offers a wide range of fully customizable, reusable components to speed up your development.
                    </p>
                </div>

                <div className="group relative p-8 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="flex items-center mb-4">
                        <FaRocket className="text-teal-400 text-4xl mr-4 group-hover:text-teal-300 transition-colors duration-300" />
                        <h3 className="font-semibold text-xl text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                            Lightweight & Fast
                        </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Built for performance, HexaUI minimizes bundle size while ensuring fast load times.
                    </p>
                </div>

                <div className="group relative p-8 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="flex items-center mb-4">
                        <FaPalette className="text-teal-400 text-4xl mr-4 group-hover:text-teal-300 transition-colors duration-300" />
                        <h3 className="font-semibold text-xl text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                            Customizable Themes
                        </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Easily customize and extend your theme to match your brand's unique style.
                    </p>
                </div>
            </div>
        </MotionSection>
    );
};

export default Features;
