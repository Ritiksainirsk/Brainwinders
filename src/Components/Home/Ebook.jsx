import React from "react";

import { MdOutlineFileDownload } from "react-icons/md";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mb-8">
      <div className="text-center my-8"> 
        <h1 className="text-2xl md:text-3xl font-bold mb-2 heading-font">
          E-Book and Sample Paper
        </h1>
      </div>
      <div className=" lg:mx-6">
        <Carousel
          responsive={responsive}
          className="p-8"
          infinite={true}
          autoPlay={true}
          transitionDuration={500}
          autoPlaySpeed={2000}
        >
          {cards.map((card, index) => {
            return (
              <>
                <Card
                  key={index}
                  title={card.title}
                  category={card.category}
                  downloads={card.downloads}
                  image={card.image}
                />
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

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
