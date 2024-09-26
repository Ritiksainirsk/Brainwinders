import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavItem } from "../Navbar";
import AnimatedSection from "../AnimatedSection";

const blogs = [
  {
    imageSrc:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9TI26JlcbeqOlyyE5ni-n95u4Q8XYBnWzAVqXcQkMU-wbhtzg", // Replace with actual image path
    title: "List of Courses after 10th Standard",
    date: "2023-02-06",
    description:
      "Are you feeling anxious and confused about the next steps to take after completing your Class 10th boards? It’s only natural to experience these types of feelings as a young person in India. If that’s why you’re readin...",
  },
  {
    imageSrc:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTBzcGDrOYWGKQIPeWWRCap30BflKZkGOfzxi0b85Pne8qjwFq", // Replace with actual image path
    title: "Top Diploma Courses after 10th in Science",
    date: "2023-05-13",
    description:
      "Just done with the class 10th and confused about selecting the right career path? Generally, it’s a turning point in every student’s life. As a result, taking the right career decision is very essential. If...",
  },
  {
    imageSrc:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2FmFJSVmDYtgrAFypO3Nx3k2bcsnwNGAW4VLU9o4tQ1j1Y_2l", // Replace with actual image path
    title: "CBSE Schools Near Me, List of Top 10 CBSE Schools of India",
    date: "2023-05-09",
    description:
      "Every parent wishes that their child must grow up in an environment that helps him or her to become a better person in the world. This dream can only be fulfilled if they get the best educational environment in their c...",
  },
];

export default function Blog() {
  const [activePage, setActivePage] = useState(window.location.pathname);
  return (
    <div>
      <div className="p-4 ">
        <h2 className="text-2xl md:text-[34px] font-semibold text-center mb-6 heading-font text-[#022F46]" style={{fontWeight:"700"}}>
          OUR BLOGS
        </h2>
        <AnimatedSection>
        <div className="flex justify-center gap-10 flex-wrap">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              imageSrc={blog.imageSrc}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          ))}
        </div>
        </AnimatedSection>
        <div className="text-center my-8">
          <NavItem
            to="/blog"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            <button className="bg-[#022F46] px-4 py-2 text-white rounded-lg">
              View All Blogs
            </button>
          </NavItem>
        </div>
      </div>
      {/* FAQ */}
      <div className="flex justify-center">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8LZpzbHv6LBMf5zbpg4n43DygbeSYn9Gcj00Jg1VE-cG-FVMx"
          alt="No image"
          className=" w-[28%]"
          width={120}
          height={120}
        />
      </div>
      {/* FAQ */}
    </div>
  );
}

const Card = ({ imageSrc, title, date, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 "
        width={120}
        height={120}
      />
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2 heading-font text-black">
          {title}
        </h4>
        <p className="text-sm mb-2 text-black">{date}</p>
        <p className="text-black mb-4">{description}</p>
      </div>
    </div>
  );
};
