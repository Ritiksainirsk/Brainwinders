import React from "react";

export default function InterestTestHero() {
  return (
    <div>
      <div className="bg-[#E3F2FB] md:py-10 2xl:px-32 p-8 rounded-lg flex flex-col md:flex-row items-center justify-around">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-[40px] font-bold text-gray-800 leading-tight md:mr-20">
            Find a Career that
            <span className="text-[#043E56]"> Suits your Interests</span>
          </h1>
          <p className="mt-4 text-black text-lg md:text-[16px] md:mr-40">
            Measuring your interests lets you accurately match your
            preferences with careers that let you do what you love.
          </p>
          <button className="mt-4 bg-[#043E56] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#032F42] transition">
            Take Interest Test Now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-[35%] mt-8 md:mt-0 relative">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMyvfHnkL-BKWdqTgNlsXtRj4wRB1a-OD8_ZtfKezq3Jnn5vTr" /* Replace with actual image URL */
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
