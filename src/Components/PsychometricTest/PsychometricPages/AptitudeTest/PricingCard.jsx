import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const PricingCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


    return (
      <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8"  data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-2xl py-8 px-8 sm:px-12 lg:px-16 text-center">
            <h3 className="text-xl font-semibold text-pink-500 mb-4">Free</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <p className="text-sm text-gray-500 mb-6">per month / prepaid</p>
            <ul className="mb-6 space-y-3 text-left">
              <li className="text-green-500 text-[18px]">✔ Newsletter Access</li>
              <li className="text-green-500 text-[18px]">✔ Advance Career Aptitude Test</li>
              <li className="text-red-500 text-[18px]">✘ 16 Pages Advance Career Aptitude Test Report</li>
              <li className="text-red-500 text-[18px]">✘ Personalized Top 10 Career Pathways Report</li>
              <li className="text-red-500 text-[18px]">✘ Top 100 Trending Career Options 2024</li>
            </ul>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full">
              Purchase Now
            </button>
          </div>
  
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-2xl py-8 px-8 sm:px-12 lg:px-16 text-center">
            <h3 className="text-xl font-semibold text-purple-500 mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">$999</p>
            <p className="text-sm text-gray-500 mb-6">per month / prepaid</p>
            <ul className="mb-6 space-y-3 text-left">
              <li className="text-green-500 text-[18px]">✔ Newsletter Access</li>
              <li className="text-green-500 text-[18px]">✔ 12 Career Webinar</li>
              <li className="text-green-500 text-[18px]">✔ Ultimate Career Aptitude Test</li>
              <li className="text-red-500 text-[18px]">✘ 16 Pages Ultimate Career Aptitude Test Report</li>
              <li className="text-red-500 text-[18px]">✘ Top 100 Trending Career Options 2024</li>
            </ul>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-full">
              Purchase Now
            </button>
          </div>
  
          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-2xl py-8 px-8 sm:px-12 lg:px-16 text-center">
            <h3 className="text-xl font-semibold text-teal-500 mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-4">$2599</p>
            <p className="text-sm text-gray-500 mb-6">per month / prepaid</p>
            <ul className="mb-6 space-y-3 text-left">
              <li className="text-green-500 text-[18px]">✔ Newsletter Access</li>
              <li className="text-green-500 text-[18px]">✔ 16 Pages Ultimate Career Aptitude Test Report</li>
              <li className="text-green-500 text-[18px]">✔ Ultimate Career Aptitude Test</li>
              <li className="text-green-500 text-[18px]">✔ Personalized Top 20 Career Pathways Report</li>
              <li className="text-green-500 text-[18px]">✔ Top 100 Trending Career Options 2024</li>
            </ul>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    );
  };
export default PricingCard;