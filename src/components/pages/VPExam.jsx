import React from 'react';
import VicePrincipalProfile from './VicePrincipalProfile';
import tamjiddun from '../../../src/assets/images/wing/tamjiddun.jpg';

const VPExam = () => {
    const profileData = {
        name: "Dewan Md. Tomziduzzaman",
        title: "Vice Principal, Exam and Coordination",
        additionalTitle: "",
        image: tamjiddun,
        biography: "Dewan Md. Tomziduzzaman joined as a lecturer of Agriculture Studies in 20.03.1996. He was promoted as Assistant Professor in 13.07.2004 and to the post of Associate Professor in 28.04.2009. He joined as a Vice-Principal of Exam and Coord in 10.11.2016.",
        timeline: [
            { role: "Lecturer (Agriculture Studies)", date: "March 20, 1996", description: "Started his academic career as a Lecturer in Agriculture Studies, contributing to agricultural education." },
            { role: "Assistant Professor", date: "July 13, 2004", description: "Promoted to Assistant Professor, recognized for his dedication to agricultural education." },
            { role: "Associate Professor", date: "April 28, 2009", description: "Advanced to Associate Professor, reflecting continued excellence in teaching and research in agriculture." },
            { role: "Vice Principal, Exam and Coordination", date: "November 10, 2016 - Present", description: "Appointed as Vice Principal of Exam and Coordination, managing examination processes and institutional coordination." }
        ]
    };

    return <VicePrincipalProfile {...profileData} />;
};

export default VPExam;