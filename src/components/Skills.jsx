import React from 'react';
import { FaReact, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiPhp, SiMysql, SiNextdotjs, SiVite, SiMongodb, SiExpress } from 'react-icons/si';
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoFigma } from "react-icons/io5";
import { GrHtml5 } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbJson } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { motion } from "framer-motion"

const Skills = () => {
  const skills = [
    { name: 'React & React Native', icon: <FaReact size={170} />, key: 'React' },
    { name: 'TypeScript', icon: <SiTypescript size={170} /> , key: 'TypeScript' },
    { name: 'JavaScript', icon: <AiOutlineJavaScript size={170} /> , key: 'js' },
    { name: 'Figma', icon: <IoLogoFigma size={170} /> , key: 'figma' },
    { name: 'HTML5', icon: <GrHtml5 size={170} /> , key: 'html' },
    { name: 'CSS3', icon: <FaCss3Alt size={170} /> , key: 'css' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={170} /> , key: 'tailwind' },
    { name: 'Git & GitHub', icon: <FaGithub size={170} /> , key: 'github' },
    { name: 'PHP', icon: <SiPhp size={170} /> , key: 'php' },
    { name: 'MySQL', icon: <SiMysql size={170} /> , key: 'mysql' },
    { name: 'Next', icon: <SiNextdotjs size={170} /> , key: 'NextJS' },
    { name: 'Vite', icon: <SiVite size={170} /> , key: 'vite' },
    { name: 'MongoDB', icon: <SiMongodb size={170} /> , key: 'mongodb' },
    { name: 'NodeJS', icon: <FaNodeJs size={170} /> , key: 'node' },
    { name: 'Express', icon: <SiExpress size={170} /> , key: 'express' },
    { name: 'JSON', icon: <TbJson size={170} /> , key: 'json' },
  ];

  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1.8, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.5 }}
    className="max-w-[1040px] mx-auto p-4 py-16">
      <h1 className="text-4xl font-bold text-[#001b5e] text-center mb-8">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center -m-4">
        {skills.map(({ name, icon, key }) => (
          <div
            key={key}
            className="flex flex-col items-center p-4 md:p-8 cursor-[pointer hover:scale-110 ease-in duration-200"
          >
            {icon}
            <span className="mt-2 md:text-lg">{name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;