import React from "react";

import { MdOutlineFileDownload } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    title: "CBSE Class 10 Maths Basic Question Paper",
    category: "Sample Papers",
    downloads: 0,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/6/320631422/GR/PT/RF/32502166/maths-book-for-class-10th.jpeg",
  },
  {
    title: "PSEB Class 10 Sangeet Vadan Syllabus 2023-24",
    category: "E-Books",
    downloads: 8,
    image:
      "https://m.media-amazon.com/images/I/51P0WRHuOQL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "PSEB Class 10 Hindi A Question Paper 2023",
    category: "Sample-Paper",
    downloads: 6,
    image:
      "https://m.media-amazon.com/images/I/51kz4c4pHyS._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "PSEB Class 10 Science A Question 2023",
    category: "E-Book",
    downloads: 5,
    image:
      "https://grbathla.com/wp-content/uploads/2020/10/Sugam-Science-10-Final-back.jpg",
  },
  {
    title: "PSEB Class 10 Panjabi-B Syllabus 2023",
    category: "Sample-Paper",
    downloads: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNbbrwan8HIHCzI0MDm-6SUnlvK2CjD0Dhw&s",
  },
  // Add more cards as needed
];

export default function Ebook() {
  return (
    <div className="">
      <div className="text-center my-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          E-Book and Sample Paper
        </h1>
      </div>
      <div className="flex justify-center items-center ">
        <Carousel />
      </div>
    </div>
  );
}

const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, background: "gray", borderRadius: "50%" }}
    onClick={onClick}
  />
);

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
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
    <div className=" max-w-screen-lg w-full mx-auto">
      <Slider {...settings}>
        {cards.map((card, index) => {
          return (
            <div key={index} className="p-4 ml-16 md:ml-0">
              <Card
                title={card.title}
                category={card.category}
                downloads={card.downloads}
                image={card.image}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const Card = ({ title, category, downloads, image }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-4 w-72 border-2 border-gray-200">
      <span className="absolute top-[-13px] left-4 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
        {category}
      </span>
      <div className="flex gap-3">
        <img src={image} alt="Ebook" className="w-20 h-16 rounded" />
        <div>
          <h3 className="mt-4 text-sm font-semibold">{title}</h3>
        </div>
      </div>
      <p className="text-gray-500 text-xs flex gap-2 items-center mt-2">
        <MdOutlineFileDownload className="text-xl" />
        {downloads} Downloads
      </p>
    </div>
  );
};
