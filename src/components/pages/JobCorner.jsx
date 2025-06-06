
const jobData = [
   {
     id: 1,
     title: "সফটওয়্যার ইঞ্জিনিয়ার",
     deadline: "৩১ আগস্ট, ২০২৪",
     details: "আমরা আমাদের দলে একজন দক্ষ সফটওয়্যার ইঞ্জিনিয়ার খুঁজছি। ইহা একটি ডেমু টেক্সট, এখানে আপনার প্রয়োজন অনুযায়ী বিস্তারিত লিখতে পারবেন।জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে। মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম,প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে।",
     educationalQualification: "কম্পিউটার সায়েন্স বা সংশ্লিষ্ট ক্ষেত্রে স্নাতক ডিগ্রি",
     experience: "সফটওয়্যার ডেভেলপমেন্টে ২+ বছরের অভিজ্ঞতা",
   },
   {
     id: 2,
     title: "প্রোডাক্ট ম্যানেজার",
     deadline: "১৫ সেপ্টেম্বর, ২০২৪",
     details: "আমাদের প্রোডাক্ট টিমের নেতৃত্ব দিতে এবং পণ্য উন্নয়ন তত্ত্বাবধান করতে। ইহা একটি ডেমু টেক্সট, এখানে আপনার প্রয়োজন অনুযায়ী বিস্তারিত লিখতে পারবেন।জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে। মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম,প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে।",
     educationalQualification: "ব্যবসা বা সংশ্লিষ্ট ক্ষেত্রে স্নাতক ডিগ্রি",
     experience: "প্রোডাক্ট ম্যানেজমেন্টে ৩+ বছরের অভিজ্ঞতা",
   },
 ];
 
 
export default function JobCorner() {
    return (
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
        চাকরির সুযোগ
      </h1>
      {/* {jobData.map((job) => (
        <div key={job.id} className="bg-white shadow-md rounded-lg border border-primary p-6 mb-6">
        <h2 className="text-3xl font-semibold text-primary mb-2">{job.title}</h2>
        <p className="text-gray-600 text-xl mb-4">
          <span className="font-semibold text-primary">শেষ তারিখ:</span> {job.deadline}
        </p>
        <p className="text-gray-700 text-xl mb-2">
          <span className="font-semibold text-primary">বিস্তারিত:</span> {job.details}
        </p>
        <p className="text-gray-700 text-xl mb-2">
          <span className="font-semibold text-primary">শিক্ষাগত যোগ্যতা:</span> {job.educationalQualification}
        </p>
        <p className="text-gray-700 text-xl mb-4">
          <span className="font-semibold text-primary">অভিজ্ঞতা:</span> {job.experience}
        </p>
        <div className="flex gap-4">
         <Button text="চাকরির বিজ্ঞপ্তি দেখুন" textSize="text-xl" />
         <Button text=" আবেদন করুন" textSize="text-xl" />
        </div>
      </div>
      ))} */}
    </div>
    );
}