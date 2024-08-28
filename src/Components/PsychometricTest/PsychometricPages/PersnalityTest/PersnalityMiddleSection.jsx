import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PersnalityMiddleSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

const FirstComponent = () => {
  const steps = [
    {
      id: 1,
      title: "Registration and Test-Taking",
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
      title: "Career Counselling",
      description:
        "The counsellor personally explains the results, keeping in mind the subjective needs of the client and further adds certain points of development.",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBe8TcWcKUfXR97rh4XNfhri_RbkRApeMGsM9fF0aBaT_TAxoP",
    },
  ];
  return (
    <div className=" mx-auto p-6 text-center" data-aos="fade-up">
      <h2
        className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 heading-font"
        style={{ fontWeight: "600" }}
      >
        HOW TO TAKE AN APTITUDE TEST?
      </h2>
      <p className="text-base text-black mb-10">
        It's very simple. Just follow these steps!
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

function SecondComponent() {
  return (
    <div className="p-8" data-aos="fade-up">
      <h1
        className="text-2xl md:text-3xl font-bold text-center mb-8 heading-font"
        style={{ fontWeight: "600" }}
      >
        Personality Test for Everyone
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Personality Test for Children */}
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-center">
            PERSONALITY TEST FOR <br /> Children (5-11 years)
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-left">
            <li>
              Academic management: Mapping and using a learning process for the
              child using a blend of suitable learning environment and
              strategies.
            </li>
            <li>
              Understanding the child: Parents understand and manage the child's
              temperament and emotions.
            </li>
            <li>
              Self-esteem: Nurturing a child based on their personality assures
              that the child displays healthy behaviour and coping mechanisms.
            </li>
            <li>
              Parent-child relationship: Numerous scientific studies show that
              the bond between parent & child boosts the parents' effort to form
              a warm and trustworthy relationship.
            </li>
            <li>
              Social development: A child’s personality analysis shows their
              unique experiences and the child’s characteristics; personality
              analysis is beneficial for early intervention and support.
            </li>
            <li>
              School selection: A personality test helps in identifying the most
              suitable school environment.
            </li>
          </ul>
        </div>

        {/* Personality Test for High School Teenagers */}
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-center">
            PERSONALITY TEST FOR <br /> High School Teenagers (12-18 years)
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-left">
            <li>
              Career management: Long-term satisfaction in a career relies on
              the person’s personality traits as the basis of strengths and
              weaknesses in different subjects or courses.
            </li>
            <li>
              Dealing with peer pressure: Understanding and handling that one’s
              self-perception improves through identifying and working through
              any unwanted personality traits.
            </li>
            <li>
              Life satisfaction: Adolescence is a stage filled with
              life-altering decisions, so it’s vital to match the teenager’s
              personality to the right life path.
            </li>
            <li>
              Preparation for professional future: Because every student is
              indeed different, the Personality Test for teenagers helps them
              understand the similarities and contrasts with peers in the same
              age bracket.
            </li>
            <li>
              Finding the right career: The Personality Test helps identify
              which stream the teenager should pick after class 10th to ease the
              transition into higher studies.
            </li>
            <li>
              Academic success: As the 12th board exams approach, students can
              use the personality test methods to improve the child’s academic
              performance in any exam.
            </li>
          </ul>
        </div>

        {/* Personality Test for Adults and Corporates */}
        <div className="bg-blue-100 p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-4">
            PERSONALITY TEST FOR <br /> Adults and Corporates (18+)
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-left">
            <li>
              Recruiting the right candidate: The personality traits of the
              candidate help in identifying if the candidate has relevant
              professional traits, along with desirable and undesirable traits.
            </li>
            <li>
              Workplace efficiency: A test identifying core areas of personality
              shows if the person’s attributes would contribute towards
              achieving the organisation’s goals.
            </li>
            <li>
              Team collaboration: Personality analysis helps in matching the
              candidate to the job role.
            </li>
            <li>
              Enhancing workplace culture: By selecting the right candidate, job
              satisfaction is maximised, and by identifying the workplace
              culture, you can streamline any communication gap within the team.
            </li>
            <li>
              Leadership qualities: With a focus on personality traits and
              aligning them with the responsibilities of the role, the
              organisation benefits by understanding which candidate has a
              leadership style that works for the organisation’s goals.
            </li>
            <li>
              Long-term career success: A Personality Test helps in defining the
              long-term goals for the candidate and aligning them with the
              company’s vision. Any working adult also looks for qualities that
              can contribute to a harmonious working environment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
