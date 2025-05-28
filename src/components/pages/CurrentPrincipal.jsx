import React from 'react';
import headMasterImg from '../../../public/images/head-master.jpeg';

const CurrentPrincipal = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            {/* Image Section */}
            <div className="flex justify-center mb-4">
                <img 
                    src={headMasterImg} 
                    alt="Head Master Image" 
                    className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
                />
            </div>

            {/* Text Section */}
            <div className="text-gray-800 text-lg leading-relaxed">
                <h2 className="text-2xl font-bold text-center mb-2">Brigadier General Md Enamul Islam, psc, PhD</h2>
                <p className="text-sm text-gray-600 text-center mb-6">Principal of 
Rajuk Uttara Model College</p>
                
                <p className="text-justify">
                    Brigadier General Md Enamul Islam has had a long and illustrious career in the Bangladesh Army spanning over twenty-nine years. 
                    His distinguished career is a unique blend of Command, Staff, and Instructional appointments at various levels, including training institutions like JCO/NCO Academy and National Defence College.
                </p>
                <p className="mt-4">
                    He has participated in UN assignments in DR Congo and Sudan. His academic achievements include multiple Master's degrees in Defense Studies, Finance, Marketing, and Supply Chain Management, alongside a PhD from Limkokwing University of Creative Technology, Malaysia.
                </p>
                <p className="mt-4">
                    He is an avid researcher, keynote speaker, and session chair at various international conferences. Outside his professional life, he enjoys golf, traveling, reading, and conducting research.
                </p>
            </div>
        </div>
    );
};

export default CurrentPrincipal;