import React from 'react'
import ProjectItem from './ProjectItem'
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';
import { motion } from "framer-motion"

const Certs = () => {
  return (
    <div
    id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Certificates</h1>
      <p className='text-center py-8'>
      My certificates
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={cert1}
          title="Responsive Web Certificate"
          date= "May, 2024"
          link="https://www.freecodecamp.org/certification/KentOwss_12/responsive-web-design"
        />
         <ProjectItem
          img={cert5}
          title="JavaScript Algorithnm and Data Structures"
          date= "June, 2024"
          link="https://www.freecodecamp.org/certification/KentOwss_12/javascript-algorithms-and-data-structures-v8"
        />
         <ProjectItem
          img={cert2}
          title="Network Security Issue Prevention"
          date= "December, 2022"
          link="https://credsverse.com/credentials/cb16ed2d-1fc2-41a6-9d12-ed24294b6155"
        />
         <ProjectItem
          img={cert3}
          title="React JS Tutorial"
          date= "June, 2022"
          link="https://olympus.mygreatlearning.com/courses/52045/certificate"
        />
         <ProjectItem
          img={cert4}
          title="Certificate of Completion"
          date= "March, 2024"
      />
      </div>
    </div>
  )
}

export default Certs