import React from 'react';

const exPrincipals = [
    { name: "Col Nurun Nabi", img: "../../../src/assets/images/ex-head-masters/nurun-nabi.jpeg", degree: "(Retd)" },
    { name: "Brig Gen Sohrab Ali Talukder", img: "../../../src/assets/images/ex-head-masters/shorab-ali-talukdar.jpeg", degree: "(Retd)" },
    { name: "Col Mokarrom Ali Khan", img: "../../../src/assets/images/ex-head-masters/mokarram-ali-khan.jpeg", degree: "(Retd)" },
    { name: "BRig Gen A K M Rezaul Karim", img: "../../../src/assets/images/ex-head-masters/rejaul-karim.jpeg", degree: "(Retd)" },
    { name: "Brig Gen A S M Musfiqur Rahman", img: "../../../src/assets/images/ex-head-masters/mushfiq-ur-rahman.jpeg", degree: "psc (Retd)" },
    { name: "Brig Gen Mohd. Golam Hossain Sarker", img: "../../../src/assets/images/ex-head-masters/golam-hossan-sarkar.jpeg", degree: "psc (Retd)" },
    { name: "Brig Gen Imamul Huda", img: "../../../src/assets/images/ex-head-masters/imamul-huda.jpeg", degree: "psc (Retd)" },
    { name: "Brig Gen M M Salehin", img: "../../../src/assets/images/ex-head-masters/m-m-salehin.jpeg", degree: "ndc, psc (Retd)" },
    { name: "Brig Gen Kazi Shawkat Alam", img: "../../../src/assets/images/ex-head-masters/Kazi-Shawkat-alam.jpeg", degree: "ndc, psc (Retd)" },
    { name: "Brig Gen Tayef Ul Haq", img: "../../../src/assets/images/ex-head-masters/tayef-ul-haq.jpeg", degree: "ndc, psc, জি" },
    { name: "Brig Gen A. S. M. Bahauddin", img: "../../../src/assets/images/ex-head-masters/a-s-m-bahauddin.jpeg", degree: "sup, spp, ndc, afwc, psc, g" },
];


const ExPrincipals = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Ex-Principals of the College</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {exPrincipals.map((principal, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                        <img 
                            src={principal.img} 
                            alt={principal.name} 
                            className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg mb-4"
                        />
                        <h3 className="text-lg font-semibold text-center">{principal.name}</h3>
                        {principal.degree && <p className="text-sm text-gray-600 text-center mt-2">{principal.degree}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExPrincipals;