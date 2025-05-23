import React from 'react'
import Crypt from '../assets/crypt.jpg'
import Proj1 from '../assets/project1.jpg'
import ProjectItem from './ProjectItem'
import Proj2 from '../assets/project2.png';
import Proj3 from '../assets/project3.png';
import Proj4 from '../assets/project44.png';
import Proj5 from '../assets/project5.png';
import Proj6 from '../assets/project6.png';
import Proj7 from '../assets/project7.png';
import Proj8 from '../assets/project8.png';
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1.8, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
      Here are some of my projects. Have a visit.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={Proj1}
          title="AgriHub: Center for Urban Culture and Innovation"
          role="Capstone Project - Quality Assurance, UI Designer"
          tech="React, Vite, Typescript, Tailwind"
          link="https://agrihub.vercel.app/"
        />
        <ProjectItem
          img={Proj2}
          title="Homeqube: Home Value Chain Marketplace"
          role="Junor Frontend Developer"
          tech="React, NextJS, Typescript"
          link="https://www.homeqube.com/"
        />
          <ProjectItem
          img={Proj4}
          title="React-Vite: Disney Clone App"
          role="Fullstack Developer"
          tech="React, Vite, Javascript, Tailwind CSS"
          link="https://kentdisneyclone.vercel.app/"
        />
        <ProjectItem
          img={Proj3}
          title="React-Vite: Food Recipe App Using Api"
          role="Full Stack Developer"
          tech="React, Vite, Javascript"
          link="https://food-app-xi-three.vercel.app/"
        />
       <ProjectItem
          img={Proj5}
          title="NextJS: Saulong Gym"
          role="Full Stack Developer"
          tech="React, Next, Typescript"
          link="https://saulong-gym.vercel.app/"
        />
        <ProjectItem
          img={Proj6}
          title="Bionic Web App"
          role="Frontend Developer"
          tech="React, Typescript"
          link="https://hq-bionic-frontend-react.vercel.app/"
        />
         <ProjectItem
          img={Proj7}
          title="Krah: Pipes Calculation Mobile App"
          role="Frontend Developer"
          tech="React-Native, Expo, Typescript"
          link="https://drive.google.com/file/d/1CfoP_lAzDIj0xYSjaRi0RwPq5QEfzlrO/view?fbclid=IwY2xjawGn6gtleHRuA2FlbQIxMAABHQWe8Ppp8kinUyREXI8NWPwl_fv8EdOUZV-AvcGBfPFoKi87H_BWwSeNzQ_aem_gj6a-H6krLgaG5LzbhK4KA"
        />
         <ProjectItem
          img={Proj8}
          title="Maverick Solutions: Construction Pro Mobile App"
          role="Frontend Developer"
          tech="React-Native, Expo, Typescript"
          link="https://drive.google.com/file/d/1-cSWqUMTpnSqLzWprfx82gtcgCAL18Xb/view?usp=sharing"
        />
      </div>
    </motion.div>
  )
}

export default Projects