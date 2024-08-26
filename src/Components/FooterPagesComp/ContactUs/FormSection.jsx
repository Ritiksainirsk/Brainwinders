import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';

export default function FormSection() {
  return (
    <div>
          <div className="flex flex-col md:flex-row justify-between items-center p-10">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Take the leap toward a future of endless possibilities.</h2>
        <div className="text-lg">
          <div className="mb-6">
            <h3 className="font-semibold text-xl">HO Address</h3>
            <p>8th floor, Paras Business Center, Brainwonders 804, Carter Road No. 1, behind kasturba Police station, Asara Colony, Borivali East, Mumbai, Maharashtra 400066</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl">Contact Us</h3>
            <p>Email id: support@brainwonders.in</p>
            <p>Phone: +91 9987766531 / +91 998422220</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">OUR HOURS</h3>
            <p>MON-SAT 9:00 AM - 7:30PM</p>
            <p>SUN Closed</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 md:pl-8">
        <form className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 md:text-lg transform -translate-y-1/2 text-gray-400"/>
            <input type="text" placeholder="Name" className="w-full pl-10 md:text-lg p-3 border-2 border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-black"/>
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 md:text-lg transform -translate-y-1/2 text-gray-400"/>
            <input type="email" placeholder="Email" className="w-full pl-10 md:text-lg p-3 border-2 border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-black"/>
          </div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 md:text-lg transform -translate-y-1/2 text-gray-400"/>
            <input type="text" placeholder="Contact" className="w-full pl-10 md:text-lg p-3 border-2 border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-black"/>
          </div>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 md:text-lg transform -translate-y-1/2 text-gray-400"/>
            <input type="text" placeholder="Location" className="w-full pl-10 md:text-lg p-3 border-2 border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-black"/>
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-[30%] md:text-lg transform -translate-y-1/2 text-gray-400"/>
            <textarea placeholder="Message" className="w-full pl-10 p-3 border-2 md:text-lg border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-black"></textarea>
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="promo" className="mr-2 w-6 h-6"/>
            <label htmlFor="promo" className="md:text-lg text-[13px]">I agree to receive promotional and marketing material via Email / SMS / WhatsApp</label>
          </div>

          <div className="g-recaptcha md:mb-4" data-sitekey="your-recaptcha-key"></div>

          <button type="submit" className="w-full p-3 bg-black text-white font-semibold rounded-2xl hover:bg-[#000000d0]">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}
