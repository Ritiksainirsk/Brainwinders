import React from "react";

import { IoPerson } from "react-icons/io5";
import { RiGlassesLine } from "react-icons/ri";
import { MdPsychology } from "react-icons/md";
import { RiBatteryShareLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Interview() {
  return (
    <div>
      <div className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 heading-font mb-4">Top 6 psychometric tests for interview</h2>
          <p className="text-center text-gray-600 mt-2 text-xl">
          Choose Various Types of Psychometric Tests for hiring From Our
          Skills Assessment Library
          </p>

          <div className="grid gap-7 grid-cols-1 lg:grid-cols-2 items-center">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                <div className="mb-4">
                  <RiGlassesLine className="text-3xl text-[#039CDE]"/>
                </div>
                <p className="text-center text-gray-700">
                  Mercer Mettl Personality Test
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                <div className="mb-4">
                  <MdPsychology className="text-3xl text-[#039CDE]"/>
                </div>
                <p className="text-center text-gray-700">
                  Critical Thinking Assessment
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                <div className="mb-4">
                  <FaRegFileAlt className="text-3xl text-[#039CDE]"/>
                </div>
                <p className="text-center text-gray-700">
                  Abstract Reasoning Assessment
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                <div className="mb-4">
                  <RiBatteryShareLine className="text-3xl text-[#039CDE]"/>
                </div>
                <p className="text-center text-gray-700">
                  Logical Reasoning Assessment
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                <div className="mb-4">
                  <IoPerson className="text-3xl text-[#039CDE]"/>
                </div>
                <p className="text-center text-gray-700">
                  Managerial Potential Assessment
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                <div className="mb-4">
                  <FaShoppingCart className="text-3xl text-[#039CDE]"/>
                </div>
                <p className="text-center text-gray-700">
                  Sales Potential Assessment
                </p>
              </div>
            </div>

            <div className="lg:mt-8">
              <iframe
                className="w-full h-80 rounded-lg"
                src="https://www.youtube.com/embed/mAzieboqF1c"
                title="DMIT Test Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-8 flex justify-start lg:ml-52">
            <button className="bg-[#039CDE] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              REQUEST A TEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
