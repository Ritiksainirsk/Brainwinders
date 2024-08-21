import React, { useState } from "react";

const tags = [
  "Arts And Humanities Jobs List",
  "Career In Humanities In India",
  "Career Options For Humanities Students",
  "Career Options In Humanities",
  "Career Options In Humanities With Economics",
  "Career Options In Humanities With Maths",
  "Career Options In Humanities With Psychology",
  "Career Options In Humanities Without Maths",
  "High Paying Humanities Jobs",
  "Humanities Jobs List",
  "Humanities Major Courses",
  "Scope Of Humanities And Social Sciences",
  "Scope Of Humanities In India",
  "Scope Of Humanities In Future",
  "Social Science Careers In Today's Job Market",
  "What Is The Scope Of Humanities Stream",
];

const TagTabs = () => {
  const [activeTag, setActiveTag] = useState(tags[0]);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <div className="p-4 mt-8">
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="inline-block bg-[#022F46] text-white font-semibold px-4 py-2 pt-[10px] relative mr-6 text-sm">
          TAGS
          <div
            className="absolute right-0 top-[-2px] h-full w-0 border-y-[22px] border-y-transparent border-l-[22px] border-l-[#022F46]"
            style={{ transform: "translateX(100%)" }}
          ></div>
        </div>
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`px-4 border-2 py-2 rounded-full text-sm font-semibold shadow-sm flex items-center transition-colors duration-200 ${
              activeTag === tag
                ? "bg-[#022F46] text-white"
                : "bg-white text-black hover:bg-[#022F46] hover:text-white"
            }`}
          >
            {tag} <span className="ml-2"> &rsaquo; </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagTabs;
