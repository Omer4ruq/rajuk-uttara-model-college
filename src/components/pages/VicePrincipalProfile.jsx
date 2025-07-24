import React, { useEffect } from 'react';
import 'animate.css';

const VicePrincipalProfile = ({ name, title, additionalTitle, image, biography, timeline }) => {
    useEffect(() => {
        // Ensure animate.css is applied after component mounts
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }, []);

    return (
        <div className="min-h-screen py-12 px-4 bg-gray-100">
            <div className="max-w-4xl mx-auto">
                {/* Header Section with Fade-In Animation */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 animate__animated animate__fadeIn">
                    <div className="bg-gradient-to-r from-primary to-secondary h-32 relative">
                        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
                            <div className="relative group">
                                <div className="w-52 h-52 rounded-full border-6 border-blue-600 shadow-xl overflow-hidden bg-white flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105 animate__animated animate__zoomIn">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-full border-2 border-slate-300 opacity-20"></div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Information with Slide-Up Animation */}
                    <div className="pt-44 pb-8 px-8 text-center animate__animated animate__slideInUp">
                        <h1 className="text-4xl font-bold text-gray-800 mb-3 transform transition-transform duration-300 hover:translate-y-1">{name}</h1>
                        <p className="text-xl text-slate-600 font-semibold mb-2">{title}</p>
                        {additionalTitle && (
                            <p className="text-lg text-gray-500 mb-8 animate__animated animate__fadeIn animate__delay-1s">{additionalTitle}</p>
                        )}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 pb-3 border-b-2 border-slate-200 text-start">
                                Professional Biography
                            </h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-justify">{biography}</p>
                    </div>
                </div>

                {/* Academic Career Timeline with Slide-In Animation */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 pb-3 border-b-2 border-slate-200 animate__animated animate__fadeIn">
                            Academic Career Progression
                        </h3>
                    </div>
                    <div className="space-y-6">
                        {timeline.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start border-l-4 border-slate-300 pl-6 pb-6 animate__animated animate__slideInLeft"
                                style={{ animationDelay: `${idx * 0.3}s` }}
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center -ml-10 border-4 border-white shadow-sm transform transition-transform duration-300 hover:scale-110">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className={`bg-slate-50 p-5 rounded-lg border ${idx === timeline.length - 1 ? 'border-2 border-slate-300' : ''} transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1`}>
                                        <h4 className="font-bold text-lg text-gray-800 mb-1">{item.role}</h4>
                                        <p className="text-slate-600 font-medium text-sm mb-2">{item.date}</p>
                                        <p className="text-gray-700 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note with Fade-In Animation */}
                <div className="text-center mt-8 animate__animated animate__fadeIn animate__delay-2s">
                    <p className="text-sm text-gray-500 transform transition-transform duration-300 hover:translate-y-1">
                        Dedicated to Excellence in {title.split(',')[1]?.trim() || title} Education and Academic Leadership
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VicePrincipalProfile;