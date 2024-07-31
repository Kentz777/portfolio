import React from 'react'
import ProjectItem from './ProjectItem'
import Des1 from '../assets/design1.png';
import Des2 from '../assets/design2.png';
import Des3 from '../assets/design3.png';
import Des4 from '../assets/design4.png';
import Des5 from '../assets/design5.png';
import Des6 from '../assets/design6.png';
import { motion } from "framer-motion"

const Designs = () => {
  return (
    <div
    id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
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
          title="AgriHub UI/UX"
          role="Collaborative UI/UX Designer"
          tech="Figma"
          link="https://www.figma.com/proto/yDCTRLowBb8B5djrP2Ken9/AGRIHUB-FLOW?node-id=2-56321&starting-point-node-id=2%3A56321"
        />
        <ProjectItem
          img={Des4}
          title="Bionic UI/UX"
          role="Collaborative UI/UX Designer"
          tech="Figma"
          link="https://www.figma.com/design/8g2PnifWwVroh0mfDQFsl6/bionic?node-id=1-2&t=xuPWfxuVZRjNMkaI-0"
        />
         <ProjectItem
          img={Des5}
          title="Foods and Room Services UI/UX"
          role="Collaborative UI/UX Designer"
          tech="Figma"
          link="https://www.figma.com/design/FIt84Nt5KZgqL9kQ6VfqmS/SIA102-FOODSANDSERVICES-HIFI?node-id=59-1069&t=4FKkCak7QvFeHDAJ-0"
        />
         <ProjectItem
          img={Des6}
          title="Homeqube DAO UI/UX"
          role="Collaborative UI/UX Designer"
          tech="Figma"
          link="https://www.figma.com/proto/1IAvcXS7UxbXHIHo9moXFy/DAO---UX---compiled?node-id=9-2&starting-point-node-id=9%3A2"
        />
      </div>
    </div>
  )
}

export default Designs