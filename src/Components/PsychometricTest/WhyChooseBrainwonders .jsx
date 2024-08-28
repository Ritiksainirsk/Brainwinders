import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseBrainwonders = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const features = [
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJPH0Y0TU4XR3p0xau4c7IR07VXbodmiaAjVfJpGcO9hWH1Uaw",
      title: "India's most reliable career test",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4959/4959183.png",
      title: "Counselling by trained experts",
    },
    {
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbQQvqLu6t31U3H7TSnatE-zuXfV3DYer2cGSgiFVaHum09rKV",
      title: "Holistic career information",
    },
    {
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQqq8GzbwDkmfCHAZGt8CsIYCaSiPg5a15l9vqDo3xABpKoyBZ",
      title: "Ongoing query resolution",
    },
    {
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzmWuCSH9XwXQKTREuMr862NgCgW9hFdyqWWVeSShOcf47KsRf",
      title: "Industry insights by experts",
    },
    {
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQed8xu_tlZncoSxWEYPtgWj2Ip_Rvt5npERRjiSpSAcLqhIZWj",
      title: "Ultimate guidance through plus",
    },
  ];

  return (
    <div className="bg-white " data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl lg:text-4xl font-bold text-center heading-font text-[#022F46]">
          Why Choose Brainwonders
        </h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg border border-gray-200"
            >
              <div className="mb-4">
                <img
                  src={feature.icon}
                  alt="icon"
                  className="w-20 h-20"
                  width={120}
                  height={120}
                />
              </div>
              <p className="text-center text-black text-xl font-semibold">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBrainwonders;
