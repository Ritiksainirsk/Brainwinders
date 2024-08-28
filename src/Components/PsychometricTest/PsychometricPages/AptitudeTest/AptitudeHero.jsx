import React from "react";

export default function AptitudeHero() {
  return (
    <div>
      <div className="bg-[#E3F2FB] px-2 lg:px-28 py-8 md:py-2 rounded-lg flex flex-col md:flex-row items-center justify-around ">
        {/* Left Section */}
        <div className=" text-center md:text-left">
          <h1 className="text-3xl md:text-[40px] md:flex md:flex-col font-bold text-gray-800 leading-tight mb-2">
            Let Your Aptitude Soar!
            <span className="text-[#043E56]">
              Test preparation that makes a difference
            </span>
          </h1>
          <p className="mt-4 text-black text-[16px] md:flex md:flex-col">
            We help students and corporate professionals
            reach their highest potential.
          </p>
          <button className="mt-6 bg-[#043E56] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#032F42] transition">
            Take Aptitude Test Now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-[30%] mt-8 md:mt-0 relative">
          <img
            src="https://www.eklavvya.com/wp-content/uploads/2022/09/Aptitude-test.png" /* Replace with actual image URL */
            alt="Child holding books"
            className="w-full rounded-md "
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
