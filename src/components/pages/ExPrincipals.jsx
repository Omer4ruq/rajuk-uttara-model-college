import React from 'react';

// Image Imports
import nuruNabi from '../../../src/assets/images/ex-head-masters/nurun-nabi.jpeg';
import sohrabAli from '../../../src/assets/images/ex-head-masters/shorab-ali-talukdar.jpeg';
import mokarromAli from '../../../src/assets/images/ex-head-masters/mokarram-ali-khan.jpeg';
import rezaulKarim from '../../../src/assets/images/ex-head-masters/rejaul-karim.jpeg';
import mushfiqurRahman from '../../../src/assets/images/ex-head-masters/mushfiq-ur-rahman.jpeg';
import golamHossain from '../../../src/assets/images/ex-head-masters/golam-hossan-sarkar.jpeg';
import imamulHuda from '../../../src/assets/images/ex-head-masters/imamul-huda.jpeg';
import mmSalehin from '../../../src/assets/images/ex-head-masters/m-m-salehin.jpeg';
import kaziShawkat from '../../../src/assets/images/ex-head-masters/Kazi-Shawkat-alam.jpeg';
import tayefUlHaq from '../../../src/assets/images/ex-head-masters/tayef-ul-haq.jpeg';
import bahauddin from '../../../src/assets/images/ex-head-masters/a-s-m-bahauddin.jpeg';

// Data Array
const exPrincipals = [
    { name: "Col Nurun Nabi", img: nuruNabi, degree: "(Retd)", from: "18 Jul 94", to: "03 Feb 02" },
    { name: "Col Sohrab Ali Talukder", img: sohrabAli, degree: "(Retd)", from: "13 Mar 02", to: "23 Oct 03" },
    { name: "Col Mokarrom Ali Khan", img: mokarromAli, degree: "(Retd)", from: "23 Oct 03", to: "28 Dec 04" },
    { name: "Col A K M Rezaul Karim", img: rezaulKarim, degree: "(Retd)", from: "01 Jan 05", to: "06 Jan 08" },
    { name: "Col A S M Mushfiqur Rahman", img: mushfiqurRahman, degree: "psc (Retd)", from: "06 Jan 08", to: "11 Aug 11" },
    { name: "Brig Gen Mohd Golam Hossain Sarker", img: golamHossain, degree: "psc (Retd)", from: "11 Aug 11", to: "29 Aug 12" },
    { name: "Brig Gen Md Imamul Huda", img: imamulHuda, degree: "psc (Retd)", from: "29 Aug 12", to: "11 Oct 15" },
    { name: "Brig Gen M M Salehin", img: mmSalehin, degree: "ndc, psc (Retd)", from: "11 Oct 15", to: "19 Nov 17" },
    { name: "Brig Gen Kazi Showkat Alam", img: kaziShawkat, degree: "ndc, psc (Retd)", from: "01 Dec 17", to: "31 Jan 21" },
    { name: "Brig Gen Taef Ul Haq", img: tayefUlHaq, degree: "ndc, psc, G", from: "01 Feb 21", to: "05 Dec 22" },
    { name: "Brig Gen A S M Bahauddin", img: bahauddin, degree: "SUP, SPP, ndc, afwc, psc, G", from: "12 Dec 22", to: "04 Nov 24" },
    // { name: "Brig Gen Md Enamul Islam, psc, PhD", img: null, degree: "psc, PhD", from: "04 Nov 24", to: "Present (as of 24 Jul 2025)" },
];

// Component
const ExPrincipals = () => {
    return (
        <div className="min-h-screen py-12 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-primary to-secondary h-32 flex items-center justify-center">
                        <h2 className="text-3xl font-bold text-white">Ex-Principals of the College</h2>
                    </div>
                </div>

                {/* Principals Grid */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exPrincipals.map((principal, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-lg shadow-md p-6 flex flex-col items-center relative border border-slate-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="relative mb-6">
                                    <img
                                        src={principal.img}
                                        alt={principal.name}
                                        className="w-40 h-auto rounded-full border-4 border-white shadow-xl object-contain"
                                    />
                                    <div className="absolute inset-0 rounded-full border-2 border-slate-300 opacity-20"></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{principal.name}</h3>
                                {principal.degree && (
                                    <div className="mb-2">
                                        <span className="inline-block bg-gray-100 text-sm font-medium text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                                            {principal.degree}
                                        </span>
                                    </div>
                                )}
                                <div className="text-sm text-gray-700 text-center">
                                    <p className="font-medium text-gray-600 mb-1">Service Period</p>
                                    <p className="text-gray-800 font-semibold">
                                        {principal.from} <span className="text-gray-400 mx-2">-</span> {principal.to}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        Honoring the Legacy of Leadership in Academic Excellence
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExPrincipals;