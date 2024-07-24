import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaFreeCodeCamp,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/profile.jpg";
import DownloadResume from './DownloadResume';
import AboutMe from "./AboutMe";

const Main = () => {
  return (
    <div id="main" className="">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://ardas-it.com/uploads/images/blogs/giph.gif"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <div className="flex flex-col items-center md:flex-row md:items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-20 h-30 rounded-tl-xl rounded-tr-xl rounded-bl-xl mb-4 md:mb-0 md:mr-4"
            />
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 text-center md:text-left">
              Hi I'm Kent Ortego
            </h1>
          </div>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a{" "}
            <TypeAnimation
              sequence={["Developer", 2000, "UI/UX Designer", 2000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/Kentz777"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-[pointer hover:scale-110 ease-in duration-200" size={30} />
            </a>
            <a
              href="https://www.facebook.com/alexandrethegrape"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="cursor-[pointer hover:scale-110 ease-in duration-200" size={30} />
            </a>
            <a
              href="https://www.freecodecamp.org/KentOwss_12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFreeCodeCamp className="cursor-[pointer hover:scale-110 ease-in duration-200" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/kent-alexandre-ortego-0029122a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin className="cursor-[pointer hover:scale-110 ease-in duration-200" size={30} />
            </a>
           
          </div>
          <div className="flex flex-col md:flex-row mt-4 items-center md:items-start">
  <div className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 sm:mr-0">
    <DownloadResume />
  </div>
  <div className="w-full md:w-auto sm:mr-0">
    <AboutMe />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Main;
