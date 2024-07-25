import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "DMIT Test",
    subtitle:
      "DMIT is the best tool powered by biometrics and genetic intelligence to map all the traits & talents",
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSROsO2ca-Nj1lKtHD3ChaK9pj3hPPmuCaAi_XUZ2EN2cwnPEja",
  },
  {
    title: "Career Counslling",
    subtitle:
      "clear the confusion and build a career with confidence, based on personal abilities and current trends",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Afaatpbn0nhfnbgayDPIt0nGSGL7Z84q3w&s",
  },
  {
    title: "Ideal Career Test",
    subtitle:
      "clear the confusion and build a career with confidence, based on personal abilities and current trends",
    url: "https://www.innvictisedutech.com/img/psyc/ideal-career-test-1.jpg",
  },
  {
    title: "Psychometric Test",
    subtitle:
      "The test report will help you to explore career in order to get started in career search or change of career",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEpW-sx5IXHcT46QKgBMtbp6JJF0T4VKDdg&s",
  },
  {
    title: "Aptitide Test",
    subtitle:
      "measures work value congnitive abilities traits for shaping personal, social and profession growth.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDg5RWnDUTHjk7KP6LKoMjzhh9OWAUrQbNEg&s",
  },
  {
    title: "Personalit Test",
    subtitle:
      "Thoughtts, behaviour, relation, emotional regulation and more-decoded and defined.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAucPWqnvbfFqhGJ1PN87asJ7qfe7lPloEw&s",
  },
  {
    title: "IQ Test",
    subtitle:
      "A standardisted way to measure the human intelligence and capability as per their age and acquired learning.",
    url: "https://lifepsych.com.au/wp-content/uploads/2020/10/4336432A-88E0-4A05-A47B-EE8BD71D94CE-scaled-1.jpeg",
  },
  {
    title: "Interest Test",
    subtitle:
      "Intrest Inventory analyses the aspects and fields that privide long term satisfaction to the person.",
    url: "https://www.brainwonders.in/page_images/2020-11-12-10-38-152020-08-27-22-19-52banner-image_(2).webp",
  },
];

export default function Services() {
  return (
    <div>
      {/* Carousel */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold my-14 px-8 lg:px-80 text-center">
          How does Brainwonders services help you to sucess in your career?
        </h1>
        <Carousel />
      </div>
      {/* Carousel */}

      {/* midel form banner */}
      <div className="flex items-center justify-center my-16">
        <Banner />
      </div>
      {/*  midel form banner */}

    </div>
  );
}

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
        {items.map((item, index) => (
          <Card title={item.title} desc={item.subtitle} url={item.url} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ title, desc, url }) => {
  return (
    <div className="max-w-xs mx-auto ml-5 bg-white rounded-[3.8rem] border-gray-400 border-2 overflow-hidden p-4 text-center">
      <img className="w-24 h-24 mx-auto" src={url} alt="DMIT Test" />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{desc}</p>
      <button className="mt-4 py-2 font-bold">Read More</button>
    </div>
  );
};

//
const Banner = () => {
  return (
    <div className="w-full bg-[#022F46] text-white p-6 shadow-lg flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold">
          Take the first step towards career clarity!
        </h2>
        <p className="mt-2">
          Discover your best-fit career with the world's most-advanced career
          assessment
        </p>
        <form className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-1/3 p-2 rounded border border-gray-300 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-1/3 p-2 rounded border border-gray-300 text-black"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full md:w-1/3 p-2 rounded border border-gray-300 text-black"
          />
        </form>
      </div>
      <div className="md:w-64 mt-4 md:mt-0 flex justify-center">
        <img
          src="https://img.freepik.com/premium-vector/psychological-counseling-concept-psychological-assistance-service-online-mobile-phone-therapist-is-helping-patient-cope-with-stressful-situation-vector-illustration-flat_186332-1291.jpg?w=900"
          alt="Career Clarity"
          className="w-full md:w-auto rounded-full"
        />
      </div>
    </div>
  );
};
