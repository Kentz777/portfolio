import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiFillProject } from "react-icons/ai";
import { MdWorkOutline, MdContacts, MdOutlineSchool } from "react-icons/md";
import { FaHome, FaFileDownload } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import resumePDF from '../assets/cv.pdf';
import { RiContactsLine } from "react-icons/ri";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Declare isScrolled state
  const handleDownload = () => {
    const isConfirmed = window.confirm("Are you sure you want to download the CV? Don't worry, it doesn't contain harmful files. I'm just asking for your confirmation. Click 'OK' if it's fine.");
    if (isConfirmed) {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'Kent_Ortego_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('CV downloaded successfully! Check it in your downloads');
    }
  };
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div className={`fixed top-0 left-0 right-0 z-50 md:hidden ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="flex justify-end p-4">
          <AiOutlineMenu onClick={handleNav} className="cursor-pointer" size={30} />
        </div>
      </div>
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
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-black hover:opacity-75 hover:text-white"
          >
            <FaHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-black hover:opacity-75 hover:text-white"
          >
            <MdWorkOutline size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-black hover:opacity-75 hover:text-white"
          >
            <AiFillProject size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-black hover:opacity-75 hover:text-white"
          >
            <RiContactsLine size={20} />
          </a>
          <a
          onClick={handleDownload}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-black hover:opacity-75 hover:text-white"
          >
            <FaFileDownload size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
