import React, { useRef, useState } from "react";

import { IoMenu } from "react-icons/io5";

import { Link, useLocation } from "react-router-dom";

import { PiPhoneCallFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import "animate.css";

const NavItem = ({
  to,
  children,
  setActivePage,
  activePage,
  handleItemClick,
}) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={to}
        onClick={() => {
          setActivePage(to);
          handleItemClick();
        }}
        className={` px-3 py-2 rounded-lg ${
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

  // this for dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    // Close the dropdown when an item is clicked
    setIsOpen(false);
  };
  // <<<<<<<<------------------

  return (
    <div>
      <div className="navbar bg-white px-10 navResponsive shadow-lg fixed z-50">
        <div className="navbar-center">
          <a className="">
            <img src="https://www.brainwonders.in/images/logo.webp" />
          </a>
        </div>

        {/* ------------------>>>>>>>>>>>>>>>>>>>>> */}
        <nav className="p-4 flex justify-center belowNav">
          <ul className="flex">
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
              to="/blog"
              setActivePage={setActivePage}
              activePage={activePage}
            >
              Blog
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

        <div className="flex text-center items-center lg:gap-12 w-auto text-sm flex-col lg:flex-row gap-0">
          <button className="bg-[#022F46] text-white py-1 w-44 rounded-lg bookAnAppointment ">
            Book an Appointment
          </button>
        </div>

        {/*  */}
        <PiPhoneCallFill className="text-2xl bounce hidden lg:block fixed top-7 right-8" />

        {/* DropDown Menu */}
        <div className="dropdown dropdown-end  hidden dropdownMenu w-14">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1"
            onClick={toggleDropdown}
          >
            <IoMenu />
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <NavItem
                to="/"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                Home
              </NavItem>
              <NavItem
                to="/dmit"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                Dmit
              </NavItem>
              <NavItem
                to="/careercounselling"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                Career Counselling
              </NavItem>
              <NavItem
                to="/psychometrictest"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                Psychometric Test
              </NavItem>
              <NavItem
                to="/interesttest"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                Interest Test
              </NavItem>
              <NavItem
                to="/franchise"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                Franchise
              </NavItem>
              <NavItem
                to="/gallery"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                Gallery
              </NavItem>
              <NavItem
                to="/aboutus"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                About Us
              </NavItem>
              <NavItem
                to="/blog"
                setActivePage={setActivePage}
                activePage={activePage}
                handleItemClick={handleItemClick}
              >
                Blog
              </NavItem>
            </ul>
          )}
        </div>
        {/*  DropDown Menu */}

      </div>

      {/*  */}
      <SignupBanner />
      {/*  */}
      {/*  */}
      <div className="fixed bottom-5 right-5 z-50 cursor-pointer">
        <IoLogoWhatsapp className="text-5xl text-[#25D366]" />
      </div>
      {/*  */}
    </div>
  );
}

function SignupBanner() {
  return (
    <div className="fixed right-[-245px] top-[27rem] md:top-80 transform rotate-[-90deg] origin-bottom-left z-50">
      <div className="bg-[#022F46] text-white px-4 py-5 rounded-t-lg shadow-lg flex items-center gap-3">
        <MdEmail />{" "}
        <p className="text-sm font-semibold">Sign up & Get Rs. 500* OFF</p>
      </div>
    </div>
  );
}
