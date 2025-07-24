import React, { useEffect } from 'react';
import 'animate.css';

const SubjectTaught = () => {
    const subjects = {
        'IX-X': [
            'Physics',
            'Chemistry',
            'Mathematics',
            'Biology',
            'Information and Communication Technology',
            'Higher Mathematics',
            'Science',
            'Accounting',
            'Finance and Banking',
            'Business Entrepreneurship',
            'Bangladesh and Global Studies',
            'Career Education',
            'Agricultural Studies',
            'Home Science',
        ],
        'XI-XII': [
            'Physics',
            'Chemistry',
            'Biology',
            'Higher Mathematics',
            'Information and Communication Technology',
            'Statistics',
            'Accounting',
            'Business Organization & Management',
            'Finance, Banking and Insurance',
            'Economics',
            'History',
            'Psychology',
            'Civics & Good Governance',
            'Home Science',
            'Agricultural Studies',
        ],
    };

    useEffect(() => {
        // Apply staggered animation delays
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.1}s`;
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-secondary py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 animate__animated animate__fadeInDown">
                    <div className="inline-block">
                        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            Subjects Taught
                        </h1>
                        <div className="w-32 h-1 bg-white/60 mx-auto mb-6 rounded-full shadow-sm"></div>
                        <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                            Comprehensive Academic Curriculum Designed for Excellence
                        </p>
                    </div>
                </div>

                {/* Subjects Section - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {Object.entries(subjects).map(([grade, subjectList], idx) => (
                        <div
                            key={grade}
                            className="group relative animate__animated animate__slideInUp"
                            style={{ animationDelay: `${idx * 0.3}s` }}
                        >
                            {/* Card with enhanced glassmorphism */}
                            <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 hover:bg-white/20 hover:border-white/40">
                                {/* Gradient accent with matching theme */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-white/60 rounded-t-2xl shadow-sm"></div>
                                
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 shadow-xl border border-white/30">
                                        <span className="text-white font-normal text-xl drop-shadow-md">
                                            {grade.includes('IX') ? '9-10' : '11-12'}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-normal text-white mb-2 drop-shadow-md">
                                        Classes {grade}
                                    </h2>
                                    <div className="w-20 h-0.5 bg-white/50 mx-auto rounded-full"></div>
                                </div>

                                {/* Subjects Grid */}
                                <div className="grid grid-cols-1 gap-3">
                                    {subjectList.map((subject, subIdx) => (
                                        <div
                                            key={subIdx}
                                            className="group/item relative flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white/20 hover:border-white/40 animate__animated animate__fadeInLeft"
                                            style={{ animationDelay: `${subIdx * 0.05}s` }}
                                        >
                                            {/* Subject Icon */}
                                            <div className="flex-shrink-0 w-3 h-3 bg-white/80 rounded-full mr-4 group-hover/item:scale-125 group-hover/item:bg-white transition-all duration-300 shadow-sm"></div>
                                            
                                            {/* Subject Name */}
                                            <span className="text-white/90 font-medium text-base leading-relaxed group-hover/item:text-white transition-colors duration-300 drop-shadow-sm">
                                                {subject}
                                            </span>

                                            {/* Hover Effect Border */}
                                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/item:border-white/30 transition-all duration-300"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Subject Count Badge */}
                                <div className="absolute -top-3 -right-3 bg-white backdrop-blur-sm border border-white/30 text-primary text-xs font-normal px-3 py-1 rounded-full shadow-xl">
                                    {subjectList.length} Subjects
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                {/* <div className="bg-white/15 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="group">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
                                <span className="text-white font-bold text-2xl drop-shadow-md">
                                    {subjects['IX-X'].length + subjects['XI-XII'].length}
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">Total Subjects</h3>
                            <p className="text-white/80 text-sm drop-shadow-sm">Comprehensive curriculum coverage</p>
                        </div>

                        <div className="group">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
                                <span className="text-white font-bold text-2xl drop-shadow-md">2</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">Grade Levels</h3>
                            <p className="text-white/80 text-sm drop-shadow-sm">Secondary & Higher Secondary</p>
                        </div>

                        <div className="group">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
                                <span className="text-white font-bold text-2xl drop-shadow-md">100%</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">Quality Education</h3>
                            <p className="text-white/80 text-sm drop-shadow-sm">Excellence in every subject</p>
                        </div>
                    </div>
                </div> */}

                {/* Footer Note */}
                <div className="text-center animate__animated animate__fadeIn animate__delay-2s">
                    <div className="inline-block bg-white/15 backdrop-blur-xl rounded-full px-8 py-4 shadow-2xl border border-white/30 hover:bg-white/20 transition-all duration-300">
                        <p className="text-white font-medium drop-shadow-sm">
                            🎓 Committed to Delivering Excellence in Education
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectTaught;