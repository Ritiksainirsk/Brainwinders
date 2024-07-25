import React from "react";
import { FaStar } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <img
              alt="dmit-and-career-counselling-company"
              src="https://www.brainwonders.in/images/banner-image-bw-home.webp"
              data-src="https://www.brainwonders.in/images/banner-image-bw-home.webp"
              width="100%"
              data-done="Loaded"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-[-20px]">
          <div className="bg-[#022F46] px-10 py-10  rounded-bl-[49px]">
            <div className="text-white flex flex-col items-center gap-4 justify-center">
              <div className="stars flex gap-5">
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
              </div>
              <p className="text-xl text-center">
                Only company in the world to have U.S Patent for DMIT{" "}
              </p>
            </div>
          </div>

          <div className="bg-[#022F46] px-10 py-10 rounded-bl-[49px]">
            <div className="text-white flex flex-col items-center gap-4 justify-center">
              <div className="stars flex gap-5">
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
              </div>
              <h1 className="text-xl text-center">
                India’s largest Career Counselling and Guidance Company{" "}
              </h1>
            </div>
          </div>

          <div className="bg-[#022F46] px-10 py-10 rounded-bl-[49px]">
            <div className="text-white flex flex-col items-center gap-4 justify-center">
              <div className="stars flex gap-5">
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
              </div>
              <p className="text-xl text-center">
                Product Quality Audit Certificate by Early Childhood Association
                of India{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold my-14">
            Awards and Recognition
          </h1>
          <Carousel />
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
  );
}

const Card = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col md:flex-row ">
      <div className="md:w-2/3 p-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800">The World's Most Accurate Career Test</h2>
        <p className="mt-4 text-gray-600 text-center">
          Take our well researched, accurate DMIT test to make the right education, skill and career choice.
        </p>
        <button className="mt-6 px-6 py-2 text-[14px] bg-[#022F46] text-white rounded-2xl hover:bg-[#022f469d]">
          Read More
        </button>
      </div>
      <div className="md:w-[50%] p-6 aspect-w-16 aspect-h-9 h-72">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wyq1QXPfTOk"
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
    <div className="max-w-screen-lg w-full ">
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
      <div className="flex justify-center items-center text-center ml-8">
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
