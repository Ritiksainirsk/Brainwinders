import React from "react";
import SocialShare from "./SocialShare";

const ArticleSection = () => {
  return (
    <div className=" mx-auto p-6 " style={{ textAlign: "justify" }}>
      {/* Section Heading */}
      <h2 className="text-2xl font-bold mb-4 heading-font">
        B.Tech and BE: Clarity in Terminology
      </h2>

      {/* Article Text */}
      <p className=" mb-4 leading-7 md:text-[18px]">
        B.Tech stands for Bachelor of Technology, whereas BE stands for Bachelor
        of Engineering. There are a plethora of students who are in a dilemma
        regarding BE and B.Tech because both these degrees are almost similar,
        but that is not the case. Both the Bachelor of Technology and the
        Bachelor of Engineering degrees have their own distinctions and
        significance. In terms of study, the main difference between B.Tech and
        BE is that B.Tech focuses on realistic application, whereas BE aims to
        focus on theoretical knowledge applied to practical situations.
      </p>

      {/* Image */}
      <div className="my-8  md:max-w-4xl m-auto relative">
        {/* Social Share */}
        <div className="absolute top-0 left-[0px]  2xl:left-[-280px] h-screen flex items-start">
          <div className="">
            <SocialShare />
          </div>
        </div>
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3vYxL9l5uaANS-qGDsQcnANh9pJDTe1UowXKrd7IJP4V4HgMQ" // Replace with your image URL
          alt="Diploma Courses After 10th"
          className="w-full rounded-lg"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          This is an image or a video that can be used to enhance the
          Brainwonders blog.
        </p>
      </div>

      {/* Repeated Article Text */}
      <p className="md:text-[18px] mb-4 leading-7">
        B.Tech stands for Bachelor of Technology, whereas BE stands for Bachelor
        of Engineering. There are a plethora of students who are in a dilemma
        regarding BE and B.Tech because both these degrees are almost similar,
        but that is not the case. Both the Bachelor of Technology and the
        Bachelor of Engineering degrees have their own distinctions and
        significance. In terms of study, the main difference between B.Tech and
        BE is that B.Tech focuses on realistic application, whereas BE aims to
        focus on theoretical knowledge applied to practical situations.
      </p>

      {/* Call to Action Section */}
      <div className="bg-[#022F46] text-white text-center py-6 rounded-lg my-8 md:max-w-4xl m-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 heading-font">
          Have a Question?
        </h3>
        <p className="mb-4">Feel free to contact us.</p>
        <button className="bg-orange-500 px-4 py-2 rounded-full font-semibold">
          Ask Our Expert
        </button>
      </div>

      {/* Repeated Article Text */}
      <p className="md:text-[18px] mb-4 leading-7">
        B.Tech stands for Bachelor of Technology, whereas B.E stands for
        Bachelor of Engineering. There are a plethora of students who are in a
        dilemma regarding B.E and B.Tech because both these degrees are almost
        similar, but this is not the case. Both the Bachelor of Technology and
        the Bachelor of Engineering degrees have their own distinctions and
        significance. In terms of study, the main difference between B.Tech and
        B.E. is that B.Tech focuses on realistic application, whereas B.E. aims
        to focus on theoretical knowledge applied to practical situations.
        B.Tech stands for Bachelor of Technology, whereas B.E stands for
        Bachelor of Engineering. There are a plethora of students who are in a
        dilemma regarding B.E and B.Tech because both these degrees are almost
        similar, but this is not the case. Both the Bachelor of Technology and
        the Bachelor of Engineering degrees have their own distinctions and
        significance. In terms of study, the main difference between B.Tech and
        B.E. is that B.Tech focuses on realistic application, whereas B.E. aims
        to focus on theoretical knowledge applied to practical situations
      </p>

      {/* Promotional Section */}
      <div
        className="bg-gray-100  rounded-lg my-8 md:max-w-4xl m-auto bg-cover bg-center"
        style={{
          backgroundImage: `url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTm8XQfQ8XBlJf6Cm4MF81ApCegjVFAcH52N1iegXE1ItDsKWdI")`,
        }}
      >
        <div className="bg-[#ffffff74] bg-opacity-70 p-10 rounded-lg">
          <h3 className="text-lg font-bold mb-2">
            Find the Perfect College and Course Match!
          </h3>
          <p className="text-black mb-4">College and Course Match</p>
          <button className="bg-[#022F46] text-white px-4 py-2 rounded-full font-semibold">
            Chat with a Counselor
          </button>
        </div>
      </div>
      {/* Repeated Article Text */}
      <p className="md:text-[18px] mb-4 leading-7">
        B.Tech stands for Bachelor of Technology, whereas B.E stands for
        Bachelor of Engineering. There are a plethora of students who are in a
        dilemma regarding B.E and B.Tech because both these degrees are almost
        similar, but this is not the case. Both the Bachelor of Technology and
        the Bachelor of Engineering degrees have their own distinctions and
        significance. In terms of study, the main difference between B.Tech and
        B.E. is that B.Tech focuses on realistic application, whereas B.E. aims
        to focus on theoretical knowledge applied to practical situations.
        B.Tech stands for Bachelor of Technology, whereas B.E stands for
        Bachelor of Engineering. There are a plethora of students who are in a
        dilemma regarding B.E and B.Tech because both these degrees are almost
        similar, but this is not the case. Both the Bachelor of Technology and
        the Bachelor of Engineering degrees have their own distinctions and
        significance. In terms of study, the main difference between B.Tech and
        B.E. is that B.Tech focuses on realistic application, whereas B.E. aims
        to focus on theoretical knowledge applied to practical situations
      </p>
    </div>
  );
};

export default ArticleSection;
