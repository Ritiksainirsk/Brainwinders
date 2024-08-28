import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function InteresrTestMiddleSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <First />
      <Second/>
    </div>
  );
}

const First = () => {
  return (
    <div className="p-8 bg-white py-12"  data-aos="fade-up">
      {/* Heading Section */}
      <h1 className="text-2xl md:text-3xl text-center mb-4 heading-font" style={{fontWeight:"600"}}>
        HOW DOES THE INTEREST TEST BENEFIT CHILDREN'S CAREER?
      </h1>
      <p className="text-center md:text-[16px] mb-8" style={{ textAlign: "justify" }}>
        The Interest-Aptitude Test draws its foundations in psychology and human
        development. As per the theories of intellectual development,
        intelligence is crystallized by the age of 18—and thus early exploration
        and analysis of one's talents help in shaping and molding it positively
        with better impact. Thus the Interest-Aptitude Test has the following
        advantages for toddlers, preschoolers, and school students and also
        helps parents along the way:
      </p>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* School & Board Selection */}
        <div className="text-center">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5X9d50XxoR8NQtNUrEyFsDV_0W_JuPsc55M7NCbTHrF0kA_8m"
            alt="School & Board Selection"
            className="mx-auto mb-4 w-24 h-20"
          />
          <h3 className="text-xl font-semibold mb-2 heading-font">
            SCHOOL & BOARD SELECTION
          </h3>
          <p style={{ textAlign: "justify" }} className="">
            The analysis allows the parents to understand which subjects are
            strong and weak within the child. This helps the parents select the
            board aligned with the focused curriculum.
          </p>
        </div>

        {/* Academic Development */}
        <div className="text-center">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTL1oXj19Ja25kHWLbEs3a323u7vYyEI-qKHvVPMUtB4ek45mnL"
            alt="Academic Development"
            className="mx-auto mb-4 w-24 h-20"
          />
          <h3 className="text-xl font-semibold mb-2 heading-font">
            ACADEMIC DEVELOPMENT
          </h3>
          <p style={{ textAlign: "justify" }}>
            One can not only understand but also focus on the child's
            development in subjects that are best suited to improve the progress
            of the child.
          </p>
        </div>

        {/* Extracurricular Growth */}
        <div className="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxmB2k59UmDGLs7Bh9aVPkHfiRQ4TC7QmxKYxvHiwj97oRVqL"
            alt="Extracurricular Growth"
            className="mx-auto mb-4 w-24 h-20"
          />
          <h3 className="text-xl font-semibold mb-2 heading-font">
            EXTRACURRICULAR GROWTH
          </h3>
          <p style={{ textAlign: "justify" }}>
            It is an accepted fact that creativity, communication, sports and
            performing arts play a significant role for all-round development.
          </p>
        </div>

        {/* Multidimensional Profile */}
        <div className="text-center">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRndLtsr35q1fXXx_zATvNeUQjp6HYjvUDkzXQCvM2e-B5d6pRS"
            alt="Multidimensional Profile"
            className="mx-auto mb-4 w-24 h-20"
          />
          <h3 className="text-xl font-semibold mb-2 heading-font">
            MULTIDIMENSIONAL PROFILE
          </h3>
          <p style={{ textAlign: "justify" }}>
            It is crucial to understand the child's profile. The test allows the
            parents to understand the more in-depth profile of the child. This
            helps in assisting the child to map their interests, skills and
            understand where they are struggling.
          </p>
        </div>

        {/* Career Development */}
        <div className="text-center">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTs6Urrhzv73fePJZLNyILAoFkCauPg0bw6Nn7JKb-lOkvh4wYT"
            alt="Career Development"
            className="mx-auto mb-4 w-24 h-20"
          />
          <h3 className="text-xl font-semibold mb-2 heading-font">
            CAREER DEVELOPMENT
          </h3>
          <p style={{ textAlign: "justify" }}>
            As childhood is a sensitive age and learning is the foundation to
            start a career, it is necessary to align the child’s interests with
            their career and future as they grow up.
          </p>
        </div>

        {/* Time & Education Management */}
        <div className="text-center">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIjInYU4bhsdvpMM_eXd5eyZC9gxXI3Dz_8x8aQgnY5HSOQI8E"
            alt="Time & Education Management"
            className="mx-auto mb-4 w-24 h-20"
          />
          <h3 className="text-xl font-semibold mb-2 heading-font">
            TIME & EDUCATION MANAGEMENT
          </h3>
          <p style={{ textAlign: "justify" }}>
            Being a child’s main learning and growing years, a suitable time and
            education management strategy is required to nurture the child’s
            talent to manage their time and talent.
          </p>
        </div>
      </div>
    </div>
  );
};

const Second = () => {
  const steps = [
    {
      id: 1,
      title: "Administration",
      description:
        "The Brainwonders aptitude test is in a multiple choice format and is timed (online or offline).",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQspkGuw6o7zFMo3PN-vD8VIbIwNbxRh0MyPqGVLwA-07Bf6MBB",
    },
    {
      id: 2,
      title: "Evaluation",
      description:
        "As an objective test, the inputs of the clients are scored using a standardized key.",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZBnm5SQgANCu88lwoq7dXP1unonnwDRn-JEuvSc_BBcKmdKGw",
    },
    {
      id: 3,
      title: "Interpretation & Report",
      description:
        "An aptitude profile and complete report is generated and compiled.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKOINtj4cl-oMWEAOcNMW-uFkZZ8SrcFBmMNprgWljA5qxptB",
    },
    {
      id: 4,
      title: "Personal and Career Counselling",
      description:
        "The counsellor personally explains the results, keeping in mind the subjective needs of the client and further adds certain points of development.",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBe8TcWcKUfXR97rh4XNfhri_RbkRApeMGsM9fF0aBaT_TAxoP",
    },
  ];
  return (
    <div className=" mx-auto p-6 text-center" data-aos="fade-up">
      <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-2 heading-font" style={{fontWeight:"600"}}>
        HOW TO TAKE AN INTEREST TEST?
      </h2>
      <p className="text-xl md:text-[16px] text-black mb-10">
      The Interest Test can be taken in either an online or offline mode in four simple steps
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.id} className="bg-gray-100 rounded-lg p-6 shadow-lg">
            <img
              src={step.image}
              alt={step.title}
              className="mx-auto mb-4 w-full h-36 object-contain md:object-cover"
              width={120}
              height={120}
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.id}. {step.title}
            </h3>
            <p className="text-black text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};