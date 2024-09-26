import React, { useEffect } from 'react';
import AnimatedSection from '../AnimatedSection';

const BannerCardOfCareer = () => {

  return (
    <AnimatedSection>
    <div className="bg-[#022F46] p-8 text-center" >
      <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-2 heading-font" style={{fontWeight:"600"}}>Take the first step towards career clarity!</h3>
      <p className="text-white mb-6">Discover your best-fit career with the world’s most-advanced career assessment</p>
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

export default BannerCardOfCareer;
