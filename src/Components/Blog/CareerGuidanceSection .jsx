import React, { useState } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";

const CareerCard = ({ title, date, readTime, image, category }) => {
  // Create a slug from the title
  const slug = slugify(title, {
    lower: true, // Convert to lowercase
    strict: true, // Remove special characters
  });

  return (
    <div className="flex flex-col">
      <Link to={`/blog/${slug}`}>
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg object-cover mb-4 h-48 md:h-64"
          width={120}
          height={120}
        />
        <h3 className="md:text-xl text-lg font-bold">{title}</h3>
        <div className="md:flex justify-between items-center">
          <span className="inline-block bg-black text-white px-5 py-1 rounded-full text-sm font-medium my-2">
            {category}
          </span>
          <p className="text-gray-500 text-sm">
            {date} | {readTime}
          </p>
        </div>
      </Link>
    </div>
  );
};

const WhatCoursesAfter12th = () => {
  const whatCoursesAfter12thData = [
    {
      title: "Top Highest Salary Jobs After 12th Commerce Courses",
      date: "15 July, 2022",
      readTime: "4 min read",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRKlw1PmMff3bVdUkXYfJ7c54oOlqAsI_97RKXEaOy0nUJL34kC",
      category: "What Are Courses After 12th",
    },
    {
      title: "Top 10 Careers in Arts 2022 - Jobs, Courses, Top Recruiters",
      date: "15 July, 2022",
      readTime: "4 min read",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTloNnkKwzDacauXQuRbvRY-C_v_JMO7sOQtEx9dngRgR-5HdoR",
      category: "What Are Courses After 12th",
    },
    {
      title: "Top Engineering Colleges in India",
      date: "15 July, 2022",
      readTime: "5 min read",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzv8iTk9ccDP3VGtWgjwlJWy_TlG_QBiB4pCuQfn8YsgGUDIIC",
      category: "What Are Courses After 12th",
    },
  ];

  const CardsComponents = ({ mainTitle }) => {
    return (
      <>
        <div className="md:mb-20 mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="md:text-2xl text-xl font-bold heading-font">
              {mainTitle}
            </h2>
            <a href="#" className="text-black font-semibold md:text-lg">
              <Link to={"/blog/viewmore/:title"}>View all...</Link>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {whatCoursesAfter12thData.map((course, index) => (
              <CareerCard key={index} {...course} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <CardsComponents mainTitle={"Career Counselling & Guidance"} />
      <CardsComponents mainTitle={"Courses After 12th"} />
      <CardsComponents mainTitle={"Courses After 10th"} />
      <CardsComponents mainTitle={"Careers After 10th & 12th"} />
      <CardsComponents mainTitle={"DMIT Test"} />
      <CardsComponents mainTitle={"Psychometric Test"} />
    </>
  );
};

const ArtAndMedia = () => {
  // Array Data for ArtAndMedia
  const artAndMediaData = [
    {
      title: "Exploring Careers in Digital Media",
      date: "20 July, 2022",
      readTime: "6 min read",
      image: "https://via.placeholder.com/150",
      category: "Art And Media",
    },
    {
      title: "Top 10 Careers in Arts 2022 - Jobs, Courses, Top Recruiters",
      date: "15 July, 2022",
      readTime: "4 min read",
      image: "https://via.placeholder.com/150",
      category: "Art And Media",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {artAndMediaData.map((course, index) => (
          <CareerCard key={index} {...course} />
        ))}
      </div>
    </>
  );
};

// Similarly, create other components for different tabs/categories.

const CareerGuidanceSection = () => {
  const [activeTab, setActiveTab] = useState("What Are Courses After 12th");

  const filters = [
    { label: "Aptitude Test", count: 9 },
    { label: "Art And Media", count: 2 },
    { label: "Career Counselling", count: 49 },
    { label: "Career Guidance In India", count: 16 },
    { label: "DMIT Franchise", count: 7 },
    { label: "DMIT Test", count: 8 },
    { label: "Events And Exhibitions", count: 7 },
    { label: "Must Read", count: 35 },
    { label: "Online IQ Test", count: 10 },
    { label: "Psychology", count: 2 },
    { label: "Study Abroad", count: 2 },
    { label: "Sports and Rehabilitation", count: 3 },
    { label: "Careers", count: 44 },
    { label: "Which Course After 10th", count: 45 },
    { label: "School Associations", count: 9 },
    { label: "What Are Courses After 12th", count: 99 },
    { label: "Psychometric Test Online", count: 7 },
    { label: "Role of Parents in Career Selection", count: 6 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "What Are Courses After 12th":
        return <WhatCoursesAfter12th />;
      case "Art And Media":
        return <ArtAndMedia />;
      case "Career Counselling":
        return "";
      case "Career Guidance In India":
        return "";
      case "DMIT Franchise":
        return "";
      case "DMIT Test":
        return "";
      case "Events And Exhibitions":
        return "";
      case "Must Read":
        return "";
      case "Online IQ Test":
        return "";
      case "Psychology":
        return "";
      case "Study Abroad":
        return "";
      case "Sports and Rehabilitation":
        return "";
      case "Careers":
        return "";
      case "Which Course After 10th":
        return "";
      case "School Associations":
        return "";
      case "Psychometric Test Online":
        return "";
      case "Role of Parents in Career Selection":
        return "";
      // Add more cases for other components
      default:
        return null;
    }
  };

  return (
    <div className="py-8 px-4">
      {/* Filters Section */}
      <h2 className="text-2xl font-semibold mb-2 heading-font">Filters</h2>
      <div className="border-b-2 border-gray-200 mb-4"></div>{" "}
      {/* Line below heading */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(filter.label)} // Set active tab on click
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === filter.label
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>
      {renderContent()}
      <div className="text-center font-bold">
        <a href="" className="text-2xl ">
          <Link to={""}>View all....</Link>
        </a>
      </div>
    </div>
  );
};

export default CareerGuidanceSection;

// export default CareerGuidanceSection;
