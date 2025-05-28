import { useEffect, useState } from "react";
import { images } from "../../../assets";
import Axios from "../../../axios/axios";

const Footer = () => {

  const count = [6, 0, 4];

  const [data, setData] = useState({});
  const [desc, setDesc] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('/api/institute') 
      .then(response => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
   Axios.get('/welcome-speeches/')
     .then(response => {
       setDesc(response.data[0]);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
console.log("desc", desc)
  return (
  <div className="footer container-fluid text-textColor bg-gradient-to-r from-primary to-secondary font-ador py-8 text-[15px] text-base font-normal leading-6">
    <div className="foonter__cont container flex flex-wrap items-stretch lg:flex-nowrap lg:justify-between gap-8 sm:mx-auto px-4 sm:px-0 xl:px-8">
      <div className="footer__cont__item footer__cont__item--summary min-w-[320px] sm:min-w-[350px] flex lg:flex-row flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-5/12">
      <div className="img_wrapper ">
        <img className="min-w-20 object-contain w-32 h-32" src={data?.institute_logo} alt="logo" />
      </div>
      {
        desc?.text ?  <div className="texts_wrapper lg:ml-5 ml-0 mt-3 lg:mt-0">
        <h2 className="xl:text-4xl text-3xl mb-2 ">{data?.institute_name}</h2>
        <p className="break-words hyphens-auto">{desc?.text}</p>
      </div> :  <div className="texts_wrapper lg:ml-5 ml-0 mt-3 lg:mt-0 my-6 flex justify-center items-center">
        <h2 className="xl:text-4xl text-3xl mb-2 ">{data?.institute_name}</h2>

      </div>
      }
     
      </div>
      <div className="footer__cont__item text-center lg:text-left w-full lg:w-auto">
        <ul>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">About Us</a></li>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Our History</a></li>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Privacy Policy</a></li>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Terms & Conditions</a></li>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer__cont__item text-center lg:text-left w-full lg:w-auto">
        <ul>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Education Board</a></li>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Teacher Information</a></li>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Staff Information</a></li>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Image Gallery</a></li>
          <li className="pb-3"><a href="#" className="whitespace-nowrap">Video Gallery</a></li>
        </ul>
      </div>
      <div className="footer__cont__item flex flex-col justify-between min-w-28 w-full max-w-full lg:max-w-[220px] ">
        <ul>
          <li className="pb-3 flex items-center justify-center lg:justify-normal gap-2">
            <img src={images.callIcon} alt="call icon" />
            <p>{data?.headmaster_mobile}</p>
          </li>
          <li className="pb-3 flex items-center justify-center lg:justify-normal gap-2">
            <img src={images.emailIcon} alt="email icon" />
            <p>{data?.institute_email_address}</p>
          </li>
          <li className="pb-3 flex items-center justify-center lg:justify-normal gap-2">
            <img src={images.addressIcon} alt="call icon" />
            <p>{data?.institute_address}</p>
          </li>
        </ul>
        <p className="text-textColor text-end">Site Visit Count : 
        {
          count.map((num, i) => (
            <span key={i} className="border border-white px-1 ml-1">{num}</span>
          ))
        }
        </p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
