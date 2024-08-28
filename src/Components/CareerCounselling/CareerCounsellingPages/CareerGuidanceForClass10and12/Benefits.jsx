import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Benefits() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  
  return (
    <div>
      <CareerGuidanceBenefits />
      <WhyBrainwonders />
      <ConsultationBooking />
    </div>
  );
}

const CareerGuidanceBenefits = () => {
  return (
    <div className=" mx-auto px-6 " data-aos="fade-up">
      <h2
        className="text-3xl md:text-3xl font-bold text-center mb-8 heading-font"
        style={{ fontWeight: "600" }}
      >
        Benefits of Career Guidance for Class 8 Students
      </h2>
      <p className="text-[16px] md:text-[16px] mb-3">
        Career guidance for Class 8 students is highly beneficial as it helps
        them in various ways:
      </p>
      <ul className="list-disc list-inside space-y-2 text-[16px] md:text-[16px]">
        <li>
          Self-awareness: It helps students understand their interests,
          strengths, and values.
        </li>
        <li>
          Exploration: Students can explore different career options and expand
          their knowledge.
        </li>
        <li>
          Goal setting: Career guidance assists students in setting realistic
          goals and planning steps to achieve them.
        </li>
        <li>
          Academic planning: It provides guidance on selecting subjects or
          streams relevant to their career choices.
        </li>
        <li>
          Skill development: Students learn about essential skills and how to
          acquire or enhance them.
        </li>
        <li>
          Confidence building:{" "}
          <a href="#" className="text-blue-600 underline">
            Career guidance
          </a>{" "}
          boosts students' confidence in their abilities and future prospects.
        </li>
      </ul>
    </div>
  );
};

const WhyBrainwonders = () => {
  return (
    <div
      className=" mx-auto py-12 px-6 text-"
      style={{ textAlign: "justify" }}
      data-aos="fade-up"
    >
      <h2
        className="text-3xl md:text-3xl font-bold mb-8 heading-font text-center"
        style={{ fontWeight: "600" }}
      >
        Why Brainwonders is the Ideal Choice for
        <br />
        career guidance for class 8 students
      </h2>
      <p className="mb-4 text-[16px] md:text-[16px]">
        Brainwonders is a trusted and reliable choice for{" "}
        <a href="#" className="text-blue-600 underline">
          Career Counselling and Guidance
        </a>
        . With our specialized expertise in career guidance, we offer valuable
        support and guidance to students who are in 8th class.
      </p>
      <p className="mb-6 text-[16px] md:text-[16px]">
        Our team of experienced career counsellors understands the unique
        challenges faced by 8th class students and provides personalized
        counseling sessions that cater specifically to their needs. Our
        comprehensive approach includes{" "}
        <a href="#" className="text-blue-600 underline">
          Psychometric Career Test
        </a>
        , one-on-one counseling, and customized career recommendations tailored
        to the individual's strengths, interests, and aspirations.
      </p>
    </div>
  );
};

const ConsultationBooking = () => {
  return (
    <div
      className=" mx-auto py-12 px-12 bg-gray-100 rounded-lg shadow-lg"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">
            Book a 30-min Consultation With Our Expert
          </h3>
          <p className="text-black md:text-[16px]">
            Our expert career advisors will assess your current standing and
            guide you towards the next steps,
            <br />
            empowering you to plan your career strategically and turn your
            dreams and aspirations into reality.
          </p>
        </div>
        <div className="flex items-start flex-col gap-4 space-x-4">
          <div className="text-right">
            <span className="text-3xl font-bold text-black">₹499.00</span>
            <span className="text-black">+18% GST</span>
            <p className="text-sm text-black">Per Student</p>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
