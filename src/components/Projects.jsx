import React from 'react'
import Crypt from '../assets/crypt.jpg'
import Proj1 from '../assets/project1.jpg'
import ProjectItem from './ProjectItem'
import Proj2 from '../assets/project2.png';
import Proj3 from '../assets/project3.png';
import Proj4 from '../assets/project44.png';
import Proj5 from '../assets/project5.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
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
      </div>
    </div>
  )
}

export default Projects