import { useEffect, useState } from "react";
import Axios from "../../axios/axios";

export default function DressCode() {
  const dressInfo = [
    {
      title: "৩য় থেকে ৫ম শ্রেণী",
      maleDress:
        "সাদা হাফ হাতা জামা ও কালো ফুল প্যান্ট সাথে কালো রঙয়ের জুতা ও মোজা।",
      femaleDress:
        "সাদা হাফ হাতা জামা ও কালো ফুল প্যান্ট সাথে কালো রঙয়ের জুতা ও মোজা।",
    },
    {
      title: "৬ষ্ঠ থেকে ১০ম শ্রেণী",
      maleDress:
        "সাদা হাফ হাতা জামা ও কালো ফুল প্যান্ট সাথে কালো রঙয়ের জুতা ও মোজা।",
      femaleDress:
        "সাদা হাফ হাতা জামা ও কালো ফুল প্যান্ট সাথে কালো রঙয়ের জুতা ও মোজা।",
    },
    {
      title: "একাদশ ও দ্বাদশ শ্রেণী",
      maleDress:
        "সাদা হাফ হাতা জামা ও কালো ফুল প্যান্ট সাথে কালো রঙয়ের জুতা ও মোজা।",
      femaleDress:
        "সাদা হাফ হাতা জামা ও কালো ফুল প্যান্ট সাথে কালো রঙয়ের জুতা ও মোজা।",
    },
  ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/dress-code/')
     .then(response => {
       setData(response.data);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-poppins font-medium text-textColor bg-primary px-4 py-3">
          Dress Code
        </h2>
        {/* <h4 className="border border-primary rounded-md p-3 text-primary text-xl leading-6">
          ইহা একটি ডেমু টেক্সট, এখানে আপনার প্রয়োজন অনুযায়ী বিস্তারিত লিখতে
          পারবেন।জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। 
        </h4> */}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
        {dressInfo.map((classRange, index) => (
          <div key={index} className="border border-primary rounded-md">
            <h4 className="text-textColor text-2xl text-center bg-gradient-to-r from-primary to-secondary py-2 px-3">
              {classRange.title}
            </h4>
            <div className="p-6 divide-y-2 divide-primary">
              <div className="flex items-center gap-3 lg:gap-4 pb-4 px-2">
                <img src={boyImg} alt="" className="h-20 lg:h-24" />
                <div className="space-y-2">
                  <h4 className="bg-white border border-primary rounded-md text-primary text-center text-2xl inline py-1 px-2">
                    ছেলে শিক্ষার্থী
                  </h4>
                  <p className="text-primary text-lg leading-5">
                    {classRange.maleDress}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 px-2">
                <img src={girlImg} alt="" className="h-20 lg:h-24" />
                <div className="space-y-2">
                  <h4 className="bg-white border border-primary rounded-md text-primary text-center text-2xl inline py-1 px-2">
                    মেয়ে শিক্ষার্থী
                  </h4>
                  <p className="text-primary text-lg leading-5">
                    {classRange.maleDress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {data.map((notice) => (
        <div key={notice.id} className="sm:flex bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-primary">
          {/* Left side: Notice Image */}
          <div className="w-full sm:w-[240px]">
            <img src={notice?.dress_image} alt="Notice" className="w-full h-auto" />
          </div>

          {/* Right side: Notice Details */}
          <div className="p-6 flex-1">
            <p className="text-gray-700 text-xl mb-4">{notice?.description}</p>

          </div>
        </div>
      ))}


    </>
  );
}
