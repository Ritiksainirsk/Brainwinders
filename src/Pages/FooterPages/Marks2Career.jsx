import React from 'react'
import HeroSectionOfMarks from '../../Components/FooterPagesComp/Marks2Career/HeroSectionOfMarks'
import GradeCards from '../../Components/FooterPagesComp/Marks2Career/GradeCards'
import CareerPathways from '../../Components/FooterPagesComp/Marks2Career/CareerPathways'
import MiddleBanner from '../../Components/FooterPagesComp/Marks2Career/EducationPartners'
import EducationPartners from '../../Components/FooterPagesComp/Marks2Career/EducationPartners'

export default function Marks2Career() {
  return (
    <div>
        <HeroSectionOfMarks/>
        <div className="max-w-[1500px] mx-auto overflow-hidden">
            <GradeCards/>
            <CareerPathways/>
            <EducationPartners/>
            <Marks2Career/>
        </div>
    </div>
  )
}
