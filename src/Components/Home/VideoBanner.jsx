import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    videoSrc: "https://www.youtube.com/embed/JCXuG61F018",
    name: "Jagjit Roy",
    description: "A happy Parent Suggest About Brainwonders DMT.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/wyq1QXPfTOk",
    name: "Pradeep & Ranjan",
    description: "A happy Parent Suggest About Brainwonders DMT.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/aTsS0hJe4zE",
    name: "Siddharth & Deepali Sharma",
    description: "A happy Parent Suggest About Brainwonders DMT.",
  },
  // Add more testimonials as needed
];

export default function VideoBanner() {
  return (
    <div>
      <div className="p-4 py-11 bg-[#E7E6E9] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-center mb-3">
          What people are saying about us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Watch People from Different Backgrounds talk about their experience
          with Brainwonders.
        </p>
          <Carousel/>
      </div>
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
      autoplaySpeed: 3000,
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
          {testimonials.map((testimonial, index) => (
              <Card key={index} name={testimonial.name} videoSrc={testimonial.videoSrc} description={testimonial.description} />
          ))}
        </Slider>
      </div>
    );
  };



const Card = ({ videoSrc, name, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mr-10">
      <div className="relative pb-9/16">
        <iframe
          className=" w-full h-full"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={name}
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
