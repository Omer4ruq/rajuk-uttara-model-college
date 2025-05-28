import React from 'react';
import tamjiddun from '../../../public/images/wing/tamjiddun.jpg';
const VPExam = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xl mx-auto text-center">
                   {/* Image Section */}
                   <div className="flex justify-center mb-4">
                       <img 
                           src={tamjiddun} 
                           alt="দেওয়ান মোঃ তমজিদুজ্জামান" 
                           className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
                       />
                   </div>
       
                   {/* Text Section */}
                   <h1 className="text-2xl font-bold text-gray-800 mb-2">দেওয়ান মোঃ তমজিদুজ্জামান</h1>
                   <p className="text-lg text-gray-600">উপাধ্যক্ষ, প্ররীক্ষা ও সমন্বয়</p>
               </div>
    );
};

export default VPExam;