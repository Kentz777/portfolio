import React from 'react'
import Crypt from '../assets/crypt.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
       <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
       <p className='text-center py-8'>
       Projects awfasfsafsafsafsafasfsafsaf
       safasfasfsasafsa
       safsafasfsafasf
       asfasf fasfasfsaf fasfsafsaf safsaf s
        </p>
<div className='grid sm:grid-cols-2 gap-12'>
    <ProjectItem img={Crypt} title="Sample proj"/>
    <ProjectItem img={Crypt} title="Sample proj"/>
    <ProjectItem img={Crypt} title="Sample proj"/>
    <ProjectItem img={Crypt} title="Sample proj"/>
</div>
        <img src=""/>
    </div>
  )
}

export default Projects