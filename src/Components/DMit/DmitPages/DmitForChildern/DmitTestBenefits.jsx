import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DmitTestBenefits() {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  
  return (
    <div>
      <First />
      <Second />
    </div>
  );
}

const First = () => {
  return (
    <div className=" mx-auto p-6 2xl:px-[9rem] mt-9" data-aos="fade-up">
      <h3 className="text-3xl lg:text-3xl font-bold text-center mb-4 heading-font text-[#022F46]" style={{fontWeight:"600"}}>
        Why DMIT Test need to be done for Students?
      </h3>
      <p
        className="mb-4 text-[15px] md:text-[16px] text-black"
        style={{ textAlign: "justify" }}
      >
        DMIT Test for students can help in saving time, effort and money spent
        on irrelevant courses. Right from a small kid to a 10th Class student,
        parents enroll their child in various extra-curricular activities for
        overall development of their child. DMIT Test can help in identifying
        the right activity you should put your child in for the overall
        development o the child. What parents are looking for is ‘More Marks’
        and students can achieve this with help of DMIT Test by identifying
        their comfort zone and working in the right direction. Moreover, every
        child is unique and different; DMIT Test for students can help you
        understand what your child is good at and hence eliminate unnecessary
        expectations from the child. You as a parent, will stop comparing and
        start appreciating! Also, DMIT Test for students can help you choose the
        right subjects, in line with your strengths
      </p>
    </div>
  );
};

const Second = () => {
  return (
    <div className=" mx-auto p-6 2xl:px-[9rem] mt-2" data-aos="fade-up">
      <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4 heading-font text-[#022F46] " style={{fontWeight:"600"}}>
        Benefits of DMIT Test for Students?
      </h3>
      <p
        className="mb-4 text-[15px] md:text-[16px] text-black "
        style={{ textAlign: "justify" }}
      >
        <span className="ml-[-22px]">There are plenty of benefits of DMIT Test for students:</span>
        <br />
        1. Avoid drop-out from courses and save the life of student from
        depression or an extreme case of suicide.
        <br />
        2. Reduce unnecessary expectation of parents from their children. DMIT
        Test for students also reduces tension at home and improves parent-child
        relationship.
        <br />
        3. DMIT Test for students saves time and effort spent on irrelevant
        activities and courses.
        <br />
        4. DMIT Test for students saves money from getting wasted in these
        irrelevant courses.
        <br />
        5. With increased focus in studies by working in the right direction,
        improve your marks in academics through DMIT Test for students.
        <br />
        6. Choose the right career path based on your innate strengths, which can
        be identified through DMIT Test for students.
      </p>
    </div>
  );
};
