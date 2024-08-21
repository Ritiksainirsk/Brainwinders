import React from "react";

const ContentSection = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Read Aloud Button */}
      <div className="flex items-center mb-6">
        <button className="flex items-center bg-[#022F46] text-white px-4 py-2 rounded-lg font-semibold text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-4.5-2.666A1 1 0 009 9.4v5.2a1 1 0 001.252.898l4.5-2.666a1 1 0 000-1.764z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.502 11.168l-4.5-2.666A1 1 0 0015 9.4v5.2a1 1 0 001.252.898l4.5-2.666a1 1 0 000-1.764z"
            />
          </svg>
          Read Aloud
        </button>
      </div>

      {/* Main Content */}
      <p
        className="text-black text-base md:text-[18px] leading-7 mb-6"
        style={{ textAlign: "justify" }}
      >
        The most obvious question that engineering course applicants come across
        is the difference between B.Tech and B.E. If you would ask if they
        differ only in terms of names or in terms of their course syllabus also,
        here in this blog we have mentioned the possible doubts which will clear
        your clutter and give you a picturesque idea of what these courses are
        all about. In the engineering discipline, both these courses are equally
        equivalent and valuable. As a result, one can begin a career in one of
        the courses, which will undoubtedly assist one in reaching the key to
        success.
      </p>

      {/* Table of Contents */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Table of Contents:</h3>
        <ul className="list-decimal md:text-lg pl-6 text-blue-700">
          <li>
            <a href="#" className="hover:underline">
              B.Tech and B.E: Clarity in Terminology
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              B.Tech and B.E: Fundamental Facts
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              B.Tech and B.E: Eligibility Criteria
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              B.Tech and B.E: Duration
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              B.Tech and B.E: Popular Specialisation
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              B.Tech and B.E: Top Recruiters
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentSection;
