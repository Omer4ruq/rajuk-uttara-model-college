import React from 'react';
import VicePrincipalProfile from './VicePrincipalProfile';
import nasimunnar from '../../../src/assets/images/wing/emds.jpg';

const EMDS = () => {
    const profileData = {
        name: "Mosammad Nasimun Nahar Khan",
        title: "Vice Principal, EMDS",
        additionalTitle: "",
        image: nasimunnar,
        biography: "Mosammad Nasimun Nahar Khan joined as a lecturer of Economics in 01.09.1994. She was promoted as Assistant Professor in 03.10.2001 and to the post of Associate Professor in 28.04.2009. She joined as a Vice-Principal of EMDS in 10.11.2016.",
        timeline: [
            { role: "Lecturer (Economics)", date: "September 1, 1994", description: "Began her academic career as a Lecturer in Economics, contributing to the field of economic education." },
            { role: "Assistant Professor", date: "October 3, 2001", description: "Promoted to Assistant Professor, acknowledged for her impactful work in economics education." },
            { role: "Associate Professor", date: "April 28, 2009", description: "Advanced to Associate Professor, demonstrating excellence in teaching and research in economics." },
            { role: "Vice Principal, EMDS", date: "November 10, 2016 - Present", description: "Appointed as Vice Principal of EMDS, leading academic and administrative efforts." }
        ]
    };

    return <VicePrincipalProfile {...profileData} />;
};

export default EMDS;