import React from "react";
import BannerCard from "../DMit/BannerCard";

export default function CareerCounsellingHero() {
  return (
    <div>
      {/* this is hidden div of navbar */}
      <div className="topSpaceDiv"></div>
      {/* <<<<<<<< */}
      <CareerCounsellingVideo />

      {/*  */}
      <div>
        <CareerCounsellingHeroDescription />
      </div>
      {/*  */}

      {/*  */}
      <div className="mb-16">
        <h1 className="md:text-2xl font-bold text-center my-10">
          BENEFITS OF Career Counselling FOR ALL AGES!
        </h1>
        <CareerOptions />
      </div>
      {/*  */}

      {/*  */}
      <BannerCard />
      {/*  */}
    </div>
  );
}

const CareerCounsellingVideo = () => (
  <div className=" py-8 px-4 flex justify-center items-center">
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          GET THE RIGHT CAREER COUNSELLING
          <br />
          TO LEAP THROUGH YOUR CAREER
          <br />
        </h1>
        <h3 className="text-lg lg:text-xl mb-6">
          Take the world’s most-advanced Career Assessment Test
          <br />
          and Find your best Career, Course, and college
        </h3>
        <button className="bg-[#022F46] text-white py-2 px-4 rounded-lg">
          Take Counselling Now
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

const CareerCounsellingHeroDescription = () => {
  return (
    <div className="p-6 rounded-lg md:px-20">
      <h1 className="text-2xl font-bold text-center mb-4">
        WHAT IS CAREER COUNSELLING?
      </h1>
      <p className="text-gray-800 mb-4">
        Career Counselling is a process that helps you understand yourself and
        the world of work to make informed career, educational, and life
        decisions. It involves a structured interaction between the individual
        seeking guidance and an expert career counsellor or advisor. Career
        counsellors provide guidance, support, and resources to help individuals
        navigate these decisions. They help identify interests, abilities,
        values, and personality traits to match them to potential careers. They
        also provide information about the job market, education and training
        programs, and career paths.
      </p>
      <p className="text-gray-800">
        Career counsellors assist individuals in setting career goals and
        developing concrete action plans to achieve those goals. This involves
        identifying potential obstacles and developing strategies to overcome
        them. Additionally, they may provide resources for further education or
        training, job search techniques, resume writing, and interview
        preparation to enhance employability. Career counsellors offer ongoing
        support and encouragement throughout the career exploration and
        decision-making process, recognizing that career paths may evolve over
        time.
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
    <div className="flex lg:flex-row flex-col items-center lg:items-stretch mx-2 rounded-lg justify-center">
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
