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
        <h1 className="md:text-2xl font-bold text-center my-10">
          BENEFITS OF DMIT TEST FOR ALL AGES!
        </h1>
        <CareerOptions />
      </div>
      {/*  */}
      {/*  */}
      <div className="mb-16">
        <DmTests/>
      </div>
      {/*  */}
    </div>
  );
}

const DMTITestComponent = () => (
  <div className="bg-gray-100 py-8 px-4 flex justify-center items-center">
    <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-8">
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
      <div className="w-full lg:w-1/2">
        <iframe
          className="w-full h-64 rounded-lg"
          src="https://www.youtube.com/embed/Uh_-gRHLo6k"
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
      <h2 className="text-2xl font-bold text-center mb-4">
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
      title: "Pool of 5+ career choices",
      description: "Find the perfect career pathway that's just right for you",
      buttonText: "Explore Now",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/straight.webp",
      iconColor: "#FFD772",
    },
    {
      title: "Personalised Assessment",
      description:
        "Helps you to identify your Personality, Areas of Interest and Aptitude Level.",
      buttonText: "Know Yourself Better",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/evaluation.webp",
      iconColor: "#9BC9FF",
    },
    {
      title: "Chat With Real Experts",
      description:
        "Interact with Real Counselors, not Bots. Get answers for your quick career-related questions.",
      buttonText: "Professional Guidance",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/help-1.webp",
      iconColor: "#FFB1CC",
    },
    {
      title: "Pick The Right College",
      description:
        "We’ll help you choose the perfect college fit in India or Abroad.",
      buttonText: "India or Abroad",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/graduate.webp",
      iconColor: "#C8BBFF",
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col items-center lg:items-stretch mx-2 rounded-lg lg:border-2 lg:border-gray ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[25rem] lg:w-[300px] card relative p-6 bg-white overflow-hidden sm:border-[1px] border-gray lg:border-l-[1px] rounded-none"
        >
          <div className="relative z-10">
            <div className="mb-4">
              <div
                style={{ background: `${card.iconColor}` }}
                className="text-white p-2 rounded-full w-12 h-12 flex items-center justify-center"
              >
                <img src={card.icon} alt="" />
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

const DmTests = () => {
  const tests = [
    {
      title: "DMIT Test for Toddlers (1-4 years)",
      description:
        "Helps parents make decisions on understanding the child's behavior, parenting styles, and apt teaching methods.",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
    },
    {
      title: "DMIT Test for Children (4-10 years)",
      description:
        "Understanding their learning styles and intelligence profiles to explore their strengths.",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGY2l14zUv0XW6odm081SYYwR65zTesUruyUDWZAT2Qz3eppf4",
    },
    {
      title: "DMIT Test for Students (11 to 17 years)",
      description:
        "Highlights the innate primary and secondary learning styles.",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTsNMl0KBQhToPa0Ux-hNggAjvKNCyObZ4-T0X0TSGlqvaA-caX",
    },
    {
      title: "DMIT Test for Career Guidance (18 years and above)",
      description: "Boosts professional growth and ensures success on the job.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuG7gyuVrX-6QEsKfLznnXQgNxoBvs1zO5UKcabWalDrb_uQKo",
    },
    {
      title: "DMIT Test for Adult (25 years and above)",
      description:
        "Nurtures personal management and fosters social relationships.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4iiu98uczFUIyiu1k_RK2tZ4GtlGY5OAKaaW12HwXC8xhoKk",
    },
    {
      title: "DMIT Test for Institutional (All ages)",
      description:
        "Provides valuable insights on student-teacher dynamics and organization growth.",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRr32UKvo3htclj5II8XhdMzgbMsoY9u2jG42jOjAaleogqIZmu",
    },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tests.map((test, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-3 items-center bg-white p-4 rounded-lg shadow-md"
          >
            <img
              src={test.image}
              alt={test.title}
              className="w-56 h-36 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 className="font-bold text-xl mb-2">{test.title}</h3>
              <p className="text-gray-600">{test.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
