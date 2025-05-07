import React from "react";
import WorkItem from "./WorkItem";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const data = [
  {
    year: "Sep 2023- Mar 2024",
    title: "Intern: Junior Fullstack Developer",
    duration: "6 months",
    company: "Homeqube Pte Ltd",
    url: "https://www.homeqube.com",
    responsibility:
      "Creating UI designs for pages, translating UI to codes and Integrating API endpoints to frontend for both mobile and web version.",
  },
  {
    year: "Aug 2024- Nov 2024",
    title: "Part time: Frontend Mobile Developer",
    duration: "4 Months",
    company: "KDT Network and Data Solution",
    url: "https://www.kdtdatasolution.com/",
    responsibility:
      "Creating UI designs for screens, translating UI to codes and Integrating API endpoints to frontend.",
  },
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      id="work"
      className="max-w-[1040px] m-auto md:pl-20 py-16"
    >
      <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e]">
        Work Experience
      </h1>
      {data.map((item, id) => (
        <WorkItem
          key={id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          company={item.company}
          url={item.url}
          responsibility={item.responsibility}
        />
      ))}
    </motion.div>
  );
};

export default Work;
