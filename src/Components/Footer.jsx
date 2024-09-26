import React, { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#E5EEF8] to-[#A4BFD6] pt-10">
      <div className="mx-auto px-4 lg:px-28">
        <div className="flex flex-wrap justify-between ">
          {/* Left Column */}
          <div
            className="w-full md:w-1/4 mb-8 md:mb-0"
          >
            <img
              src="https://www.brainwonders.in/images/logo.webp"
              alt="Brainwonders Logo"
              className="w-full md:w-[260px] "
              width={120}
              height={120}
            />
            <ul className="text-[#4D5B6B] my-3">
              <li className="mb-2">
                <Link to={'/aboutus'} className="hover:text-[#022F46]">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="hover:text-[#022F46]">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/contactus"} className="hover:text-[#022F46]">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-6 md:mr-3 2xl:mr-10">
              <div className="bg-blue-900 text-white p-4 rounded-lg w-full">
                <p className="font-bold">Contact Us</p>
                <p>📞 9987422220</p>
                <p>✉️ info@brainwonders.in</p>
                <p className="mt-3">
                  Brainwonders 804, 8th floor, Paras Business Center, Kasturba
                  Carter Road No. 1, Gokul Nagar, near Kasturba Police station,
                  Asara Colony, Thane West, Mumbai, Maharashtra 404601
                </p>
              </div>
              <h3 className="text-lg text-[#022F46] font-bold my-4">Socials</h3>
              <div className="flex space-x-4 text-[#022F46]">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-[#022F46] font-bold text-sm">
                Talk to an Expert now!
              </p>
              <p className="bg-white border border-gray-300 text-[#022F46] px-4 py-2 rounded-lg mt-2 inline-block">
                <a href="tel:09555990000">09555990000</a>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap justify-between">
              {/* Column 1 */}
              <div
                className="w-1/2 md:w-1/4 mb-8 md:mb-0"
              >
                <h3 className="text-[#022F46] text-lg font-bold mb-4">
                  Internal Links
                </h3>
                <ul className="text-[#4D5B6B] space-y-2">
                  <li>
                    <Link to={"/marks2career"} href="#" className="hover:text-[#022F46]">
                        Marks 2 Career
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      SSC Result
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Refer & Earn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      CBSE Result
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Certification
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Video
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      School
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Why Brainwonders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Franchise Opportunities
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Franchise Enquiry
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Pay Now
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Dmit & Parents
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Types of Finger Print
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Intelligence Type
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="w-1/2 md:w-1/4 mb-8 md:mb-0" >
                <h3 className="text-[#022F46] font-bold mb-4">
                  Internal Links
                </h3>
                <ul className="text-[#4D5B6B] space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Press Release
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Offline Media
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      School Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Join With Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Brain & Fingers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      About Dmit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Dmit Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Dmit Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Franchise Hindi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Analysis Report
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Is DMIT for me?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Finger History
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Franchise
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="w-1/2 md:w-1/4 mb-8 md:mb-0" >
                <h3 className="text-[#022F46] font-bold mb-4">
                  Internal Links
                </h3>
                <ul className="text-[#4D5B6B] space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Press Release
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Offline Media
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      School Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Join With Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Brain & Fingers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      About Dmit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Dmit Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Dmit Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Franchise Hindi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Analysis Report
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Is DMIT for me?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Finger History
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Franchise
                    </a>
                  </li>
                </ul>
                <h3 className="text-[#022F46] font-bold mb-4 mt-8">
                  Brainwonders Centers
                </h3>
                <ul className="text-[#4D5B6B] space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Career Counselling Centers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      IQ Test Centers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Personality Test Centers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Aptitude Test Centers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      DMIT Test Centers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
                <h3 className="text-[#022F46] font-bold mb-4">
                  Brainwonders Test Links
                </h3>
                <ul className="text-[#4D5B6B] space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Top College In Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Career Counselling Online
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Psychometric Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Interest-Aptitude Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      IQ Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Personality Test
                    </a>
                  </li>
                  <span className="hidden lg:block">
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        Aptitude Test
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        DMIT Test
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        Free Career Test
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        Career Guidance
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        Career After 10th
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        Career After 12th
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        Career After 12th Arts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        Career After 12th Science
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#022F46]">
                        Career After 12th Commerce
                      </a>
                    </li>
                  </span>
                </ul>
                <h3 className="text-[#022F46] font-bold mb-4 mt-8">Reports</h3>
                <ul className="text-[#4D5B6B] space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      FAQ's for DMIT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      FAQ's for IQ Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      FAQ's for Aptitude Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      FAQ's for Interest-Aptitude Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      FAQ's for Personality Test
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      Franchise FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#022F46]">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#4D5B6B] text-sm mt-8 pb-4">
          <p>
            Copyright - Medhavi Professional Services Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
