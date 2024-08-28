import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AptitudeMeddleSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <First />
      <AptitudeTestSampleQuestions />
    </div>
  );
}

function First() {
  const aptitudeTestData = [
    {
      title: "Know The Best Career Options For You!",
      description:
        "The Brainwonders Aptitude Tests is a surefire way of knowing the best career options which matches your talents. The aptitude is the most popular and time-tested assessment conducted during the academic period and for career management as well.",
    },
    {
      title: "Be On The Right Path",
      description:
        "The SWOT analysis and career profile as a result of The Brainwonders Aptitude Test lets you plan smartly without any confusion. Choose your subjects and build your hobbies wisely.",
    },
    {
      title: "Dream Career - Unlocked",
      description:
        "With the Brainwonders Aptitude Test, your career takes off in a new direction- with all your ambitions and aspirations fulfilled with unconditional support from your parents.",
    },
  ];
  return (
    <div className=" mx-auto py-12 px-4" data-aos="fade-up">
      <div className="text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2 heading-font" style={{fontWeight:"600"}}>
          What to expect in an Aptitude test
        </h2>
        <p className="text-lg md:text-[16px] text-black mb-8">
          Plan Your Career The Right Way Get an insight to your future career
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {aptitudeTestData.map((item, index) => (
          <div key={index} className="bg-blue-100 p-12 rounded-lg shadow-lg ">
            <h3 className="text-xl md:text-xl font-bold text-black mb-4">
              {item.title}
            </h3>
            <p className="text-black md:text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const AptitudeTestSampleQuestions = () => {
    const questionsData = [
      {
        question: "Question 1",
        prompt:
          "In each of the following question, group the given figures into three classes using each figure only once:",
        image:
          "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/07/25123027/exam12.jpg",
        options: [
          { id: 1, label: "(7, 8, 9) (2, 4, 3) (1, 5, 6)", letter: "A" },
          { id: 2, label: "(1, 3, 3) (4, 5, 7) (6, 8, 9)", letter: "B" },
          { id: 3, label: "(1, 6, 8) (3, 4, 7) (2, 5, 9)", letter: "C" },
          { id: 4, label: "(1, 6, 9) (3, 4, 7) (2, 5, 8)", letter: "D" },
        ],
      },
      {
        question: "Question 2",
        prompt:
          "In the following question, group the given figures into three classes using each figure only once:",
        image:
          "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/07/25130808/exam42.jpg",
        options: [
          { id: 1, label: "(1, 4, 7) (2, 5, 8) (3, 6, 9)", letter: "A" },
          { id: 2, label: "(1, 3, 6) (2, 5, 8) (4, 7, 9)", letter: "B" },
          { id: 3, label: "(1, 2, 4) (3, 5, 8) (6, 7, 9)", letter: "C" },
          { id: 4, label: "(1, 4, 9) (2, 5, 8) (3, 6, 7)", letter: "D" },
        ],
      },
    ];
  
    const tabs = [
      "Critical Thinking",
      "Abstract Reasoning",
      "Logical Reasoning",
      "Numeric Reasoning",
      "Verbal Reasoning",
    ];
  
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [selectedOptions, setSelectedOptions] = useState({});
  
    const handleOptionClick = (questionIndex, optionId) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [questionIndex]: optionId,
      }));
    };
  
    return (
      <div className="mx-auto py-8 px-4 " data-aos="fade-up">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 heading-font" style={{fontWeight:"600"}}>
            Free Aptitude Test Sample Questions
          </h2>
          <p className="text-base text-black mt-2 ">
            Online aptitude tests questions with answers to help you understand
            the structure of an aptitude assessment.
          </p>
        </div>
  
        {/* Tabs */}
        <div className="flex justify-center mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 m-1 font-semibold text-sm md:text-base ${
                activeTab === tab
                  ? "text-white bg-[#022F46]"
                  : "text-black bg-white"
              } rounded-lg`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
  
        {/* Questions */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          {questionsData.map((item, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {item.question}
              </h3>
              <p className="text-black mb-4 text-sm md:text-base">
                {item.prompt}
              </p>
              <img
                src={item.image}
                alt=""
                className="w-full max-w-xs md:max-w-sm h-auto my-4 mx-auto"
                width={120}
                height={120}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.options.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => handleOptionClick(index, option.id)}
                    className={`flex items-center p-4 rounded-lg cursor-pointer 
                      ${
                        selectedOptions[index] === option.id
                          ? "bg-[#022F46] text-white"
                          : "bg-gray-100"
                      }`}
                  >
                    <span className="pr-3 font-bold text-lg md:text-xl">
                      {option.letter}
                    </span>
                    <span className="text-sm md:text-base">
                      {option.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };