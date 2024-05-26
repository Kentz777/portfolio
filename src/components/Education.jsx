import React from "react";
import EducationItem from "./EducationItem";

const data = [
  {
    year: "2006-2012",
    title: "Primary Education",
    duration: "6 years",
    details: "Completed primary education at Manuel L. Quezon Elementary School.",
  },
  {
    year: "2013-2017",
    title: "Secondary Education",
    duration: "4 years",
    details: "Graduated from Commonwealth High School.",
  },
  {
    year: "2017-2019",
    title: "Senior High School",
    duration: "2 years",
    details: "Graduated with honors from Commonwealth High School.",
  },
  {
    year: "2019-2024",
    title: "Bachelor's Degree in Information Technology",
    duration: "5 years",
    details: "Graduated with a Bachelor's Degree in Information Technology from Quezon City University.",
  },
];

const Education = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e]">Educational Background</h1>
      {data.map((item, id) => (
        <EducationItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
      ))}
    </div>
  );
};

export default Education;
