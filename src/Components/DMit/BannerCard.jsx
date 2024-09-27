import React, { useEffect } from 'react';
import AnimatedSection from '../AnimatedSection';


const BannerCard = () => {

  return (
    <AnimatedSection>
    <div className="bg-[#022F46] p-8 text-center">
      <h2 className="text-white text-2xl md:text-[34px] font-bold mb-2 heading-font" style={{fontWeight:"700"}}>Don't Be an Average Student</h2>
      <p className="text-white mb-6" style={{fontWeight:'500'}}>Know your inborn Talent with DMIT Test</p>
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
    </AnimatedSection>
  );
};

export default BannerCard;
