import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import { PiPhoneCallFill } from "react-icons/pi";

import "animate.css";

const NavItem = ({ to, children, setActivePage, activePage }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={to}
        onClick={() => setActivePage(to)}
        className={` px-5 py-2 rounded-lg ${
          activePage === to ? "bg-[#022F46] text-white" : "text-[#022F46]"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navbar() {
  const [activePage, setActivePage] = useState(window.location.pathname);

  return (
    <div>
      <div className="navbar bg-base-100 px-10 navResponsive shadow-lg fixed z-50">
        <div className="navbar-center">
          <a className="">
            <img src="https://www.brainwonders.in/images/logo.webp" />
          </a>
        </div>

        <div className="flex justify-center socialIcons ">
          <div className="flex text-center items-center lg:gap-12 px-7 w-auto text-sm flex-col lg:flex-row gap-0">
            <a href="/" className="hover:underline font-bold">
              +914565859568
            </a>
            <button className="bg-[#022F46] text-white py-1 w-44 rounded-lg">
              Book an Appointment
            </button>
          </div>
          <div className="flex">
            <button className="btn btn-ghost btn-circle">
              <FaFacebook />
            </button>
            <button className="btn btn-ghost btn-circle">
              <FaTwitter />
            </button>
            <button className="btn btn-ghost btn-circle">
              <FaInstagram />
            </button>
            <button className="btn btn-ghost btn-circle">
              <FaYoutube />
            </button>
            <button className="btn btn-ghost btn-circle">
              <FaLinkedin />
            </button>
          </div>
        </div>

        {/*  */}

        <PiPhoneCallFill className="text-2xl bounce hidden lg:block fixed top-7 right-8" />

        {/*  */}
        <div className="navbar-start block dropdownMenu ml-[-55px]">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavItem
                to="/"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Home
              </NavItem>
              <NavItem
                to="/dmit"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Dmit
              </NavItem>
              <NavItem
                to="/careercounselling"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Career Counselling
              </NavItem>
              <NavItem
                to="/psychometrictest"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Psychometric Test
              </NavItem>
              <NavItem
                to="/interesttest"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Interest Test
              </NavItem>
              <NavItem
                to="/franchise"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Franchise
              </NavItem>
              <NavItem
                to="/gallery"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Gallery
              </NavItem>
              <NavItem
                to="/aboutus"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                About Us
              </NavItem>
              <NavItem
                to="/blog"
                setActivePage={setActivePage}
                activePage={activePage}
              >
                Blog
              </NavItem>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------>>>>>>>>>>>>>>>>>>>>> */}
      <nav className="p-4 py-7 pt-24 flex justify-center belowNav">
        <ul className="flex px-4">
          <NavItem to="/" setActivePage={setActivePage} activePage={activePage}>
            Home
          </NavItem>
          <NavItem
            to="/blog"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            Blog
          </NavItem>
          <NavItem
            to="/dmit"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            Dmit
          </NavItem>
          <NavItem
            to="/careercounselling"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            Career Counselling
          </NavItem>
          <NavItem
            to="/psychometrictest"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            Psychometric Test
          </NavItem>
          <NavItem
            to="/interesttest"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            Interest Test
          </NavItem>
          <NavItem
            to="/franchise"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            Franchise
          </NavItem>
          <NavItem
            to="/gallery"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            Gallery
          </NavItem>
          <NavItem
            to="/aboutus"
            setActivePage={setActivePage}
            activePage={activePage}
          >
            About Us
          </NavItem>
        </ul>
      </nav>
      {/*<<<<<<<<<<---------------------  */}
    </div>
  );
}
