import React from 'react';
import Img1 from '../../assets/careerCouselling/Explore Careers.webp'
import Img2 from '../../assets/careerCouselling/Discover Yourself.webp'
import Img3 from '../../assets/careerCouselling/Get Guided.webp'
import AnimatedSection from '../AnimatedSection';

const CareerCounselingExpectations = () => {
  const data = [
    {
      title: 'Explore Careers',
      points: [
        'Access the ultimate career hub, featuring:',
        'A vast library of career pathways',
        'A diverse range of job roles',
        'Insights into traditional and emerging academic fields',
        'Comprehensive information on entrance exams and scholarships',
      ],
      image: Img1, // Replace with actual image path
    },
    {
      title: 'Discover Yourself',
      points: [
        'Take interactive DMIT and psychometric assessments',
        'Uncover your attitude, aptitude, interests, mindset, and values',
        'Understand parental expectations',
        'Get tailored academic and career recommendations',
      ],
      image: Img2, // Replace with actual image path
    },
    {
      title: 'Get Guided',
      points: [
        'Access a network of certified experts',
        'Receive tailored guidance and support',
        'Schedule sessions that fit your lifestyle',
        'Regular interactions between counsellors and parents for seamless support',
      ],
      image: Img3, // Replace with actual image path
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-[24px] lg:text-[34px] mb-4" style={{fontWeight:"700"}}>
        What to Expect from Our Career Counselling
      </h2>
      <p className="text-center text-[17px] mb-12" style={{fontWeight:"500"}}>
        Making the right decision on academic and career choices is critical for success.
        Brainwonders Career Insight helps you make informed choices that align with your
        abilities and interests.
      </p>
      <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#022F46] text-white shadow-lg p-6 rounded-3xl flex flex-col items-center"
          >
            <h3 className="text-xl font-bold text-center mb-4">{item.title}</h3>
            <ul className="text-left space-y-2 mb-4 ">
              {item.points.map((point, i) => (
                <li key={i} className=" list-disc list-inside">
                  {point}
                </li>
              ))}
            </ul>
            <img
              src={item.image}
              alt={item.title}
              className="w-48 h-48 rounded-full mt-auto"
            />
          </div>
        ))}
      </div>
      </AnimatedSection>
    </div>
  );
};

export default CareerCounselingExpectations;
