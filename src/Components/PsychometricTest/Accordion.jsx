import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What will this planner contain?",
    answer:
      "Based on your preferences - and the package you’ve selected - your planner will contain a detailed guide to the ideal colleges you should apply to in the city/country of your choice, as per your budget and eligibility criteria. You can view a sample report by clicking here. If you’ve chosen the Ultimate College Admissions Planner, you will also get a session with an Overseas Admissions Counsellor, who will guide you on structuring your essay or SOP for the colleges you’re applying to. The SOP you create based on these inputs will then be reviewed by our team to make sure it checks all the right boxes.",
  },
  {
    question:
      "Do you have any partnerships with colleges and universities abroad?",
    answer:
      "Based on your preferences - and the package you’ve selected - your planner will contain a detailed guide to the ideal colleges you should apply to in the city/country of your choice, as per your budget and eligibility criteria. You can view a sample report by clicking here. If you’ve chosen the Ultimate College Admissions Planner, you will also get a session with an Overseas Admissions Counsellor, who will guide you on structuring your essay or SOP for the colleges you’re applying to. The SOP you create based on these inputs will then be reviewed by our team to make sure it checks all the right boxes.",
  },
  {
    question: "Do you provide assistance with the visa application process?",
    answer:
      "Based on your preferences - and the package you’ve selected - your planner will contain a detailed guide to the ideal colleges you should apply to in the city/country of your choice, as per your budget and eligibility criteria. You can view a sample report by clicking here. If you’ve chosen the Ultimate College Admissions Planner, you will also get a session with an Overseas Admissions Counsellor, who will guide you on structuring your essay or SOP for the colleges you’re applying to. The SOP you create based on these inputs will then be reviewed by our team to make sure it checks all the right boxes.",
  },
  {
    question: "Do you provide guidance on scholarship options?",
    answer:
      "Based on your preferences - and the package you’ve selected - your planner will contain a detailed guide to the ideal colleges you should apply to in the city/country of your choice, as per your budget and eligibility criteria. You can view a sample report by clicking here. If you’ve chosen the Ultimate College Admissions Planner, you will also get a session with an Overseas Admissions Counsellor, who will guide you on structuring your essay or SOP for the colleges you’re applying to. The SOP you create based on these inputs will then be reviewed by our team to make sure it checks all the right boxes.",
  },
  {
    question:
      "Do you provide guidance on additional courses one might have to take for their desired graduation programmes?",
    answer:
      "Based on your preferences - and the package you’ve selected - your planner will contain a detailed guide to the ideal colleges you should apply to in the city/country of your choice, as per your budget and eligibility criteria. You can view a sample report by clicking here. If you’ve chosen the Ultimate College Admissions Planner, you will also get a session with an Overseas Admissions Counsellor, who will guide you on structuring your essay or SOP for the colleges you’re applying to. The SOP you create based on these inputs will then be reviewed by our team to make sure it checks all the right boxes.",
  },
  {
    question: "How do I contact you if I need to know more?",
    answer:
      "Based on your preferences - and the package you’ve selected - your planner will contain a detailed guide to the ideal colleges you should apply to in the city/country of your choice, as per your budget and eligibility criteria. You can view a sample report by clicking here. If you’ve chosen the Ultimate College Admissions Planner, you will also get a session with an Overseas Admissions Counsellor, who will guide you on structuring your essay or SOP for the colleges you’re applying to. The SOP you create based on these inputs will then be reviewed by our team to make sure it checks all the right boxes.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className=" mx-auto bg-[#000D71] text-white p-6 mt-6 px-5 md:px-14"
      data-aos="fade-up"
    >
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center heading-font">
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 bg-blue-800 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
          >
            <span>{item.question}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-blue-700 rounded-lg mt-2">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
