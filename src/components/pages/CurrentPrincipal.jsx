import React, { useEffect } from 'react';
import 'animate.css';
import headMasterImg from '../../../src/assets/images/head-master.jpeg';

const CurrentPrincipal = () => {
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
                                        src={headMasterImg}
                                        alt="Brigadier General Md Enamul Islam"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-full border-2 border-slate-300 opacity-20"></div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Information with Slide-Up Animation */}
                    <div className="pt-44 pb-8 px-8 text-center animate__animated animate__slideInUp">
                        <h1 className="text-4xl font-bold text-gray-800 mb-3 transform transition-transform duration-300 hover:translate-y-1">
                            Brigadier General Md Enamul Islam, <span className="text-primary">psc, PhD</span>
                        </h1>
                        <p className="text-xl text-slate-600 font-semibold mb-2">
                            Principal, Rajuk Uttara Model College
                        </p>
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 pb-3 border-b-2 border-slate-200 text-start">
                                Professional Biography
                            </h2>
                        </div>
                        <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                            <p>
                                Brigadier General Md Enamul Islam has had a long and illustrious career in the Bangladesh Army spanning over twenty-nine years. 
                                His distinguished career is a unique blend of Command, Staff, and Instructional appointments at various levels, including training institutions like JCO/NCO Academy and National Defence College.
                            </p>
                            <p>
                                He has participated in UN assignments in DR Congo and Sudan. His academic achievements include multiple Master's degrees in Defense Studies, Finance, Marketing, and Supply Chain Management, alongside a PhD from Limkokwing University of Creative Technology, Malaysia.
                            </p>
                            <p>
                                He is an avid researcher, keynote speaker, and session chair at various international conferences. Outside his professional life, he enjoys golf, traveling, reading, and conducting research.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Note with Fade-In Animation */}
                <div className="text-center mt-8 animate__animated animate__fadeIn animate__delay-2s">
                    <p className="text-sm text-gray-500 transform transition-transform duration-300 hover:translate-y-1">
                        Dedicated to Excellence in Academic Leadership and Education
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CurrentPrincipal;