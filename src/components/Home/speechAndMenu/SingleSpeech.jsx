import { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Axios from "../../../axios/axios";

export default function SingleSpeech() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    Axios.get('/messages-from-head') 
      .then(response => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>


  
  
    const maxChars = 200;
    const isTextLong = data?.text?.length > maxChars;
    const truncatedText = isTextLong
      ? data?.text?.slice(0, maxChars) + "..."
      : data?.text;
  return (
    <div className="lg:flex items-start gap-4 text-justify">
      <div className="flex flex-col items-center mb-4">
         <img
         src={data?.img}
         alt="Chairman"
         className="min-w-40 lg:min-w-[240px] rounded-lg border-primary"
         />
         <h4 className="text-primary text-2xl lg:text-xl xl:text-2xl my-1">{data?.name}</h4>
         <div className="flex gap-2 md:gap-1 xl:gap-2">
        <Link to={data?.facebook}>
          <FaFacebook  className="w-6 lg:w-8 text-3xl text-primary" />  
        </Link>
        <Link to={data?.linkedin}>
          <FaYoutube className="w-6 lg:w-8 text-3xl text-primary" />
        </Link>
        <Link to={`https://wa.me/${data?.whatsapps}`}>
          <FaWhatsapp className="w-6 lg:w-8 text-3xl text-primary" />
        </Link>
         </div>
      </div>
      <div className="text-gray-500 text-lg leading-6 text-start w-full">
        <p
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[1000px]" : "max-h-20"
          } overflow-hidden`}
        >
          {isExpanded || !isTextLong ? data?.text : truncatedText}
        </p>
        {isTextLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-medium text-base hover:underline focus:outline-none mt-2"
            aria-label={isExpanded ? "See less" : "See more"}
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}
