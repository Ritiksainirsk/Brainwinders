import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dunzo from "../../../src/assets/dunzo.png";
import Grindle from "../../assets/gridle.png";
import Ibm from "../../assets/ibm.png";
import Infosys from "../../assets/infosys.png";
import Peercoin from "../../assets/peercoin.png";
import Sprint from "../../assets/sprint.png";
import Verizon from "../../assets/verizon.png";
// import Yourstory from '../../assets/yourstory.webp'

export default function MediaMentions() {
  return (
    <div>
      {/* Media Mentions */}
      <h1 className="text-center font-bold text-2xl mt-11">Media Mentions</h1>

      <div className="flex flex-col items-center">
        <Carousel />
      </div>
      {/* Media Mentions */}

      {/* ASSOCIATED SCHOOLS */}
      <h1 className="text-center font-bold text-2xl my-12">ASSOCIATED SCHOOLS</h1>
      <div className="flex flex-col items-center mb-16">
        <Carousel2 />
      </div>
      {/* ASSOCIATED SCHOOLS */}

    </div>
  );
}

const Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
        <img src={Dunzo} alt="" className=" pl-10" />
        <img src={Grindle} alt="" className="pl-10" />
        <img src={Ibm} alt="" className="pl-10" />
        <img src={Infosys} alt="" className="pl-10" />
        <img src={Peercoin} alt="" className="pl-10" />
        <img src={Sprint} alt="" className="pl-10" />
        <img src={Verizon} alt="" className="pl-10" />
      </Slider>
    </div>
  );
};

const Carousel2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
        <img src={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzSQ3F-WLvrUYS-ociTD57MHATe4sBkwG5nGaeOjHStcWQWu7Q"} alt="" className=" pl-10" />
        <img src={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlno5slCcL8GsmE_BTfebbtyLHGpc9yTN2PLH8lvH3dN0BYiHz"} alt="" className="pl-10" />
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cV82B4UuDyT0ToMbtUzHN5b-khavLNTjWug81HOpYlrobTsr"} alt="" className="pl-10" />
        <img src={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHg6-coNMho6b2C6dHJUvU82Nmp-zTdarXaBlw2-QH0ybrefyp"} alt="" className="pl-10" />
      </Slider>
    </div>
  );
};
