import React from "react";
import EducationItem from "./EducationItem";

const data = [
  {
    year: "2022-2024",
    title: "Intern: Junior Fullstack Developer",
    duration: "2 years",
    details: "Intern at Homeqube Pte Ltd",
  }
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e]">Work Experience</h1>
      {data.map((item, id) => (
        <EducationItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
      ))}
    </div>
  );
};

export default Work;
