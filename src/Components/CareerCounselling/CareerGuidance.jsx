import React from 'react';

const CareerGuidance = () => {
  const items = [
    {
      icon: 'https://mindlerimages.imgix.net/tinyimg/005-creative.svg', // replace with actual icon paths
      text: 'Enable students to identify their best-fit career with our world-class career assessment and personalised guidance.'
    },
    {
      icon: 'path_to_icon2', // replace with actual icon paths
      text: 'Empower students to learn all about the professional world with virtual career simulations, exhaustive career library, career blogs and vlogs.'
    },
    {
      icon: 'path_to_icon3', // replace with actual icon paths
      text: 'Pave student’s way to their dream college with our end-to-end college application guidance, scholarship drive and corporate internship program.'
    },
    {
      icon: 'path_to_icon4', // replace with actual icon paths
      text: 'Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy.'
    },
    {
      icon: 'path_to_icon5', // replace with actual icon paths
      text: 'Empower educators to become International Certified Career Coaches and build a career in career guidance & counselling.'
    },
    {
      icon: 'path_to_icon6', // replace with actual icon paths
      text: 'Revolutionary assessment platform and technology driven career guidance solutions for educators to boost their career guidance & counselling practice.'
    }
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">Shaping the Career Guidance Landscape</h2>
      <p className="text-center mb-8">Comprehensive career guidance solutions for students, parents, educators and schools</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <img src={item.icon} alt={`Icon ${index + 1}`} className="mb-4 w-16 h-16" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerGuidance;
