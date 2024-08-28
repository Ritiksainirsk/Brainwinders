import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const IQTestMeasure = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className="py-12 bg-gray-100 text-gray-800 px-6 lg:px-20 2xl:px-52" data-aos="fade-up">
      <h2 className="text-3xl md:text-3xl font-bold text-center text-teal-900 mb-6 heading-font" style={{fontWeight:"600"}}>
        What does the IQ test measure?
      </h2>
      <p className="text-center mx-auto text-base mb-12">
        IQ tests are intended to measure the intelligence of a person. Thus, the
        purpose of the test is to assess a person's general intellectual
        abilities and to identify their attributes. As a result, the IQ test
        measures a person's wide range of mental, verbal, and nonverbal
        abilities. Here are the four most important areas that IQ tests measure:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-center">
        {/* Working Memories */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTCSFTKa3jxkjo7i8pcmE0JKUfOrW0Q4zLdBKFiTnm93SUpdTh"
            alt="Working Memories"
            className="mx-auto mb-4 w-44 md:w-auto"
          />
          <h3 className="text-lg font-bold mb-2">Working Memories</h3>
          <p className="text-[15px] md:text-lg">
            The IQ test incorporates both working and short-term memories.
            Because it can collect data, it can tell how well a person can
            remember or recall things.
          </p>
        </div>

        {/* Reasoning */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRA9AIRdgOprdOJy9gp_vasn9tHltkzvA5xVdB8g3v3NYvAgOYH"
            alt="Reasoning"
            className="mx-auto mb-4  w-44 md:w-auto"
          />
          <h3 className="text-lg font-bold mb-2">Reasoning</h3>
          <p className="text-[15px] md:text-lg">
            The test analyses one's reasoning ability in order to figure out
            whether the person is good at logical reasoning as well as critical
            reasoning.
          </p>
        </div>

        {/* Processing Speed */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVGzZ_p4bhVAA1HWgBgJSWg0a8EtDh8bMEFiUr3EE8-aumvJe"
            alt="Processing Speed"
            className="mx-auto mb-4  w-44 md:w-auto"
          />
          <h3 className="text-lg font-bold mb-2">Processing Speed</h3>
          <p className="text-[15px] md:text-lg">
            The test evaluates the processing speed ability of how quickly a
            person cycles, analyzes, and responds to data. These subtests assess
            visual and nonverbal learning.
          </p>
        </div>

        {/* Accuracy */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAWJjORMopP1iE4WNveyXUlMj5T7lWKhcz2dXmt_9QVyUm3JIr"
            alt="Accuracy"
            className="mx-auto mb-4  w-44 md:w-auto"
          />
          <h3 className="text-lg font-bold mb-2">Accuracy</h3>
          <p className="text-[15px] md:text-lg">
            Accuracy is very tentatively measured in IQ tests. Because of the
            problem-solving question, it determines how a person can solve a
            certain question within a particular period of time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IQTestMeasure;
