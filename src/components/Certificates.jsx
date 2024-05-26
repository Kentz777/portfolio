import React from 'react'
import ProjectItem from './ProjectItem'
import cert1 from '../assets/cert1.png';

const Certs = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Certificates</h1>
      <p className='text-center py-8'>
      My certificates
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={cert1}
          title="Responsive Web Certificate"
          role="Solo UI Designer"
          tech="HTML, CSS"
          link="https://www.freecodecamp.org/certification/KentOwss_12/responsive-web-design"
        />
      </div>
    </div>
  )
}

export default Certs