import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HeadMasterSpeech({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxChars = 200;
  const isTextLong = data?.text?.length > maxChars;
  const truncatedText = isTextLong
    ? data?.text?.slice(0, maxChars) + "..."
    : data?.text;

  return (
    <div className="flex flex-col items-center space-y-6 px-6 py-8 bg-white shadow-lg rounded-xl max-w-2xl mx-auto text-center">
      <img
        src={data?.img}
        alt="Head-Master"
        className="w-40 h-40 rounded-full border-4 border-primary shadow-md object-cover"
      />
      <h4 className="text-2xl font-semibold text-primary">{data?.name}</h4>

      <div className="flex gap-4 justify-center">
        <Link to={data?.facebook} aria-label="Facebook profile">
          <div className="bg-primary text-white p-2 rounded-full hover:scale-105 transform transition duration-300">
            <FaFacebook size={20} />
          </div>
        </Link>
        <Link to={data?.linkedin} aria-label="YouTube profile">
          <div className="bg-primary text-white p-2 rounded-full hover:scale-105 transform transition duration-300">
            <FaYoutube size={20} />
          </div>
        </Link>
        <Link to={`https://wa.me/${data?.whatsapps}`} aria-label="WhatsApp contact">
          <div className="bg-primary text-white p-2 rounded-full hover:scale-105 transform transition duration-300">
            <FaWhatsapp size={20} />
          </div>
        </Link>
      </div>

      <div className="relative text-gray-700 text-base leading-relaxed text-justify max-w-prose">
        <p className={`${isExpanded ? "max-h-[1000px]" : "max-h-32"} overflow-hidden transition-all duration-500 ease-in-out`}>
          {isExpanded || !isTextLong ? data?.text : truncatedText}
        </p>

        {isTextLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-medium text-base hover:underline focus:outline-none mt-3"
            aria-label={isExpanded ? "See less" : "See more"}
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}