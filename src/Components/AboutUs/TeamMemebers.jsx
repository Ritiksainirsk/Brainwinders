import React from 'react';

const teamMembers = [
  {
    name: 'Manish Naidu',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2p44GCBiTq7ldmhGzu7LEHLOaf1arAgkmViHSaTpU8Q6e-jmp',
    description: 'With Brainwonders, Founder Manish Naidu revolutionized the concept of educational counselling. Also a recipient of an Indian National Educational Award.',
  },
  {
    name: 'Prof Lin Ruei Bin',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxgKbFdqaitAtwf5VCp_6Di94XB3ANnDeT51tyEbdiVEkqW8L',
    description: 'The pioneer of Dermatoglyphics Multiple Intelligence Test together with Prof. Chen Yi Mou, from Harvard University.',
  },
  {
    name: 'Frank Watson',
    image: 'https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg',
    description: 'I am the founder of FWA Organisational Development. My mission within the field of Psychology and Commerce.',
  },
  {
    name: 'Mr. Henry LEE Yan Fong',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7mHZzEMGVOwsWaBDKewmCgzSroEjAP-S2ZiUH9bDB6gnRVbrl',
    description: 'A graduate with DBM and Passionate in counseling. Appointed as WellGene International Business Partner in 2011.',
  },
];

const TeamMembers = () => {
  return (
    <section className="py-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 md:h-96 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-2 md:text-[16px] text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
