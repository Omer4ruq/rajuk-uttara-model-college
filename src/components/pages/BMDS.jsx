import React from 'react';
import VicePrincipalProfile from './VicePrincipalProfile';
import khandokar from '../../../src/assets/images/wing/khandkar-anisul.jpg';

const BMDS = () => {
    const profileData = {
        name: "Khandaker Anisul Haque",
        title: "Vice Principal, BMDS",
        additionalTitle: "",
        image: khandokar,
        biography: "Khandaker Anisul Haque joined as a lecturer of Physics in 01.09.1994. He was promoted as Assistant Professor in 09.08.2001 and to the post of Associate Professor in 28.04.2009. He joined as a Vice-Principal of BMDS in 27.05.2015.",
        timeline: [
            { role: "Lecturer (Physics)", date: "September 1, 1994", description: "Started his academic career as a Lecturer in Physics, initiating a journey dedicated to advancing physics education." },
            { role: "Assistant Professor", date: "August 9, 2001", description: "Promoted to Assistant Professor, recognized for his contributions to physics education and research." },
            { role: "Associate Professor", date: "April 28, 2009", description: "Advanced to Associate Professor, reflecting sustained excellence in teaching and academic leadership in physics." },
            { role: "Vice Principal, BMDS", date: "May 27, 2015 - Present", description: "Appointed as Vice Principal of BMDS, overseeing academic operations and strategic initiatives." }
        ]
    };

    return <VicePrincipalProfile {...profileData} />;
};

export default BMDS;