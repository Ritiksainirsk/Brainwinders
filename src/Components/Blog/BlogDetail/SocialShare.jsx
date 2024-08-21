import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const SocialShare = () => {
  return (
    <div className="flex flex-col items-center space-y-4 bg-white text-center px-2 md:px-0 md:w-20 py-7">
      <div>
        <span className="text-blue-600 text-sm font-semibold">0</span>
        <p className="text-blue-600 text-xs font-semibold">shares</p>
      </div>

      <a href="#" className="text-blue-700 hover:text-blue-900 transition">
        <FaFacebookF className='text-[14px] md:text-[23px]'/>
      </a>

      <a href="#" className="text-blue-400 hover:text-blue-600 transition">
        <FaTwitter className='text-[14px] md:text-[23px]'/>
      </a>

      <a href="#" className="text-red-600 hover:text-red-800 transition">
        <FaPinterestP className='text-[14px] md:text-[23px]'/>
      </a>

      <a href="#" className="text-blue-500 hover:text-blue-700 transition">
        <FaLinkedinIn className='text-[14px] md:text-[23px]'/>
      </a>

      <a href="#" className="text-green-500 hover:text-green-700 transition">
        <FaWhatsapp className='text-[14px] md:text-[23px]'/>
      </a>
    </div>
  );
};

export default SocialShare;
