import React from 'react'

export default function LastSection() {

  return (
    <div>
        <RegionalPartners/>        
        <FranchiseList/>
    </div>
  )
}

const RegionalPartners = () => {
    const partners = [
      {
        location: "Bhopal",
        name: "Dr. Shiv Shankar Pawar",
        address: "37/C - Type, MIG, Sector F, ISRO Colony, Ayodhya Nagar, Bhopal, Madhya Pradesh 462022",
        email: "shiv@brainwondersindia.com",
      },
      {
        location: "Chennai",
        name: "Mr. Udhay Kumar",
        address: "4th floor Grand Square Mall, 137, Velachery-Tambaram Main Rd, V.O.C Nagar, Doctor Seetaram Nagar, Velachery, Chennai, Tamil Nadu 600042",
        email: "hema.mahajan@brainwonders.in",
      },
      {
        location: "Gujarat",
        name: "315-316, citylight shopping center, opposite, indraprasth apt, citylight, ghod dod road, Surat, pin code- 395007",
        email: "info.chennai@brainwonders.in",
      },
    ];
  
    return (
      <div className="py-10 px-4 bg-white">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">Regional Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{partner.location}</h3>
              <p>{partner.name}</p>
              <p>{partner.address}</p>
              <p>Email: <a href={`mailto:${partner.email}`} className="text-blue-500 underline">{partner.email}</a></p>
            </div>
          ))}
        </div>
      </div>
    );
  };



  const FranchiseList = () => {
    const partners = [
      {
        location: "Pune",
        name: "Mr. Sodiip Majumdar",
        address: "Sanyog Residency, Sasane Nagar, Hadapsar, Pune 411028",
      },
      {
        location: "Haldia",
        name: "WB",
        address: "Sector 13 more, Brajanathchak, P. O - Haldia Port, Dist - East Medinipur, Pin - 721605(West Bengal)",
        email: "gsmediators@brainwonders.in",
      },
      {
        location: "Bankura",
        name: "WB",
        address: "Schooldanga",
        email: " saptaparna.dutt@brainwonders.in",
      },
    ];
  
    return (
      <div className="py-10 px-4 bg-white">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">Regional Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{partner.location}</h3>
              <p>{partner.name}</p>
              <p>{partner.address}</p>
              <p>Email: <a href={`mailto:${partner.email}`} className="text-blue-500 underline">{partner.email}</a></p>
            </div>
          ))}
        </div>
      </div>
    );
  };