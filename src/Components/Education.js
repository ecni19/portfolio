import React from "react";
import EducationCard from './EducationCard';
import Davis from "./Images/campus_aerial_crop.jpg";

const courses = ['Data Structures and Algorithms', 'Object-Oriented', 'Programming'];

function Education() {
  return (
    <div>
      <EducationCard name={"University of California - Davis"} degree={"Bachelor of Science in Computer Science"} time={"Expected: June 2023"} image={Davis} course={courses}/>
    </div>
  );
}

export default Education;
