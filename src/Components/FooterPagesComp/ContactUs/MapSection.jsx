import React from 'react';

const MapSection = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">HEAD OFFICE LOCATION</h2>
      <div className="w-full h-[35rem]">
        <iframe
          title="Brainwonders Head Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.788760064532!2d72.86117431537917!3d19.22937018700867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b75a5d5e441b%3A0x87edcc11e4c445a3!2sBrainwonders%20Mumbai!5e0!3m2!1sen!2sin!4v1649833628957!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
