import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginAndStatsBanner = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className="flex justify-center items-center py-6 bg-gray-300 my-5" data-aos="fade-up">
    <div className="flex flex-col md:flex-row bg-white w-full h-auto md:h-96 max-w-7xl rounded-lg shadow-lg overflow-hidden">
      {/* Left Section - Login Form */}
      <div className="w-full md:w-1/2 p-8 relative">
        <h2 className="text-2xl font-bold mb-6 text-center heading-font">
          TAKE YOUR TEST NOW!
        </h2>
        <div className="md:pr-48">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold">
            LOGIN
          </button>
          <p className="text-center mt-4">
            New User?{" "}
            <a href="#" className="text-blue-600">
              Register Here.
            </a>
          </p>
        </div>
  
        {/* Image at the bottom-right corner */}
        <div className="absolute right-0 bottom-0 w-[40%] h-[50%] rounded-tl-full bg-[#000] hidden md:block"></div>
      </div>
  
      {/* Right Section - Stats */}
      <div className="w-full md:w-1/2 bg-gray-200 p-8 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-blue-900">93+</h3>
          <p className="mt-2 text-gray-600">Corporates</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-blue-900">1223+</h3>
          <p className="mt-2 text-gray-600">Institutes/ Schools</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-blue-900">4,01+</h3>
          <p className="mt-2 text-gray-600">Teachers/ Educators</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-blue-900">9,57,312+</h3>
          <p className="mt-2 text-gray-600">Students Tested</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginAndStatsBanner;
