import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function DmitNavbar() {
  const loc = useLocation();

  console.log();

  const navItems = [
    "DMIT for Toddlers",
    "DMIT for Children",
    "DMIT for Teenagers",
    "DMIT for Adults (25+)",
    "DMIT for Corporates",
  ];

  return (
    <>
      <div className="bg-[#043E56] rounded-lg p-2 my-4 ">
        <ul className="flex justify-around flex-col gap-3 md:gap-0 items-center md:flex-row">
          {navItems.map((item, index) => (
            <li key={index} className="text-white text-lg font-semibold">
              <button className="relative group">
                <Link
                  to={
                    item === "DMIT for Toddlers"
                      ? ""
                      : "" || item === "DMIT for Children"
                      ? `/dmit/dmitforchildern`
                      : "" || item === "DMIT for Teenagers"
                      ? ""
                      : "" || item === "DMIT for Adults (25+)"
                      ? ""
                      : "" || item === "DMIT for Corporates"
                      ? ""
                      : ""
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
