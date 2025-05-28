import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import StaffAttendance from "./components/Attendance/StaffAttendance";
import StudentAttendance from "./components/Attendance/StudentAttendance";
import TeacherAttendance from "./components/Attendance/TeacherAttendance";
import ContactUs from "./components/ContactUs/ContactUs";
import { AcademicDocumentsDownload, AdmitCardDownload, ExamResult, FeeInfo, SeatPlan } from "./components/DownloadCorner";
import AboutInstitute from "./components/pages/AboutInstitute.jsx";
import AdmissionPage from "./components/pages/AdmissionForm";
import CommiteeMembers from "./components/pages/CommiteeMembers";
import DressCode from "./components/pages/DressCode";
import Events from "./components/pages/Events";
import Fees from "./components/pages/Fees.jsx";
import Home from "./components/pages/Home";
import JobCorner from "./components/pages/JobCorner";
import NoticeAndAnnouncement from "./components/pages/NoticeAndAnnouncement";
import PaySlip from "./components/pages/PaySlip.jsx";
import PictureGallery from "./components/pages/PictureGallery.jsx";
import SeatInfo from "./components/pages/SeatInfo";
import Staffs from "./components/pages/Staffs.jsx";
import Students from "./components/pages/Students.jsx";
import SyllabusPage from "./components/pages/SyllabusPage";
import {
  default as Teachers,
  default as TeachersList,
} from "./components/pages/Teachers.jsx";
import VideoGallery from "./components/pages/VideoGallery";
import WelcomeSpeech from "./components/pages/WelcomeSpeech.jsx";
import AcademicTranscript from "./components/Routines/AcademicTranscript";
import ClassRoutine from "./components/Routines/ClassRoutine";
import ExamRoutine from "./components/Routines/ExamRoutine";
import "./index.css";
import PictureProvider from "./Provider/PictureProvider.jsx";
import CurrentPrincipal from "./components/pages/CurrentPrincipal";
import ExPrincipals from "./components/pages/ExPrincipals";
import Bmds from "./components/pages/Bmds";
import Bmms from "./components/pages/Bmms";
import VPExam from "./components/pages/VPExam";
import Emds from "./components/pages/Emds";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/picture-gallery",
        element: <PictureGallery />,
      },
      {
        path: "/video-gallery",
        element: <VideoGallery />,
      },
      {
        path: "/staffs",
        element: <Staffs />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/welcome-speech",
        element: <WelcomeSpeech />,
      },
      {
        path: "/about-institute",
        element: <AboutInstitute />,
      },
      {
        path: "/dress-code",
        element: <DressCode />,
      },
      {
        path: "/total-seat-info",
        element: <SeatInfo />,
      },
      {
        path: "/teachers",
        element: <TeachersList />,
      },
      {
        path: "/committee-members",
        element: <CommiteeMembers />,
      },
      {
        path: "/syllabus",
        element: <SyllabusPage />,
      },
      {
        path: "/fees",
        element: <Fees />,
      },
      {
        path: "/payslip",
        element: <PaySlip />,
      },
      {
        path: "/job-corner",
        element: <JobCorner />,
      },
      {
        path: "/notices-and-announcements",
        element: <NoticeAndAnnouncement />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/fee-info",
        element: <FeeInfo />,
      },
      {
        path: "/seat-plan",
        element: <SeatPlan />,
      },
      {
        path: "/exam-admit-card",
        element: <AdmitCardDownload />,
      },
      {
        path: "/exam-result",
        element: <ExamResult />,
      },
      {
        path: "/academic-documents-download",
        element: <AcademicDocumentsDownload />,
      },
      {
        path: "/student-attendance",
        element: <StudentAttendance />,
      },
      {
        path: "/teacher-attendance",
        element: <TeacherAttendance />,
      },
      {
        path: "/staff-attendance",
        element: <StaffAttendance />,
      },
      {
        path: "/class-routine",
        element: <ClassRoutine />,
      },
      {
        path: "/exam-routine",
        element: <ExamRoutine />,
      },
      {
        path: "/academic-transcript",
        element: <AcademicTranscript />,
      },
      {
        path: "/admission-page",
        element: <AdmissionPage />
      },
        {
        path: "/current-principal",
        element: <CurrentPrincipal></CurrentPrincipal>,
      },
        {
        path: "/ex-principals",
        element: <ExPrincipals />,
      },
       {
        path: "/bm-ds",
        element: <Bmds />,
      },
         {
        path: "/bm-ms",
        element: <Bmms />,
      },
           {
        path: "/em-ds",
        element: <Emds />,
      },
       {
        path: "/vp-exam-control",
        element: <VPExam />,
      },
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PictureProvider>
      <RouterProvider router={router} />
    </PictureProvider>
  </React.StrictMode>
);
