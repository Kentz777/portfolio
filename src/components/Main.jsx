import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main" className="">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://www.wallpapertip.com/wmimgs/160-1606283_web-developer-wallpaper.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
      <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className="sm:text-5xl text-4-xl font-bold text-gray-800">Hi I'm Kent Ortego</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
          I'm a {" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Developer",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "UI Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", paddingLeft: "5px" }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={30}/>
            <FaFacebook className="cursor-pointer" size={30}/>
            <FaInstagram className="cursor-pointer" size={30}/>
            <FaLinkedin className="cursor-pointer" size={30}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
