import React from 'react'
import { MdPersonSearch } from "react-icons/md";
import profilePDF from '../assets/personality_profile.pdf';

const AboutMe = () => {
  const handleDownload = () => {
    const isConfirmed = window.confirm("This will direct you to my Personality Profile, click OK to confirm");
    if (isConfirmed) {
      window.open(profilePDF, '_blank');
    }
  };
  return (
    <button
    onClick={handleDownload}
    className="relative flex items-center
    justify-between px-6 py-4
     bg-transparent border-2
      border-black
       rounded-full mt-5
        text-white
         font-semibold
          shadow-lg
           hover:shadow-xl
            transition duration-300
             overflow-hidden group
             cursor-[pointer hover:scale-110 ease-in duration-200"
    >
      <div className="flex items-center z-10 group-hover:text-black transition duration-300">
        <MdPersonSearch className="mr-2" />
        <span>Interested About Me?</span>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 rounded-full transition duration-300"></div>
    </button>
  )
}

export default AboutMe