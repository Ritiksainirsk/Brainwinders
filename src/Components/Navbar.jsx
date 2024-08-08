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
        className={` py-[8px] px-[6px] 2xl:px-[10px] 2xl:py-[12px] rounded ${
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
    <header className="bg-white py-[12px] w-full shadow-lg fixed z-50">
      {/* ------------------>>>>>>>>>>>>>>>>>>>>> */}
      <nav className="text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-lg  flex items-center gap-x-20 md:gap-x-10 xl:gap-x-8 max-w-[1400px] lg:min-h-[50px] mx-auto px-4">
        <div className="w-[220px] md:w-[240px]">
          <a className="">
            <img
              height={50}
              width={220}
              src="https://www.brainwonders.in/images/logo.webp"
            />
          </a>
        </div>

        <div className="hidden gap-4 lg:flex items-center">
          <ul className="flex ">
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

          <button className="bg-[#F7CA01] py-[8px] px-[14px] font-semibold rounded-[50px]  ">
            Explore
          </button>
        </div>

        {/* DropDown Menu */}
        <div className="dropdown dropdown-end lg:hidden dropdownMenu absolute right-0 top-0 bg-white">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-white border-none "
            onClick={toggleDropdown}
          >
            <IoMenu className="text-lg" />
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white"
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
      </nav>
      {/*<<<<<<<<<<---------------------  */}

      <div className="fixed top-4 right-1 items-center  hidden xl:flex gap-1 ">
        <button className="bg-[#022F46] text-[12px] rounded-lg 2xl:text-lg text-white py-1 px-4  ">
          Book an Appointment
        </button>
        <PiPhoneCallFill className="text-[40px] bounce " />
        {/*  */}
      </div>
      {/*  */}

      {/*  */}
      <SignupBanner />
      {/*  */}
      {/*  */}
      <div className="fixed bottom-5 right-5 z-50 cursor-pointer">
        <IoLogoWhatsapp className="text-5xl text-[#25D366]" />
      </div>
      {/*  */}
    </header>
  );
}

function SignupBanner() {
  return (
    <div className="fixed right-[-253px] xl:top-[380px] top-[650px] transform rotate-[-90deg] origin-bottom-left z-50 hidden md:block">
      <div className="bg-[#022F46] text-white px-4 py-4 rounded-t-lg shadow-lg flex items-center gap-3">
        <MdEmail />{" "}
        <p className="text-sm font-semibold">Sign up & Get Rs. 500* OFF</p>
      </div>
    </div>
  );
}
