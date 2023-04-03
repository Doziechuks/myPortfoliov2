import React, { useState } from "react";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import { MdWorkOutline } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

const FixedNav = () => {
  const [scrollUp, setScrollUp] = useState(false);
   const handleScrollTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`background w-full max-w-[20rem] sm:max-w-[25rem] mx-auto px-[1.5rem] rounded-[3rem] h-[3rem] flex items-center justify-between fixed ${
        scrollUp ? "bottom-[1rem] z-10" : "bottom-[-4rem]"
      }  left-[50%] translate-x-[-50%] ease-in-out duration-[0.5s]`}
    >
      <div
        className="cursor-pointer hover:text-white"
        onClick={handleScrollTop}
      >
        <AiOutlineHome className="text-gray-400 text-[1.5rem] sm:text-[2rem] hover:text-white" />
      </div>
      <HashLink
        smooth
        to="/about#a"
        className="block cursor-pointer hover:text-white"
      >
        <FcBusinessman className="text-gray-400 text-[1.5rem] sm:text-[2rem]" />
      </HashLink>
      <HashLink
        smooth
        to="/skills#s"
        className="block cursor-pointer hover:text-white"
      >
        <BsPersonWorkspace className="text-gray-400 text-[1.5rem] sm:text-[2rem] hover:text-white" />
      </HashLink>
      <HashLink
        smooth
        to="/projects#p"
        className="block cursor-pointer hover:text-white"
      >
        <MdWorkOutline className="text-gray-400 text-[1.5rem] sm:text-[2rem] hover:text-white" />
      </HashLink>
      <HashLink smooth to="/contact#c" className="block cursor-pointer">
        <AiOutlinePhone className="text-gray-400 text-[1.5rem] sm:text-[2rem] hover:text-white" />
      </HashLink>
    </div>
  );
};

export default FixedNav;
