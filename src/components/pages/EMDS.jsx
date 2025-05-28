import React from 'react';
import nasimunnar from '../../../public/images/wing/nasimunnar.jpg';
const EMDS = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xl mx-auto text-center">
                         {/* Image Section */}
                         <div className="flex justify-center mb-4">
                             <img 
                                 src={nasimunnar} 
                                 alt="মোছাম্মাৎ নাছিমুন নাহার খান" 
                                 className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
                             />
                         </div>
             
                         {/* Text Section */}
                         <h1 className="text-2xl font-bold text-gray-800 mb-2">মোছাম্মাৎ নাছিমুন নাহার খান</h1>
                         <p className="text-lg text-gray-600">উপাধ্যক্ষ, ইংরেজি মাধ্যম-দিবা শাখা</p>
                     </div>
    );
};

export default EMDS;