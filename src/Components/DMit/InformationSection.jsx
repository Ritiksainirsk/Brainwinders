// src/components/InformationSection.js
import React, { useEffect } from "react";
import AnimatedSection from "../AnimatedSection";

const InformationSection = () => {
  return (
    <AnimatedSection>
      <div className="flex flex-col md:flex-row ">
      <div className="bg-blue-100 p-8 flex-1 lg:px-28">
        <h3 className="text-2xl lg:text-[34px] font-semibold mb-4 text-center heading-font text-[#022F46]"style={{fontWeight:"700"}}>
          DERMATOGLYPHICS MEANING
        </h3>
        <p style={{textAlign:"justify",fontWeight:"500"}} className="lg:text-[17px]">
          Dermatoglyphics is the scientific study of the patterns of ridges on
          the skin of human fingers, palms, toes, and soles. These patterns,
          including loops, whorls, and arches, are formed during fetal
          development and remain unique and consistent throughout a person's
          life. The primary focus is on analyzing fingerprint patterns, which
          are categorized into these three main types, each with various
          subtypes. Dermatoglyphics is influenced by genetic and environmental
          factors during fetal development, making it a fascinating field that
          bridges biology and genetics. The uniqueness and permanence of these
          patterns make dermatoglyphics valuable for identification purposes,
          such as in forensic science. Additionally, it is used in medical
          research to study correlations between fingerprint patterns and
          certain genetic or developmental conditions. Overall, dermatoglyphics
          provides insights into individual identity and developmental biology,
          contributing to various scientific and practical applications.
        </p>
      </div>
      <div className="bg-orange-100 p-8 flex-1 lg:px-20">
        <h2 className="text-2xl lg:text-[34px] font-semibold mb-4 text-center heading-font text-[#022F46]" style={{fontWeight:"700"}}>
          WHAT IS MULTIPLE INTELLIGENCE TEST?
        </h2>
        <p style={{textAlign:"justify",fontWeight:"500"}}  className=" lg:text-[17px]">
          A Multiple Intelligence Test is an assessment tool designed to measure
          an individual's strengths and abilities across various intelligence
          domains. Several researchers and theorists developed this concept, and
          a prominent psychologist, Howard Gardner, proposed that intelligence
          is not limited to a single factor but encompasses multiple distinct
          types of intelligence. These intelligences include linguistic,
          logical-mathematical, spatial, bodily-kinesthetic, musical,
          interpersonal, intrapersonal, and naturalistic intelligence. The
          Multiple Intelligence Test evaluates a person's proficiency and
          preferences in these different areas. This assessment can provide
          valuable insights into an individual's unique strengths and learning
          styles, helping them better understand themselves and tailor their
          educational or career paths accordingly at any age.
        </p>
      </div>
    </div>
    </AnimatedSection>
  );
};

export default InformationSection;
