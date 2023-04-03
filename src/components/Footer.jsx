import React from 'react';
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-[#1D2C67] px-[3rem] sm:px-[4rem] py-[3rem] sm:py-[4rem] flex flex-col items-center justify-center">
      <h2 className='w-full text-white font-["Audiowide"] text-[1.5rem] sm:text-[2rem] mb-[2rem] cursor-pointer text-center capitalize'>
        obodozie chuka
      </h2>
      <ul className="w-full sm:max-w-[30rem] mb-[2rem] text-white flex flex-col justify-center items-center sm:flex-row sm:justify-between">
        <li className="mb-[1.5rem] sm:mb-0 px-[1rem] uppercase cursor-pointer hover:text-gray-400">
          about
        </li>
        <li className="mb-[1.5rem] sm:mb-0 px-[1rem] uppercase cursor-pointer hover:text-gray-400">
          skills
        </li>
        <li className="mb-[1.5rem] sm:mb-0 px-[1rem] uppercase cursor-pointer hover:text-gray-400">
          projects
        </li>
        <li className="px-[1rem] uppercase cursor-pointer hover:text-gray-400">
          contact
        </li>
      </ul>
      <div className="w-full mb-[2rem] text-white flex justify-center items-center">
        <div
          className="cursor-pointer mr-[1rem]"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=doziechuks1010@gmail.com&su=SUBJECT&body",
              "blank"
            )
          }
        >
          <AiOutlineMail className="text-white text-[2rem] sm:text-[4rem] md:text-[3rem] md:hover:text-[#0C122C] ease-in-out duration-[0.5s]" />
        </div>
        <div
          className="cursor-pointer mr-[1rem]"
          onClick={() =>
            window.open("https://www.linkedin.com/in/chuka-obodozie/", "_blank")
          }
        >
          <AiFillLinkedin className="text-white text-[2rem] sm:text-[4rem] md:text-[3rem] md:hover:text-[#0C122C] ease-in-out duration-[0.5s]" />
        </div>
        <div
          className="cursor-pointer mr-[1rem]"
          onClick={() =>
            window.open("https://twitter.com/ObodozieChuka", "_blank")
          }
        >
          <AiFillTwitterCircle className="text-white text-[2rem] sm:text-[4rem] md:text-[3rem] md:hover:text-[#0C122C] ease-in-out duration-[0.5s]" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => window.open("https://github.com/Doziechuks", "_blank")}
        >
          <AiOutlineGithub className="text-white text-[2rem] sm:text-[4rem] md:text-[3rem] md:hover:text-[#0C122C] ease-in-out duration-[0.5s]" />
        </div>
      </div>
      <div className="w-full border mb-[2rem]" />
      <p className="text-gray-400">&copy; obodozie chuka. All right reserved</p>
    </div>
  );
}

export default Footer
