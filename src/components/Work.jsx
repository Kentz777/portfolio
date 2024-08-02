import React from "react";
import EducationItem from "./EducationItem";
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";

const data = [
  {
    year: "Sep 2023- Mar 2024",
    title: "Intern: Junior Fullstack Developer",
    duration: "6 months",
    details: "Intern at Homeqube Pte Ltd",
  }
];

const Work = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1.8, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.5 }}
    id="work" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e]">
     Work Experience
      </h1>
      {data.map((item, id) => (
        <EducationItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
      ))}
    </motion.div>
  );
};

export default Work;
