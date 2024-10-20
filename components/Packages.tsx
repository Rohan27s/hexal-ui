'use client';
import { useState } from 'react';
import { FaRegCheckCircle, FaGem, FaRocket } from 'react-icons/fa'; // Updated icons for Basic and Premium plans

const Packages = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

    const handleBillingChange = (cycle: 'monthly' | 'yearly') => {
        setBillingCycle(cycle);
    };

    const prices = {
        basic: { yearly: 'Free', monthly: 'Free' },
        premium: { yearly: '$99', monthly: '$9.99' },
        enterprise: { yearly: 'Contact us', monthly: 'Contact us' },
    };

    const plans = [
        {
            title: 'Basic',
            icon: <FaRegCheckCircle className="text-teal-400 text-3xl mr-3" />,
            price: prices.basic,
            description: 'Ideal for personal projects.',
            features: ['✔️ 10 requests per day', '✔️ Free trial access', '✔️ Community support'],
            buttonText: 'Get Started',
            borderColor: 'hover:border-gradient-to-r hover:from-teal-600 hover:to-blue-500',
        },
        {
            title: 'Premium',
            icon: <FaGem className="text-yellow-300 text-3xl mr-3" />,
            price: prices.premium,
            description: 'For professionals and growing teams.',
            features: ['✔️ Unlimited components', '✔️ Advanced features', '✔️ Priority support'],
            buttonText: 'Get Started',
            highlight: true,
            borderColor: 'hover:border-gradient-to-r hover:from-purple-600 hover:to-indigo-600',
            badge: 'Most Popular',
        },
        {
            title: 'Enterprise',
            icon: <FaRocket className="text-blue-400 text-3xl mr-3" />,
            price: prices.enterprise,
            description: 'Perfect for large organizations.',
            features: ['✔️ Custom deployment', '✔️ Dedicated support', '✔️ Advanced integrations'],
            buttonText: 'Contact Sales',
            borderColor: 'hover:border-gradient-to-r hover:from-blue-500 hover:to-teal-600',
        },
    ];

    return (
        <section id='pricing' className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background gradient circles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-600 via-blue-800 to-purple-800 opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-700 opacity-10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <h2 className="text-center text-5xl font-bold tracking-wide mb-8 text-gray-100">Choose Your Plan</h2>
                <p className="text-center text-lg text-gray-300 mb-12">Unlock the full potential of HexaUI</p>

                {/* Billing Cycle Toggle */}
                <div className="flex justify-center mb-12 relative">
                    <div className="inline-flex items-center relative p-1 bg-gray-800 rounded-full shadow-lg overflow-hidden">
                        {/* Sliding Background */}
                        <div
                            className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-teal-600 to-blue-500 rounded-full transition-transform duration-300 ease-in-out ${billingCycle === 'monthly' ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        ></div>

                        {['monthly', 'yearly'].map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => handleBillingChange(cycle as 'monthly' | 'yearly')}
                                className={`px-6 py-2 z-10 font-medium text-lg relative rounded-full transition-all duration-300 focus:outline-none ${billingCycle === cycle ? 'text-white' : 'text-gray-300'
                                    }`}
                                style={{ minWidth: '130px' }} // Ensures consistent button size
                            >
                                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-transparent ${plan.borderColor}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                                    {plan.badge}
                                </div>
                            )}
                            <div className="flex items-center mb-4">
                                {plan.icon}
                                <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors text-teal-400">
                                    {plan.title}
                                </h3>
                            </div>
                            <p className="text-5xl font-bold mb-4 text-gray-100">{plan.price[billingCycle]}</p>
                            <p className="text-lg text-gray-400 mb-6">{plan.description}</p>
                            <ul className="text-gray-300 text-sm space-y-3 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            {billingCycle === 'yearly' && plan.title === 'Premium' && (
                                <p className="text-sm text-gray-300 mb-4">Save 20% on yearly billing!</p>
                            )}
                            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
