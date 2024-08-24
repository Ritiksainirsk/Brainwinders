// src/components/BrainAndFingerConnection.js
import React from 'react';

const BrainAndFingerConnection = () => {
  return (
    <div className=" p-8 ">
      <h3 className="text-2xl md:text-4xl font-semibold mb-6 text-center mt-10 heading-font text-[#022F46]">BRAIN AND FINGER CONNECTION</h3>
      <h3 className="md:text-xl font-semibold mb-8 text-center">
        Right Brain is corresponding to Left Hand and Left Brain is corresponding to Right Hand
      </h3>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-1 mb-4 md:mb-0 md:mr-4">
          <img 
            src="https://www.centurymedicaldental.com/wp-content/uploads/2022/01/Left-and-Right-Hemisphere-of-the-Brain.jpg.webp" 
            alt="Brain and Finger Connection" 
            className="w-full h-auto" 
            width={120}
            height={120}
          />
        </div>
        <div className="flex-1 text-lg">
          <p className="mb-4">
            The full form of DMIT is the Dermatoglyphics Multiple Intelligence Test (DMIT) is a biometric analysis based on the scientific study of fingerprints. It is useful for all age groups and helps understand an individual’s potential, personality type, SWOT analysis, learning style, career introspection, and more. DMIT is particularly beneficial for parents and teachers, providing insights into a child's innate strengths and areas that need development. Using information from the child's biometrics, the DMIT assessment offers actionable insights and appropriate career recommendations.
          </p>
          <p className="mb-4">
            Dermatoglyphics is the study of the patterns of skin ridges on human fingers, toes, and soles. It reveals the congenital links between our fingers and our intrinsic qualities and talents. These patterns are formed from the external ectoderm and typically develop during the fetal stage, with fingerprints forming between the 13th and 21st weeks.
          </p>
          <p className="mb-4">
            Medical experts and scientists have discovered that the distribution of brain cells in different parts of the brain can be understood through the DMIT test. This helps reveal a person's multiple intelligences, innate potential capabilities, and personality.
          </p>
          <p className="font-semibold">
            Our fingerprints reveal what we need and how we learn, transforming our lives through a holistic education approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrainAndFingerConnection;
