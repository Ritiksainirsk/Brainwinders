import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flew justify-between items-center mb-8">
          <img
            src="https://www.brainwonders.in/images/logo.webp"
            alt="Brainwonders Logo"
            className="h-12"
          />
          <div className="flex space-x-4">
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <h4 className="font-bold mb-2">Internal Links</h4>
            <ul className="space-y-1">
              <li>What Is DMIT</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>SSC Result</li>
              <li>Refer & Earn</li>
              <li>CBSE Result</li>
              <li>Certification</li>
              <li>Video</li>
              <li>School</li>
              <li>Why Brainwonders</li>
              <li>Franchise Opportunities</li>
              <li>Franchise Enquiry</li>
              <li>Pay Now</li>
              <li>Blogs</li>
              <li>Dmit & Parents</li>
              <li>Types of Finger Print</li>
              <li>Intelligence Type</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Internal Links</h4>
            <ul className="space-y-1">
              <li>Press Release</li>
              <li>Offline Media</li>
              <li>School Reviews</li>
              <li>Join With Us</li>
              <li>Brain & Fingers</li>
              <li>About Dmit</li>
              <li>Dmit Test</li>
              <li>Dmit Benefits</li>
              <li>Franchise Hindi</li>
              <li>Analysis Report</li>
              <li>Is DMIT for me?</li>
              <li>Finger History</li>
              <li>Franchise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Brainwonders Centers</h4>
            <ul className="space-y-1">
              <li>Career Counselling Centers</li>
              <li>IQ Test Centers</li>
              <li>Personality Test Centers</li>
              <li>Aptitude Test Centers</li>
              <li>DMIT Test Centers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Brainwonders Test Links</h4>
            <ul className="space-y-1">
              <li>Top College In Mumbai</li>
              <li>Career Counselling Online</li>
              <li>Psychometric Test</li>
              <li>Interest-Aptitude Test</li>
              <li>IQ Test</li>
              <li>Personality Test</li>
              <li>Aptitude Test</li>
              <li>DMIT Test</li>
              <li>Free Career Test</li>
              <li>Career Guidance</li>
              <li>Career After 10th</li>
              <li>Career After 12th</li>
              <li>Career After 12th Arts</li>
              <li>Career After 12th Science</li>
              <li>Career After 12th Commerce</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">FAQs</h4>
            <ul className="space-y-1">
              <li>FAQ's for DMIT</li>
              <li>FAQ's for IQ Test</li>
              <li>FAQ's for Aptitude Test</li>
              <li>FAQ's for Interest-Aptitude Test</li>
              <li>FAQ's for Personality Test</li>
              <li>Franchise FAQ</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-between items-start mt-8 border-t pt-4">
          <div className="text-sm">
            <p>
              Career Counselling | Blogs | Testimonials | Accredentials |
              Associations | Awards | Franchisee Locator
            </p>
            <p>Copyright 2024 © Brainwonders. All Right Reserved.</p>
            <p>Terms & Services | Return & Refund | Privacy Policy</p>
          </div>
          <div className="bg-blue-900 text-white p-4 rounded-lg text-sm w-80">
            <p className="font-bold">Contact Us</p>
            <p>📞 9987422220</p>
            <p>✉️ info@brainwonders.in</p>
            <p>
              Brainwonders 804, 8th floor, Paras Business Center, Kasturba
              Carter Road No. 1, Gokul Nagar, near Kasturba Police station,
              Asara Colony, Thane West, Mumbai, Maharashtra 404601
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
