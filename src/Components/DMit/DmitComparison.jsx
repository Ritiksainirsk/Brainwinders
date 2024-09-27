import React from 'react';

export default function DmitComparison() {
  return (
    <div className="bg-gray-50 p-10 xl:px-32">
      <h2 className="text-2xl lg:text-[34px] text-center mb-4" style={{fontWeight:"700"}}>DMIT vs Other Tests</h2>
      <p className="text-center mb-8 lg:text-[17px]" style={{fontWeight:"500"}}>
        How DMIT Differs from Other Tests? <br />
          “Unlike traditional tests, DMIT assesses innate talents and intelligences,
          providing a more holistic understanding of your potential.”

      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" style={{textAlign:"justify"}}>
        {/* DMIT Test Section */}
        <div className="rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center">DMIT Test</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>1. Scientific Basis:</strong> Based on neuroscience and fingerprint analysis, which are directly connected to brain development.
            </li>
            <li>
              <strong>2. Non-Invasive and Stress-Free:</strong> Simple fingerprint scanning without any written tests or questionnaires, ensuring a stress-free experience.
            </li>
            <li>
              <strong>3. Comprehensive Insight:</strong> Provides a holistic understanding of multiple intelligences and brain potential.
            </li>
            <li>
              <strong>4. Personalized Recommendations:</strong> Delivers tailored insights based on genetic traits, helping individuals recognize their natural strengths.
            </li>
            <li>
              <strong>5. Lifelong Validity:</strong> Since fingerprints never change, the results are valid for life.
            </li>
          </ul>
        </div>

        {/* Other Tests Section */}
        <div className="rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Other Tests</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>1. Subjective Approach:</strong> Relies on cognitive responses and self-reported data, making it less scientifically grounded.
            </li>
            <li>
              <strong>2. Written or Questionnaire-Based:</strong> Often involves written exams or answering complex questions, which can cause stress or anxiety.
            </li>
            <li>
              <strong>3. Limited Focus:</strong> Primarily focuses on cognitive skills or personality, offering a narrower view of capabilities.
            </li>
            <li>
              <strong>4. Generalized Results:</strong> Typically provides broader, less individualized recommendations based on group averages.
            </li>
            <li>
              <strong>5. Periodic Reassessment Needed:</strong> Results may vary over time, requiring frequent reassessment as abilities or personality traits evolve.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
