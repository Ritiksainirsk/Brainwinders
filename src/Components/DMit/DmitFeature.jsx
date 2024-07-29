import React from "react";

export default function DmitFeature() {
  const features = [
    {
      title: "UNIQUENESS",
      description:
        "There are no two identical fingerprints. One's 10 fingers are not the same. Dermatoglyphics style, striae height, density, quantity, and location of the point is not the same for everyone. No individual has ever displayed the same fingerprint from another digit even if taken from the same hand.",
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqDfY1WflTArk8wsPNzn3l4kWZUMFwEC-PGZF6P-n9S93wOFFP", // replace with your icon path
      bgColor: "gray",
    },
    {
      title: "INVARIANCE",
      description:
        "The raised pattern network of lifetime from birth to death will not change even if it is due to the regeneration of the labor dermatoglyphics style, quantity, and profile shape which is determined the same later.",
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTp4HgfvnkROMHRYBeynj6-o0zxV3geitKswygp_Wui2we55J2U", // replace with your icon path
      bgColor: "teal",
    },
    {
      title: "HEREDITARY",
      description:
        "According to science statistics, immediate family members will be more or less the same between the striae. Normal human cells chromosomes may have a mutation due to a structural change resulting in striae mutation. Therefore, the striae have inherited the mutation.",
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ195Op7QXlXU3498vRnp3SKEorV8Wd_cWcl22xtc0oCbneKf4P", // replace with your icon path
      bgColor: "orange",
    },
  ];
  
  return (
    <div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-3 mt-12">
          DERMATOGLYPHICS MULTIPLE INTELLIGENCE TEST (DMIT TEST) FEATURES
        </h2>
        <p className="text-center mb-8">
          Implementing the study of fingerprints to help discover & expand an
          individual's potential.
        </p>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <DMITFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const DMITFeatureCard = ({ title, description, icon, bgColor }) => {
  return (
    <div
      className={`relative bg-${bgColor}-500 rounded-lg p-6 m-4 flex flex-col items-center w-80`}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white mb-10">{description}</p>
      <div className=" absolute left-20 bottom-[-25px]">
        <img src={icon} alt={title} className="w-20 h-20 rounded-full" />
      </div>
    </div>
  );
};
