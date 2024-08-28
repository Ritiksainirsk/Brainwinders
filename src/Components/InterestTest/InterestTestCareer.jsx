import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InterestTestCareer() {
  const aptitudeTestData = [
    {
      title: "Aptitude Test for Junior Primary (7-8 years)",
      description:
        "As the child starts exploring the world of formal education, parents, teachers and other mentors can use the analysis to set certain benchmarks and choose the teaching methods accordingly.",
    },
    {
      title: "Aptitude Test for Senior Primary (9-10 years)",
      description:
        "This is the right age to know how the child is acquiring and grasping certain thoughts and skills and the results can also be used to shape the childbeyond academics.",
    },
    {
      title: "Aptitude Test for Middle School (11-12 years)",
      description:
        "At this stage, the school courses begin diversifying into more subjects focussing on specific topics and themes each having their owndemands while the student needs to also enhance their extracurricularinterests.",
    },
    {
      title: "Aptitude Test for Lower Secondary (13-14 years)",
      description:
        "The test profile would be able to provide a SWOT analysis of the journey so far which the child and relevant guides can use to explore certain career options and overcome anypersonal limitations to their professional goals.",
    },
    {
      title: "Aptitude Test for Higher Secondary (15 years+)",
      description:
        "By this time, one is able to understand that one cannot make a career decision only on the basis of interests and current strengths. Future orientedfactors like satisfaction, prospects and work-life balance should become clear and then on may proceed on a specific career path",
    },
    {
      title: "Aptitude Test for Adults and Corporates (18 years+)",
      description:
        "Many organisations not only use the aptitude test during hiring, but also subject their employees to it continuously to evaluate growth. Similarly, adults and working professionals benefit by using it toboost their own profile",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className=" mx-auto py-12 px-4" data-aos="fade-up">
        <div className="text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2 heading-font" style={{fontWeight:"600"}}>
            Career Interest Test for Everyone
          </h2>
          <p className="text-lg md:text-[16px] text-black mb-8">
            Plan Your Career The Right Way Get an insight to your future career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {aptitudeTestData.map((item, index) => (
            <div key={index} className="bg-blue-100 p-10 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                {item.title}
              </h3>
              <p className="text-black text-[15px] md:text-[20px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
