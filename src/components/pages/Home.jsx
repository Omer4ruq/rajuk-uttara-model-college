import { useState, useEffect } from "react";
import Contact from "../Home/Contact";
import Facilities from "../Home/Facilities";
import GallerySection from "../Home/GallerySection";
import HeroSection from "../Home/HeroSection";
import OurPride from "../Home/OurPride";
import Testimonial from "../Home/Testimonial";
import CertificationAndLinks from "../Home/certificationAndLinks/CertificationAndLinks";
import SchoolHistory from "../Home/history/SchoolHistory";
import OtherServices from "../Home/otherServices/OtherServices";
import Presence from "../Home/presence/Presence";
import SpeechAndMenu from "../Home/speechAndMenu/SpeechAndMenu";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual data fetching if applicable)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // 3s delay to showcase loader; adjust based on actual data fetching

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    <HeroSection />,
    <SpeechAndMenu />,
    <SchoolHistory />,
    <CertificationAndLinks />,
    <OtherServices />,
    <Presence />,
    <Facilities />,
    <GallerySection />,
    <OurPride />,
    <Contact />,
    <Testimonial />,
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <div className="relative w-48 h-24">
          <svg className="w-full h-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            {/* Text being "written" */}
            <text
              x="10"
              y="50"
              className="text-4xl font-poppins fill-none stroke-primary stroke-2 animate-text-write"
              style={{ strokeDasharray: 500, strokeDashoffset: 500 }}
            >
              Learn
            </text>
            {/* Pen icon */}
            <g className="animate-pen-write">
              <svg x="10" y="20" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.199z" />
              </svg>
            </g>
          </svg>
          <div className="absolute top-16 left-0 text-primary text-sm font-poppins animate-pulse">
            Preparing...
          </div>
        </div>
        <style jsx>{`
          @keyframes text-write {
            0% {
              stroke-dashoffset: 500;
            }
            50% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          @keyframes pen-write {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(120px) rotate(-15deg);
            }
            100% {
              transform: translateX(0);
            }
          }
          .animate-text-write {
            animation: text-write 3s ease-in-out forwards;
          }
          .animate-pen-write {
            animation: pen-write 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="space-y-6 transition-opacity duration-1500 ease-in-out opacity-0 animate-fade-in">
      {sections.map((Section, index) => (
        <div
          key={index}
          className="animate-section-slide-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {Section}
        </div>
      ))}
      <style jsx>{`
        @keyframes section-slide-up {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-section-slide-up {
          animation: section-slide-up 1500ms ease-in-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1500ms ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}