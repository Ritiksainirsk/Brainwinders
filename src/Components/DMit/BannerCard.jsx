import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const BannerCard = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);


  return (
    <div className="bg-[#022F46] p-8 text-center" data-aos="fade-up">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 heading-font" style={{fontWeight:"600"}}>Don't Be an Average Student</h2>
      <p className="text-white mb-6">Know your inborn Talent with DMIT Test</p>
      <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Name"
          className="w-full md:w-auto px-4 py-2 bg-blue-700 text-white rounded-full focus:outline-none"
        />
        <input
          type="text"
          placeholder="Contact"
          className="w-full md:w-auto px-4 py-2 bg-blue-700 text-white rounded-full focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email Id"
          className="w-full md:w-auto px-4 py-2 bg-blue-700 text-white rounded-full focus:outline-none"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full md:w-auto px-4 py-2 bg-blue-700 text-white rounded-full focus:outline-none"
        />
        <button className="w-full md:w-auto px-6 py-2 bg-green-700 text-white rounded-full focus:outline-none">
          Submit
        </button>
      </div>
    </div>
  );
};

export default BannerCard;
