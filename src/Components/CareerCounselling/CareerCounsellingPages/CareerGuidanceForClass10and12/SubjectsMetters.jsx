import React, { useEffect } from "react";
import './Css/CareerCousellingPages.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function SubjectsMetters() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <DescriptionBenner />
      <SubjectMattersCompo />
    </div>
  );
}

const DescriptionBenner = () => {
  return (
    <div className=" mx-auto p-6 2xl:px-[6rem] mt-9"  data-aos="fade-up">
      <h3 className="text-3xl lg:text-3xl text-center mb-4 heading-font text-[#022F46]" style={{fontWeight:"600"}}>
        Why Brainwonders For Career Guidance after 10th?
      </h3>
      <p
        className="mb-4 text-[15px] md:text-[16px] text-black"
        style={{ textAlign: "justify" }}
      >
        Brainwonders is a highly trusted and reliable option for Career
        Counseling after 10th grade. Leveraging our specialized expertise, we
        provide essential support and guidance to students navigating this
        critical phase of their education. Our experienced career counsellors
        are well-versed in the unique challenges faced by 10th-grade students.
        We offer personalized counselling sessions designed to address their
        specific needs. Our comprehensive services include DMIT test,
        Psychometric testing, individual counselling, and tailored career
        recommendations based on each student' s strengths, interests, and
        goals.
      </p>
    </div>
  );
};

function SubjectMattersCompo() {
  const items = [
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVp_jUjmy0kcrXPDp7cNsG19RidiXJm_tQPXvmD_vEKD5nXESK",
      title: "CAREER CONFUSION",
    description: "Many students feel overwhelmed by the multitude of career options available. They may lack clarity about their interests, strengths, and future goals, making it challenging to choose the right subject or stream.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSJzvzI6eMldPN1Z2mYpSw0CEJc4_AyygNL5oqqgB6XySxRVm",
      title: "LACK OF INFORMATION",
      description: "Students often have limited knowledge about the various subjects and streams available in 11th and 12th grades. They might be unaware of the syllabus, career prospects, or the skills required for different fields.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBGxPr2pnxJlQTLy-avhaNDtAlTkSqQuaif043iUlR6ZJ4hy64",
      title: "PEER AND PARENTAL PRESSURE",
    description: "External influences, such as peer and parental pressure, can significantly impact a student’s decision-making process. Expectations from friends, family, or society may push students to choose subjects or streams that do not align with their interests or aptitudes.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1EK8EwRfUxYsUzpiOI7RpP1pNavwMq3DuHc5WzDwVQKlI8d6G",
      title: "FEAR OF MAKING THE WRONG CHOICE",
      description: "The fear of making the wrong decision and its potential consequences can add to the stress and confusion faced by 10th-grade students.",
    },
  ];

  return (
    <div className="bg-white py-12"  data-aos="fade-up">
    <div className="text-center">
      <h2 className="text-xl font-semibold text-black">LET'S OVERCOME IT</h2>
      <h2 className="text-3xl font-bold text-gray-800 mt-2 heading-font" style={{fontWeight:"600"}}>Right subject Matters</h2>
      <div className="flex justify-center mt-2">
        <div className="w-60 h-[6px] bg-[#032F42] relative overflow-hidden rounded-lg">
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start space-x-4 overflow-hidden group py-8"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          
          {/* Image with Responsive Adjustment */}
          <div className="relative z-10 h-20 w-20 flex-shrink-0 rounded-full overflow-hidden group-hover:bg-transparent">
            <img 
              src={item.icon} 
              alt="" 
              className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110"
              width={120}
              height={120}
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10 group-hover:text-white">
            <h3 className="text-[21px] font-bold text-gray-800 group-hover:text-white heading-font">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 group-hover:text-white">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
