import React, { useEffect } from 'react';
import { RiGlassesLine } from "react-icons/ri";
import { MdPsychology } from "react-icons/md";
import { RiBatteryShareLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const PsychometricTestsSection = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-gray-100 p-8"  data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/4">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 heading-font" style={{fontWeight:"600"}}>What are Psychometric Tests?</h3>
          <p className="mt-4 text-lg text-gray-700">
            A psychometric test assesses a candidate's cognitive ability and personality. One of the most common uses of psychometric assessment is for recruitment. From a candidate's response, psychometric assessment tests can predict valuable insights such as job performance, competence, and motivations. There are two general types of psychometric testing: personality tests and <a href="#" className="text-blue-500 underline">Read More</a>.
          </p>
          <div className="mt-8 flex justify-between flex-wrap gap-4">
            <div className="flex items-center bg-white p-4 rounded-3xl flex-1">
              <div className="p-2 ">
                <MdPsychology className='text-3xl'/>
              </div>
              <span className="ml-4 text-lg font-medium text-gray-700">Psychometric Tests</span>
            </div>
            <div className="flex items-center bg-white p-4 rounded-3xl flex-1">
              <div className=" p-2">
              <RiGlassesLine className='text-3xl'/>
              </div>
              <span className="ml-4 text-lg font-medium text-gray-700">Personality Tests</span>
            </div>
            <div className="flex items-center bg-white p-4 rounded-3xl flex-1">
              <div className="p-2">
              <RiBatteryShareLine className='text-3xl'/>
              </div>
              <span className="ml-4 text-lg font-medium text-gray-700">Aptitude Tests</span>
            </div>
          </div>
        </div>
        <div className=" mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="border-l-2 p-6 ">
            <MdPsychology className='text-5xl mb-3'/>
            <h3 className="text-xl 2xl:text-2xl font-bold text-blue-900 heading-font">Know More About Our Psychometric Offerings</h3>
            <button className="mt-4 w-full py-3 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600">
              CONNECT WITH AN EXPERT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychometricTestsSection;
