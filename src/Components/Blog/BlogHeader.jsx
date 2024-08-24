import React from "react";
import BackgroundImage from "../../assets/blogHeader.jpg";

const BlogHeader = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[50vh] md:h-[70vh] flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="text-center flex flex-col gap-2">
        <h1
          className="text-3xl md:text-5xl font-bold text-white heading-font"
          style={{ letterSpacing: "5px" }}
        >
          Brainwonders Blogs
        </h1>
        <p className="text-lg md:text-xl text-white mt-2 md:flex md:flex-col">
          Discover about a variety of topics to careers, courses & industries
          and get useful in-depth
          <span>
          information.
          </span>
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-l-full w-full md:w-96 outline-none"
          />
          <button className="bg-[#022F46] text-white px-4 py-2 rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
