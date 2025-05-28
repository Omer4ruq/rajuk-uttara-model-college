import React from 'react';

const exPrincipals = [
    { name: "কর্নেল নূরুন নবী (অবঃ)", img: "../../../public/images/ex-head-masters/nurun-nabi.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল সোহরাব আলী তালুকদার", img: "../../../public/images/ex-head-masters/shorab-ali-talukdar.jpeg", degree: "" },
    { name: "কর্নেল মোকাররম আলী খান", img: "../../../public/images/ex-head-masters/mokarram-ali-khan.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল এ. কে. এম. রেজাউল করিম", img: "../../../public/images/ex-head-masters/rejaul-karim.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল এ. এস. এম. মুশফিকুর রহমান, পিএসসি", img: "../../../public/images/ex-head-masters/mushfiq-ur-rahman.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল মোঃ গোলাম হোসেন সরকার, পিএসসি", img: "../../../public/images/ex-head-masters/golam-hossan-sarkar.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল মোঃ ইমামুল হুদা, পিএসসি", img: "../../../public/images/ex-head-masters/imamul-huda.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল এম. এম. সালেহীন, এনডিসি, পিএসসি", img: "../../../public/images/ex-head-masters/m-m-salehin.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল কাজী শওকত আলম, এনডিসি, পিএসসি", img: "../../../public/images/ex-head-masters/Kazi-Shawkat-alam.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল তায়েফ উল হক, এনডিসি, পিএসসি, জি", img: "../../../public/images/ex-head-masters/tayef-ul-haq.jpeg", degree: "" },
    { name: "ব্রিগেডিয়ার জেনারেল এ. এস. এম. বাহাউদ্দিন, এসিউপি, এসপিপি, এনডিসি, এএফডব্লিউসি, পিএসবি,জি ", img: "../../../public/images/ex-head-masters/a-s-m-bahauddin.jpeg", degree: "" },
];

const ExPrincipals = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Ex-Principals of the College</h2>
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