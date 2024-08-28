import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IqTestGuide() {
  return (
    <div>
      <FirstComponent />
      <WhyIQTests />
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

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className=" mx-auto p-6 text-center" data-aos="fade-up">
      <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-4 heading-font" style={{fontWeight:"600"}}>
        Start the test and Discover where you stand!
      </h2>
      <p className="text-base text-black mb-10">
        The IQ score derived gives a reasonable measure of the individual's
        intelligence. The Brainwonders I.Q. Test is a test which purports to
        assess a general level of ability of the person taking it. The
        intelligent quotient of the person is mapped by measuring the person's
        shown abilities against the general level of expected performance of
        people belonging to the same age and gender. The IQ test can be taken
        online or offline by anyone in three very simple steps:
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
      <button className="bg-[#022F46] text-white p-3 px-7 rounded-md mt-14">
        Find Out Your IQ Score
      </button>
    </div>
  );
};

const WhyIQTests = () => {
  return (
    <div className="py-8 px-4 md:px-10 bg-white text-gray-800" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-teal-900 mb-4 heading-font" style={{fontWeight:"600"}}>
        Why Our IQ Tests?
      </h2>
      <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px]">
        <li>
          It's the easiest way to learn your IQ score and which average IQ class
          you're in.
        </li>
        <li>
          You can discover your true cognitive potential and uncover your hidden
          talents.
        </li>
        <li>
          Unlike traditional IQ tests, it's quick, and you can learn your
          results instantly.
        </li>
        <li>
          It gives decent statistics about your problem-solving speed and time
          management skills.
        </li>
        <li>It provides comparative and detailed reports on your age group.</li>
        <li>
          Your results and certificate are archived safely. So you can access or
          share them again in the future.
        </li>
        <li>
          According to your test results, it gives you golden advice to improve
          your IQ Score.
        </li>
        <li>Your data is yours, and they are always well protected.</li>
      </ul>
    </div>
  );
};
