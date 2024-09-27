// src/components/CertificateGallery.js
import React, { useEffect } from 'react';
import AnimatedSection from '../AnimatedSection';

const CertificateGallery = () => {
  return (
    <div className="py-8 px-4 mb-12 mt-7">
      <h3 className="text-2xl md:text-[34px] font-bold mb-8 text-center heading-font text-[#022F46]" style={{fontWeight:"700"}}>OUR U.S PATENTED DMIT CERTIFICATES.</h3>
      <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="flex justify-center">
          <img 
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTf7_ZLZ7Njr8LNJLQYZiQ-RDwQTB9dQysontgYWydA_vzlUSsE" 
            alt="Certificate 1" 
            className="w-auto h-auto max-w-xs shadow-lg" 
            width={120}
            height={120}
          />
        </div>
        <div className="flex justify-center">
          <img 
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEIu_e3emBmmz3Oepl0F1_Fh-wzUT8kFoFQxPOW9WdN0Wezx0p" 
            alt="Certificate 2" 
            className="w-auto h-auto max-w-xs shadow-lg" 
            width={120}
            height={120}
          />
        </div>
        <div className="flex justify-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoi_E0echqWEdpoAC1xmuLJdTc70Uvg2UMKXVDZcnnwpNyMVoh" 
            alt="Certificate 3" 
            className="w-auto h-auto max-w-xs shadow-lg" 
            width={120}
            height={120}
          />
        </div>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default CertificateGallery;
