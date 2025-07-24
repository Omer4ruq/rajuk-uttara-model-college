import React from 'react';
import VicePrincipalProfile from './VicePrincipalProfile';
import sudipabarua from '../../../src/assets/images/wing/sudipa.jpg';

const EMMS = () => {
    const profileData = {
        name: "Sudipa Barua",
        title: "Vice Principal, EMMS",
        additionalTitle: "",
        image: sudipabarua,
        biography: "Sudipa Barua joined as a lecturer of Bangla in 02.05.1999. She was promoted as Assistant Professor in 28.04.2009 and to the post of Associate Professor in 10.01.2014. She joined as an acting Vice-Principal of EMMS in 09.09.2024.",
        timeline: [
            { role: "Lecturer (Bangla)", date: "May 2, 1999", description: "Began her academic career as a Lecturer in Bangla, laying the foundation for her contributions to language education." },
            { role: "Assistant Professor", date: "April 28, 2009", description: "Promoted to Assistant Professor, recognized for her dedication and impact in the field of Bangla studies." },
            { role: "Associate Professor", date: "January 10, 2014", description: "Advanced to Associate Professor, showcasing continued excellence in teaching and academic leadership in Bangla education." },
            { role: "Acting Vice Principal, EMMS", date: "September 9, 2024 - Present", description: "Appointed as acting Vice Principal of EMMS, contributing to academic administration and institutional development." }
        ]
    };

    return <VicePrincipalProfile {...profileData} />;
};

export default EMMS;