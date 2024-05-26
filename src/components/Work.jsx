import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2020",
    title: "Content Creator",
    duration: "3 years",
    details:
      "lorepsafafsa dgjafhasuifhasou ashfasuohfasofhoi oihasoisoioifiosafhosiahioasasoi oaifh",
  },
  {
    year: "2020",
    title: "Content Creator",
    duration: "3 years",
    details:
      "lorepsafafsa dgjafhasuifhasou ashfasuohfasofhoi oihasoisoioifiosafhosiahioasasoi oaifh",
  },
  {
    year: "2020",
    title: "Content Creator",
    duration: "3 years",
    details:
      "lorepsafafsa dgjafhasuifhasou ashfasuohfasofhoi oihasoisoioifiosafhosiahioasasoi oaifh",
  },
  {
    year: "2020",
    title: "Content Creator",
    duration: "3 years",
    details:
      "lorepsafafsa dgjafhasuifhasou ashfasuohfasofhoi oihasoisoioifiosafhosiahioasasoi oaifh",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, id) => (
        <WorkItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
      ))}
    </div>
  );
};

export default Work;
