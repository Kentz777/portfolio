import React from 'react';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoFigma } from "react-icons/io5";
import { GrHtml5 } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skills = [
    { name: 'React & React Native', icon: <FaReact size={170} />, key: 'React' },
    { name: 'TypeScript', icon: <SiTypescript size={170} /> , key: 'TypeScript' },
    { name: 'JavaScript', icon: <AiOutlineJavaScript size={170} /> , key: 'js' },
    { name: 'Figma', icon: <IoLogoFigma size={170} /> , key: 'figma' },
    { name: 'HTML5', icon: <GrHtml5 size={170} /> , key: 'html' },
    { name: 'CSS3', icon: <FaCss3Alt size={170} /> , key: 'css' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={170} /> , key: 'tailwind' },
  ];

  return (
    <div className="max-w-[1040px] mx-auto p-4 py-16">
      <h1 className="text-4xl font-bold text-[#001b5e] text-center mb-8">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center -m-4">
        {skills.map(({ name, icon, key }) => (
          <div
            key={key}
            className="flex flex-col items-center p-4 md:p-8"
          >
            {icon}
            <span className="mt-2 md:text-lg">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;