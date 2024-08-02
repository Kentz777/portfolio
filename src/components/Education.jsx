import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import EducationItem from './EducationItem';

// Education data
const data = [
  {
    year: '2006-2012',
    title: 'Primary Education',
    duration: '6 years',
    details: 'Completed primary education at Manuel L. Quezon Elementary School.',
  },
  {
    year: '2013-2017',
    title: 'Secondary Education',
    duration: '4 years',
    details: 'Graduated from Commonwealth High School.',
  },
  {
    year: '2017-2019',
    title: 'Senior High School',
    duration: '2 years',
    details: 'Graduated with honors from Commonwealth High School.',
  },
  {
    year: '2019-2024',
    title: "Bachelor's Degree in Information Technology",
    duration: '5 years',
    details: 'Graduated with a Bachelor\'s Degree in Information Technology from Quezon City University.',
  },
];

// ResponsiveMotionDiv component
const ResponsiveMotionDiv = ({ children }) => {
  const [viewportConfig, setViewportConfig] = useState({ once: false, amount: 0.2 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { 
        setViewportConfig({ once: false, amount: 0.2 });
      } else {
        setViewportConfig({ once: false, amount: 0.8 });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
      viewport={viewportConfig}
    >
      {children}
    </motion.div>
  );
};

// Education component
const Education = () => {
  return (
    <ResponsiveMotionDiv>
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 py-16">
        <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e]">
         Educational Background
        </h1>
        {data.map((item, id) => (
          <EducationItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
      </div>
    </ResponsiveMotionDiv>
  );
};

export default Education;
