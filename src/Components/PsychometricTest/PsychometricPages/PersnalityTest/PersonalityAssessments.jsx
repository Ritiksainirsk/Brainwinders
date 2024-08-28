import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const PersonalityAssessments = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className="md:p-8 py-5 px-4 bg-white text-center my-4" data-aos="fade-up">
      <h1 className="text-2xl md:text-3xl font-bold heading-font md:flex md:flex-col " style={{fontWeight:"600"}}>
        Our Personality Assessments Are Built Using Validated
        <span>Scientific Theories And In-house Psychometric Expertise</span>
      </h1>
      <p className="text-base py-4 mb-8">
        The Quality Of Our Personality Tests Is Reflected In Their High Validity
        And Reliability Metrics
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 text-start">
        {/* Big Five Theory Card */}
        <div
          className="relative p-10 border border-green-400 rounded-lg shadow-2xl bg-white"
          style={{ textAlign: "" }}
        >
          <FaCheckCircle className="absolute top-[-22px] z-10 left-8 h-10 w-10 text-green-600 bg-white" />
          <h2 className="text-2xl font-semibold mb-4">The Big Five Theory</h2>
          <p>
            A hierarchical organization of personality traits in terms of basic
            dimensions: Extraversion, Agreeableness, Conscientiousness,
            Neuroticism, and Openness to Experience.
          </p>
        </div>

        {/* Iceberg Model Card */}
        <div className="relative p-10 border border-green-400 rounded-lg shadow-2xl bg-white">
          <FaCheckCircle className="absolute top-[-22px] z-10 left-8 h-10 w-10 text-green-600 bg-white" />
          <h2 className="text-2xl font-semibold mb-4">Iceberg Model</h2>
          <p>
            Model for competencies that talks about the easy, limited
            information of education, experience, skills, and gut feel in
            combination with essence of person, motivations, thinking & cultural
            fit.
          </p>
        </div>

        {/* Critical Thinking Card */}
        <div className="relative p-10 border border-green-400 rounded-lg shadow-2xl bg-white">
          <FaCheckCircle className="absolute top-[-22px] z-10 left-8 h-10 w-10 text-green-600 bg-white" />
          <h2 className="text-2xl font-semibold mb-4">Critical Thinking</h2>
          <p>
            A Critical Thinking Test designed to assess an individual's ability
            to digest & understand situations and information.
          </p>
        </div>

        {/* Abstract Reasoning Card */}
        <div className="relative p-10 border border-green-400 rounded-lg shadow-2xl bg-white">
          <FaCheckCircle className="absolute top-[-22px] z-10 left-8 h-10 w-10 text-green-600 bg-white" />
          <h2 className="text-2xl font-semibold mb-4">Abstract Reasoning</h2>
          <p>
            A test used to measure abstract reasoning and regarded as a
            non-verbal test of reasoning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalityAssessments;
