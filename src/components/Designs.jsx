import React from 'react'
import ProjectItem from './ProjectItem'
import Des1 from '../assets/design1.png';
import Des2 from '../assets/design2.png';
import Des3 from '../assets/design3.png';

const Designs = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Designs</h1>
      <p className='text-center py-8'>
      My designs
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={Des1}
          title="Personal Portfolio UI"
          role="Solo UI Designer"
          tech="Figma"
          link="https://www.figma.com/proto/HCdbLp2jGifQdnLfQU4Fou/FIGMA-TUTORIAL?node-id=40-133&starting-point-node-id=40%3A133"
        />
        <ProjectItem
          img={Des2}
          title="Landing Page UI"
          role="Solo UI Designer"
          tech="Figma"
          link="https://www.figma.com/design/EKXuJNdTMqt13iVyvg87bZ/Untitled?node-id=0-1&t=xP4K1h2H9tydSwUi-0"
        />
        <ProjectItem
          img={Des3}
          title="AgriHub UI"
          role="Collaborative UI Designer"
          tech="Figma"
          link="https://www.figma.com/proto/yDCTRLowBb8B5djrP2Ken9/AGRIHUB-FLOW?node-id=2-56321&starting-point-node-id=2%3A56321"
        />
      </div>
    </div>
  )
}

export default Designs