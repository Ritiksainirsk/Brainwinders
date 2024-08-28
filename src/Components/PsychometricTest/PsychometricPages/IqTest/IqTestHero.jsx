import React from "react";

export default function IqTestHero() {
  return (
    <div>
      <div className="bg-[#E3F2FB] p-8 2xl:px-28 rounded-lg flex flex-col md:flex-row items-center justify-around">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-[40px] font-bold text-gray-800 leading-tight md:mb-4 2xl:mr-44">
            Have you wondered
            <span className="text-[#043E56]"> what your IQ score is?</span>
          </h1>
          <p className="mt-4 text-black text-lg md:text-[16px] md:flex md:flex-col">
            Our original IQ Test will give you a fast and accurate iq score. Take our fast IQ test and find out just how smart you are. reach their highest potential.
          </p>
          <button className="mt-3 bg-[#043E56] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#032F42] transition">
            Find Out Your IQ Score
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-[30%] mt-8 md:mt-0 relative">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Scientist-Albert-Einstein-Transparent.png" /* Replace with actual image URL */
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
