import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FormBanner() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);


  return (
    <div>
      <div className="bg-[#022F46] p-8 text-center" data-aos="fade-up">
        <h2 className="text-white text-lg md:text-2xl font-bold py-2 heading-font"  style={{fontWeight:"600"}}>
        Dermatoglyphics Multiple Intelligence Test is a combined scientific study of Brain
        <br />
        Lobes, 9 Multiple Intelligence and Human Psychology. with the help of fingerprints.
        </h2>
        <h3 className="text-blue-300 text-lg md:text-[20px] font-bold py-4">
        Know your inborn Talent with DMIT Test and be a Winner
        </h3>
        <h4 className="text-white text-lg md:text-2xl font-bold mb-5 heading-font">
          Talk to Our Expert
        </h4>
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
    </div>
  );
}
