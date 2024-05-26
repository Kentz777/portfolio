import React, { useState } from "react";
import { AiOutlineMenu, AiFillProject } from "react-icons/ai";
import { MdWorkOutline, MdContacts, MdOutlineSchool } from "react-icons/md";
import { FaHome, FaFileDownload } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import resumePDF from '../assets/cv.pdf';
import { RiContactsLine } from "react-icons/ri";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Kent_Ortego_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-50 md:hidden"
        size={35}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-[pointer hover:scale-110 ease-in duration-200"
          >
            <FaHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-[pointer hover:scale-110 ease-in duration-200"
          >
            <MdOutlineSchool size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-[pointer hover:scale-110 ease-in duration-200"
          >
            <AiFillProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          
          <a onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-[pointer hover:scale-110 ease-in duration-200"
          >
            <MdContacts size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdWorkOutline size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiFillProject size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <RiContactsLine size={20} />
          </a>
          <a
          onClick={handleDownload}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaFileDownload size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
