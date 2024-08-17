import React from 'react';
import { FaSearch, FaUserTie, FaRegEdit, FaFlask } from 'react-icons/fa';

export default function InfoSection() {
  const items = [
    {
      icon: <FaSearch className="text-blue-600 text-[22px] md:text-[30px]" />,
      text: "Humanities, Science or Commerce - pick the right stream for you based on your interests & aptitude",
    },
    {
      icon: <FaUserTie className="text-blue-600 text-[22px] md:text-[30px]" />,
      text: "Learn in detail about all the career options available for your chosen stream and subject combinations",
    },
    {
      icon: <FaRegEdit className="text-blue-600 text-[22px] md:text-[30px]" />,
      text: "Build a holistic profile aligned to your career interests & ambitions with guidance from expert coaches",
    },
    {
      icon: <FaFlask className="text-blue-600 text-[22px] md:text-[30px]" />,
      text: "Deep dive into your preferred career domains through virtual career simulations & internships",
    },
  ];

  return (
    <div className="bg-[#043451] py-8 md:px-14">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full">
              {item.icon}
            </div>
            <p className="text-white mt-4 px-4">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
