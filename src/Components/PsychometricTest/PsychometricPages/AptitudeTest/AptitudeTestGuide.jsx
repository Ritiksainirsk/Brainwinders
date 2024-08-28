import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AptitudeTestGuide() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

const FirstComponent = () => {
  const steps = [
    {
      id: 1,
      title: "Registration and Test-Taking",
      description:
        "The Brainwonders aptitude test is in a multiple choice format and is timed (online or offline).",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQspkGuw6o7zFMo3PN-vD8VIbIwNbxRh0MyPqGVLwA-07Bf6MBB",
    },
    {
      id: 2,
      title: "Evaluation",
      description:
        "As an objective test, the inputs of the clients are scored using a standardized key.",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZBnm5SQgANCu88lwoq7dXP1unonnwDRn-JEuvSc_BBcKmdKGw",
    },
    {
      id: 3,
      title: "Interpretation & Report",
      description:
        "An aptitude profile and complete report is generated and compiled.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKOINtj4cl-oMWEAOcNMW-uFkZZ8SrcFBmMNprgWljA5qxptB",
    },
    {
      id: 4,
      title: "Career Counselling",
      description:
        "The counsellor personally explains the results, keeping in mind the subjective needs of the client and further adds certain points of development.",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBe8TcWcKUfXR97rh4XNfhri_RbkRApeMGsM9fF0aBaT_TAxoP",
    },
  ];
  return (
    <div className=" mx-auto p-6 text-center" data-aos="fade-up">
      <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-2 heading-font" style={{fontWeight:"600"}}>
        HOW TO TAKE AN APTITUDE TEST?
      </h2>
      <p className="text-base text-black mb-10">
        It's very simple. Just follow these steps!
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.id} className="bg-gray-100 rounded-lg p-6 shadow-lg">
            <img
              src={step.image}
              alt={step.title}
              className="mx-auto mb-4 w-full h-36 object-contain md:object-cover"
              width={120}
              height={120}
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.id}. {step.title}
            </h3>
            <p className="text-black text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function SecondComponent() {
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
  return (
    <div className=" mx-auto py-12 px-4" data-aos="fade-up">
      <div className="text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2 heading-font" style={{fontWeight:"600"}}>
          What to expect in an Aptitude test
        </h2>
        <p className="text-base text-black mb-8">
          Plan Your Career The Right Way Get an insight to your future career
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {aptitudeTestData.map((item, index) => (
          <div key={index} className="bg-blue-100 p-10 md:p-12 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black mb-4">
              {item.title}
            </h3>
            <p className="text-black text-[15px] md:text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
