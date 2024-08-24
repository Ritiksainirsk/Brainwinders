import React from "react";

export default function PersnalityTestHero() {
  return (
    <div>
      <div className="bg-[#E3F2FB] md:py-24 py-6 px-4 md:p-8 rounded-lg flex flex-col md:flex-row items-center justify-around">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-800 leading-10 mb-2 md:mb-7 md:flex md:flex-col md:gap-3">
            Let Your Personality
            <span className="text-[#043E56] md:flex md:flex-col md:gap-3">
              lead you to a successful
              <span> CAREER!</span>
            </span>
          </h1>
          <p className=" text-black text-lg md:text-[2xl] 2xl:text-3xl md:flex md:flex-col">
            Take the world's most-advanced personality
            <span>
            test online and be the best you can be!
            </span>
          </p>
          <button className="mt-6 bg-[#043E56] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#032F42] transition">
            Take Persnality Test Now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-[30%] mt-8 md:mt-0 relative">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-LEtCZ_rii0yzax_hsTkz-fmrSEZIybHWqxBcXg315-0CXtXe" /* Replace with actual image URL */
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
