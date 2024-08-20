import React from "react";

export default function InterestTestHero() {
  return (
    <div>
      <div className="bg-[#E3F2FB] md:py-16 p-8 rounded-lg flex flex-col md:flex-row items-center justify-around">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-gray-800 leading-tight mb-9">
            Find a Career that
            <br />
            <span className="text-[#043E56]">Sui ts your Interests</span>
          </h1>
          <p className="mt-4 text-black text-lg md:text-[2xl] 2xl:text-3xl">
            Measuring your interests lets you accurately match your
            <br />
            preferences with careers that let you do what you love.
          </p>
          <button className="mt-6 bg-[#043E56] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#032F42] transition">
            Take Interest Test Now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-[30%] mt-8 md:mt-0 relative">
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
