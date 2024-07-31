import React from "react";
import "./css/DmitTest.css";

export default function DmitTest() {
  return (
    <div>
      {/* this is hidden div of navbar */}
      <div className="topSpaceDiv"></div>
      {/* <<<<<<<< */}
      <div className="">
        <DMTITestComponent />
      </div>
      {/*  */}
      <div>
        <DmttTestDescription />
      </div>
      {/*  */}
      {/*  */}
      <div className="mb-16">
        <h1 className="md:text-3xl font-bold text-center my-10">
          BENEFITS OF DMIT TEST FOR ALL AGES!
        </h1>
        <CareerOptions />
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
}

const DMTITestComponent = () => (
  <div className=" py-8 px-4 flex justify-center items-center">
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          DISCOVER YOUR INBORN POTENTIAL
          <br />
          AND SHINE WITH DMIT TEST
          <br />
          <span className="text-4xl">DMIT TEST</span>
        </h1>
        <h3 className="text-lg lg:text-xl mb-6">
          Take the world’s most-advanced Career Assessment Test
          <br />
          and Find your best Career, Course, and college
        </h3>
        <button className="bg-[#022F46] text-white py-2 px-4 rounded-lg">
          Get Your DMIT Test now
        </button>
      </div>
      <div className="w-[60%] xl:w-[40%]">
        <iframe
          className="w-full h-72 rounded-lg"
          src="https://www.youtube.com/embed/ISv2-cLrtnY"
          title="DMIT Test Video"
          allowFullScreen
        ></iframe>
        <p className="text-center text-sm mt-2">
          Watch the Founder & CEO of Brainwonders, Mr Manish Naidu, talk about
          its DMIT franchise model
        </p>
      </div>
    </div>
  </div>
);

const DmttTestDescription = () => {
  return (
    <div className=" mx-auto p-6 md:px-20">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
        WHAT IS DMIT TEST?
      </h2>
      <p className="mb-4">
        The{" "}
        <strong>
          full form of DMIT is the Dermatoglyphics Multiple Intelligence Test
          (DMIT)
        </strong>{" "}
        is a biometric analysis based on the scientific study of fingerprints.
        It is useful for all age groups and helps understand an individual’s
        potential, personality type, SWOT analysis, learning style, career
        introspection, and more. DMIT is particularly beneficial for parents and
        teachers, providing insights into a child's innate strengths and areas
        that need development. Using information from the child's biometrics,
        the DMIT assessment offers actionable insights and appropriate career
        recommendations.
      </p>
      <p className="mb-4">
        Dermatoglyphics is the study of the patterns of skin ridges on human
        fingers, toes, and soles. It reveals the congenital links between our
        fingers and our intrinsic qualities and talents. These patterns are
        formed from the external ectoderm and typically develop during the fetal
        stage, with fingerprints forming between the 13th and 21st weeks.
      </p>
      <p className="mb-4">
        Medical experts and scientists have discovered that the distribution of
        brain cells in different parts of the brain can be understood through
        the DMIT test. This helps reveal a person's multiple intelligences,
        innate potential capabilities, and personality.
      </p>
      <p className="font-bold">
        Our fingerprints reveal what we need and how we learn, transforming our
        lives through a holistic education approach.
      </p>
    </div>
  );
};

const CareerOptions = () => {
  const cards = [
    {
      title: "DMIT Test for Toddlers (1-4 years)",
      description: "Helps parents make decisions on understanding the child's behavior, parenting styles, and apt teaching methods.",
      buttonText: "Explore Now",
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
      iconColor: "#FFD772",
    },
    {
      title: "DMIT Test for Children (4-10 years)",
      description:
        "Understanding their learning styles and intelligence profiles to explore their strengths.",
      buttonText: "Know Yourself Better",
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGY2l14zUv0XW6odm081SYYwR65zTesUruyUDWZAT2Qz3eppf4",
      iconColor: "#9BC9FF",
    },
    {
      title: "DMIT Test for Students (11 to 17 years)",
      description:
        "Highlights the innate primary and secondary learning styles.",
      buttonText: "Professional Guidance",
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTsNMl0KBQhToPa0Ux-hNggAjvKNCyObZ4-T0X0TSGlqvaA-caX",
      iconColor: "#FFB1CC",
    },
    {
      title: "DMIT Test for Career Guidance (18 years and above)",
      description:
        "Boosts professional growth and ensures success on the job.",
      buttonText: "India or Abroad",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuG7gyuVrX-6QEsKfLznnXQgNxoBvs1zO5UKcabWalDrb_uQKo",
      iconColor: "#C8BBFF",
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col items-center lg:items-stretch mx-2 rounded-lg justify-center ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[25rem] lg:w-[350px] card relative p-6 bg-white overflow-hidden sm:border-[1px] border-gray lg:border-l-[1px] rounded-none"
        >
          <div className="relative z-10">
            <div className="mb-4">
              <div
                style={{ background: `${card.iconColor}` }}
                className="rounded-full w-20 h-20"
              >
                <img src={card.icon} alt="" className="rounded-full w-full h-full object-cover"/>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
            <button className="mt-4 text-blue-700 font-semibold">
              {card.buttonText} &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
