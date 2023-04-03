import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import resume from "../assets/obodozie chuka.pdf";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="w-full text-white mb-[2rem] px-[2rem] sm:px-[4rem] py-[1rem] flex justify-between items-center">
      <h1
        className='font-["Audiowide"] text-[1.5rem] sm:text-[2rem] cursor-pointer'
        onClick={() => setNav(false)}
      >
        CHUKA.
      </h1>
      <div className="w-full max-w-[30rem] sm:flex justify-between items-center hidden">
        <HashLink
          smooth
          to="/about#a"
          className="block py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400"
        >
          about
        </HashLink>
        <HashLink
          smooth
          to="/skills#s"
          className="block py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400"
        >
          skills
        </HashLink>
        <HashLink
          smooth
          to="/projects#p"
          className="block py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400"
        >
          projects
        </HashLink>
        <HashLink
          smooth
          to="/contact#c"
          className="block py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400"
        >
          contact
        </HashLink>
        <a
          href={resume}
          download
          className="block py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400"
        >
          resume
        </a>
      </div>
      <div onClick={handleNav} className="sm:hidden block cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* mobile navbar */}
      <div
        className={
          nav
            ? "fixed top-[4rem] left-0 h-full bg-[#1D2C67] w-full max-w-[15rem] ease-in-out duration-[0.5s]"
            : "fixed top-[4rem] h-full left-[-100%] ease-in-out duration-[0.5s]"
        }
      >
        <HashLink
          smooth
          to="/about#a"
          onClick={() => setNav(false)}
          className="block py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          about
        </HashLink>
        <HashLink
          smooth
          to="/skills#s"
          onClick={() => setNav(false)}
          className="block py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          skills
        </HashLink>
        <HashLink
          smooth
          to="/projects#p"
          onClick={() => setNav(false)}
          className="block py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          projects
        </HashLink>
        <HashLink
          smooth
          to="/contact#c"
          onClick={() => setNav(false)}
          className="block py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          contact
        </HashLink>
        <a
          href={resume}
          download
          onClick={() => setNav(false)}
          className="block py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          resume
        </a>
      </div>
    </div>
  );
}

export default Navbar

