import React from "react";
import { FaStar } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";

const awards = [
  {
    title: "Excellence in Career Counselling",
    subtitle: "Indian School Conclave - 2018, 2019",
  },
  {
    title: "Best in Student Counselling",
    subtitle: "Indian School Conclave 2018, 2019, 2020",
  },
  {
    title: "Contribution in Educational ",
    subtitle: "Education Merit Awards 2017, 2018, 2019, 2020",
  },
];

const achievements = [
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnASZ9BEKu4hUZVVyW3AwxQictINHqswS0EbF-LA4vQnY-Oze",
    count: 250000,
    label: "Students Guided",
  },
  {
    icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2TeWt2WLV3N4x_SOF7_T_9gvMD78S1SDkz_MMv2TSBou5YUvV",
    count: 120,
    label: "Admission in Top Colleges",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexoxRRVtRJwjk3RSTl0_KqWt1SoKSvCwA0ZC_CjcasR_oem2R",
    count: 40000,
    label: "Scholarships",
  },
  {
    icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsDIToc2NCNgyEKOkCqe0CBv-cZdYU2rr0NqKEPadcLbflczxa",
    count: 250,
    label: "Diverse Careers",
  },
];
export default function Hero() {
  return (
    <>
      {/* this is hidden div of navbar */}
      <div className="topSpaceDiv"></div>
      {/* <<<<<<<< */}
      
      <div className="flex flex-col justify-center items-center">
        <div className="container">
          <BannerComponent />

          {/*  */}
          <div className="pt-5 px-5">
            <h2 className=" text-2xl md:text-3xl font-bold mb-2 text-center">
              BRAINWONDERS ACHIEVEMENTS
            </h2>
            <div className="flex overflow-x-scroll justify-center">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  icon={achievement.icon}
                  count={achievement.count}
                  label={achievement.label}
                />
              ))}
            </div>
          </div>
          {/*  */}

          {/* Carousel */}
          <div className="mb-7">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-semibold my-14">
                Awards and Recognition
              </h1>
            </div>
            <div className="px-8 md:px-20">
              <Marquee speed={50} direction="left">
                <div className="flex justify-center">
                  {awards.map((award, index) => (
                    <AwardCard
                      key={index}
                      title={award.title}
                      desc={award.subtitle}
                    />
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
          {/* Carousel */}

          {/*  */}
          <div className="text-center text-[22px] font-bold py-[5%] px-[15%] leading-[38px]">
            <p className="">
              We at Brainwonders, India's Largest Career Counselling and DMIT
              Company, strive to help you make an informed decision about your
              career. Based on the analysis you opt for, we assist you in
              understanding your or your child's capabilities better.{" "}
            </p>
          </div>
        </div>
        {/*  */}
        <br />

        <div className="flex items-center justify-center w-full bg-[#F7F5FF] px-10">
          <Card />
        </div>
      </div>
    </>
  );
}

const Card = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col md:flex-row ">
      <div className="md:w-2/3 p-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          The World's Most Accurate Career Test
        </h2>
        <p className="mt-4 text-gray-600 text-center">
          Take our well researched, accurate DMIT test to make the right
          education, skill and career choice.
        </p>
        <button className="mt-6 px-6 py-2 text-[14px] bg-[#022F46] text-white rounded-2xl hover:bg-[#022f469d]">
          Read More
        </button>
      </div>
      <div className="md:w-[50%] p-6 aspect-w-16 aspect-h-9 h-72">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Uh_-gRHLo6k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg w-full">
      <Slider {...settings}>
        {awards.map((award, index) => (
          <AwardCard key={index} title={award.title} desc={award.subtitle} />
        ))}
      </Slider>
    </div>
  );
};

const AwardCard = ({ title, desc }) => {
  return (
    <>
      <div className="flex justify-center items-center text-center ml-8 w-72">
        <img
          decoding="async"
          width="60"
          height="132"
          src="https://www.parmsingh.ca/wp-content/uploads/2023/11/VectorElementLeft.svg"
          alt=""
        />
        <div>
          <div>
            <div>
              <div>
                <h2 className="font-bold text-[18px]">{title}</h2>
              </div>
            </div>
            <div>
              <div className="text-[15px] text-[#7A7A7A]">
                <p>“{desc}"</p>
              </div>
            </div>
          </div>
        </div>
        <img
          decoding="async"
          width="60"
          height="132"
          src="https://www.parmsingh.ca/wp-content/uploads/2023/11/VectorElement1.svg"
          alt=""
        />
      </div>
    </>
  );
};

const BannerComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-9 md:gap-56 p-6 bg-white">
      <div className="max-w-md">
        <p className="text-sm text-gray-500">TRUSTED BY 4,30,000+ USERS</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#022F46] mt-2">
          TO ACHIEVE OUR GOALS WE MUST KNOW OUR STRENGTHS!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Become self aware. A DMIT Test helps you to identify your Personality,
          Areas of Interest, and Aptitude level and IQ.
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="bg-[#022F46] text-white px-2 md:px-4 py-2 rounded">
            Get Your DMIT Test now
          </button>
          <button className="bg-[#022F46] text-white px-2 md:px-4 py-2 rounded">
            Connect Us
          </button>
        </div>
      </div>
      <div className="md:w-96 lg:w-56">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGZQQObCw82zB9DPtPkJYkOuPvHY4Qu_UeaUkOhMyb6uFQAUux" // Replace with your image URL
          alt="Banner"
          className="w-full"
        />
      </div>
    </div>
  );
};

const AchievementCard = ({ icon, count, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 lg:p-6 m-4 flex flex-col lg:flex-row justify-center items-center gap-3">
      <div className="mb-2 lg:mb-0">
        <img src={icon} alt={label} className="w-10 h-10 lg:w-10 lg:h-10" />
      </div>
      <div className="flex flex-col items-start lg:text-left">
        <h3 className=" lg:text-2xl font-bold" ref={ref}>
          {inView ? <CountUp start={0} end={count} duration={7} /> : "0"}
        </h3>
        <p className="text-gray-600 text-sm lg:text-lg">{label}</p>
      </div>
    </div>
  );
};
