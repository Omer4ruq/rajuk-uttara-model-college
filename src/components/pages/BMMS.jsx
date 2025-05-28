import React from 'react';
import matlubur from '../../../public/images/wing/matlubur.jpg';

const BMMS = () => {
    return (
         <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xl mx-auto text-center">
                   {/* Image Section */}
                   <div className="flex justify-center mb-4">
                       <img 
                           src={matlubur} 
                           alt="মোঃ মাতলুবুর রহমান" 
                           className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
                       />
                   </div>
       
                   {/* Text Section */}
                   <h1 className="text-2xl font-bold text-gray-800 mb-2">মোঃ মাতলুবুর রহমান</h1>
                   <p className="text-lg text-gray-600">উপাধ্যক্ষ, বাংলা মাধ্যম-প্রভাতি শাখা</p>
               </div>
    );
};

export default BMMS;