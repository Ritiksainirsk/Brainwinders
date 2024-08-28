import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MiddleBanner() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  return (
    <>
      <First/>
      <Second data-aos="fade-up"/>
    </>
  );
}

const First = () => {

  const items = [
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZgqy3xeOjNiW2FUhqw1-bbrwKeyDt3O-ebO7xMjYC48KNqShS", // replace with actual icon paths
      text: "The inborn personality traits and characteristics shape any child's relationships- whether it is with the friend or a teacher",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCNrh4jCPzGxWEb1bUORLQ94gaS5-cAQJkB6tQ1rqxUR3nB9U6", // replace with actual icon paths
      text: "Knowing the right learning style will also help in setting up the right teaching environment to amp up the classroom learning",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9uTLhz17zckt4AOn6_nRzVaHjMVaGxhQ4EsxLtz6IJZss_cj", // replace with actual icon paths
      text: "The left (analytical) and the right (creative) brain analysis contributes to knowing and effectively using the preferred approach to life",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZgqy3xeOjNiW2FUhqw1-bbrwKeyDt3O-ebO7xMjYC48KNqShS", // replace with actual icon paths
      text: "Identifying the student's best qualities using their SWOT profile will foster multidirectional growth.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCNrh4jCPzGxWEb1bUORLQ94gaS5-cAQJkB6tQ1rqxUR3nB9U6", // replace with actual icon paths
      text: "This would help any child to forge trustworthy and supportive relationships with their parents,peers and teachers.",
    },
  ];

  return (
    <div className="p-6 bg-white px-5 mt-10"  data-aos="fade-up">
      <h3 className="text-2xl lg:text-3xl font-bold text-center mb-2 heading-font text-[#022F46]" style={{fontWeight:"600"}}>
        HOW TO USE THE RESULTS OF DMIT TEST
      </h3>
      <p className="text-center mb-8">
        With Our DMIT Test, Understand your Child's capabilities & plan her
        future accordingly
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}} >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 md:w-[450px]"
          >
            <img
              src={item.icon}
              alt={`Icon ${index + 1}`}
              className="mb-4 w-44 h-48"
              width={120}
              height={120}
            />
            <p className="text-black text-[15px] md:text-[16px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Second = () => {
  const items2 = [
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZgqy3xeOjNiW2FUhqw1-bbrwKeyDt3O-ebO7xMjYC48KNqShS", // replace with actual icon paths
      title: "Personality Characteristics",
      desc: "Whether the child is having trouble making friends or is being a little rebellious, we have got you covered with our analysis of how does the child comprehend and react with their surroundings- and think and behave accordingly. This will actually be useful to help a school teacher, a coach or any other mentor supervise the student’s behavioural traits",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCNrh4jCPzGxWEb1bUORLQ94gaS5-cAQJkB6tQ1rqxUR3nB9U6", // replace with actual icon paths
      title: "Learning Profile",
      desc: "Often we would teach a student the way we learn. However, if some students learn better pictures- forcing them to write down repeatedly would be counterproductive and would actually irritate a child’s learning and study process. It is unfair to make a child labour through academics pointlessly. Using the right learning style will ensure that the process of gaining knowledge isan enjoyable and productive one",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9uTLhz17zckt4AOn6_nRzVaHjMVaGxhQ4EsxLtz6IJZss_cj", // replace with actual icon paths
      title: "Board Selection",
      desc: "SSC/ ICSE/ CBSE/ IB/ IGCSe or other; which board brings out the best in your child? There are several curriculums to opt from, but only one of them will be the best fit for any student. Choosing a board which contributes to grooming a child to the best of their abilities and inspiring a student to identify and ahieve their shortterm and long term goals has significant impact. So before you look up ‘ best school near me’ look up your child’sprofile first to find the best one for yourchild",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZgqy3xeOjNiW2FUhqw1-bbrwKeyDt3O-ebO7xMjYC48KNqShS", // replace with actual icon paths
      title: "Subject selection & management",
      desc: "From 6th standard itself a school starts providing options to learn subjects likeadditional languages and computers.Thus, the child needs to startstreamlining their options to align withtheir future vision. Knowing that it isdifficult to have that foresight at such anearly age, a detailed DMIT Test analysishelps in understanding the challengesand strengths side-by side to timelycapitalise on the child’s profile instead ofputting the child through trial-and-errorperspective",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZgqy3xeOjNiW2FUhqw1-bbrwKeyDt3O-ebO7xMjYC48KNqShS", // replace with actual icon paths
      title: "Multidimensional Profile",
      desc: "As the world gets more and more competitive, a report card by itself fallsshort of making the student shine. Imagine if the student has a vast potential to perform theatrical acts, but she/he is never on stage- the studentwill lead an unsatisfied and unfulfilled life. However, we cannot pressurise the child and force them to attend each and every activity class- this would stress  them out. Thus, knowing their strengths and assets would help in focussing the time and energy to make that talent shine. It would also help in strategically motivating the child to explore certain skills they are not comfortable with.",
    },
  ];
  return (
    <>
      <div className="p-6 bg-white mt-10 px-5"  data-aos="fade-up">
        <h3 className="text-3xl lg:text-3xl font-bold text-center mb-4 heading-font text-[#022F46]" style={{fontWeight:"600"}}>
          SIMPLIFYING PARENTING
        </h3>
        <p className="text-center mb-8 text-black text-[18px] md:text-[16px]">
          As a parent, there are several investments- emotional, physical and financial
           commitments one puts towards bringing up a happy and successful child. Thus, here 
           <br />
           are some aspects we cater to to make sure that your efforts are not a shot in the dark:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
          {items2.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 w-[450px]"
            >
              <img
                src={item.icon}
                alt={`Icon ${index + 1}`}
                className="mb-4 w-44 h-48"
                width={120}
                height={120}
              />
              <h4 className="text-black font-bold text-[22px] py-4">{item.title}</h4>
              <p className="text-black text-[15px] md:text-[16px]" style={{ textAlign: 'justify' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
