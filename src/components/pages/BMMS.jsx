import React from 'react';
import VicePrincipalProfile from './VicePrincipalProfile';
import matlubur from '../../../src/assets/images/wing/matlubur.jpg';

const BMMS = () => {
    const profileData = {
        name: "Md. Matlubur Rahman",
        title: "Vice Principal, BMMS",
        additionalTitle: "VP Representative, Board of Governors, RUMC",
        image: matlubur,
        biography: "Md. Matlubur Rahman joined as a lecturer of Statistics in 10.09.1994. He was promoted as Assistant Professor in 05.12.2001 and to the post of Associate Professor in 28.04.2009. He joined as a Vice-Principal of BMMS in 27.05.2015.",
        timeline: [
            { role: "Lecturer (Statistics)", date: "September 10, 1994", description: "Commenced his academic journey as a Lecturer in Statistics, beginning a distinguished career dedicated to statistical education and research." },
            { role: "Assistant Professor", date: "December 5, 2001", description: "Promoted to Assistant Professor in recognition of academic excellence and contributions to statistical education over seven years of dedicated service." },
            { role: "Associate Professor", date: "April 28, 2009", description: "Advanced to Associate Professor, demonstrating continued excellence in teaching, research, and academic leadership within the statistical sciences." },
            { role: "Vice Principal, BMMS", date: "May 27, 2015 - Present", description: "Appointed to the prestigious position of Vice Principal at BMMS, overseeing academic operations, strategic planning, and institutional development while serving as VP Representative on the Board of Governors at RUMC." }
        ]
    };

    return <VicePrincipalProfile {...profileData} />;
};

export default BMMS;