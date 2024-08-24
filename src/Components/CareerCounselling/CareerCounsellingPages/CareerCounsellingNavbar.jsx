import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CareerCounsellingNavbar() {
  const loc = useLocation();

  const navItems = [
    "Career Guidance for Class 8th & 9th",
    "Career Guidance for class 10th & 12th",
    "Career Guidance after 12th",
    "Career Guidance after Graduation",
  ];

  return (
    <>
      <div className="bg-[#043E56] p-2 ">
        <ul className="flex justify-around flex-col gap-3 md:gap-0 items-center md:flex-row">
          {navItems.map((item, index) => (
            <li key={index} className="text-white md:text-lg font-semibold">
              <button className="relative group">
                <Link
                  to={
                    item === "Career Guidance for Class 8th & 9th"
                      ? ""
                      : "" || item === "Career Guidance for class 10th & 12th"
                      ? `/careercounselling/careerGuidanceforclass10th&12th`
                      : "" || item === "Career Guidance after 12th"
                      ? ""
                      : "" || item === "Career Guidance after Graduation"
                      ? ""
                      :""
                  }
                >
                  {item}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
