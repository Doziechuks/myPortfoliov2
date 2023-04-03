import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import resume from "../assets/obodozie chuka.pdf";

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
      <ul className="w-full max-w-[30rem] sm:flex justify-between items-center hidden">
        <li className="py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400">
          about
        </li>
        <li className="py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400">
          skills
        </li>
        <li className="py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400">
          projects
        </li>
        <li className="py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400">
          contact
        </li>
        <a
          href={resume}
          download
          className="block py-[0.5rem] px-[1rem] font-bold uppercase cursor-pointer hover:text-gray-400"
        >
          resume
        </a>
      </ul>
      <div onClick={handleNav} className="sm:hidden block cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* mobile navbar */}
      <ul
        className={
          nav
            ? "fixed top-[4rem] left-0 h-full bg-[#1D2C67] w-full max-w-[15rem] ease-in-out duration-[0.5s]"
            : "fixed top-[4rem] h-full left-[-100%] ease-in-out duration-[0.5s]"
        }
      >
        <li
          onClick={() => setNav(false)}
          className="py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          about
        </li>
        <li
          onClick={() => setNav(false)}
          className="py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          skills
        </li>
        <li
          onClick={() => setNav(false)}
          className="py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          projects
        </li>
        <li
          onClick={() => setNav(false)}
          className="py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          contact
        </li>
        <a
          href={resume}
          download
          onClick={() => setNav(false)}
          className="block py-[2rem] pl-[2rem] border-b border-gray-500 uppercase font-bold cursor-pointer"
        >
          resume
        </a>
      </ul>
    </div>
  );
}

export default Navbar

