import React from 'react';
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

import Title from './Title';

const Contact = () => {
  return (
    <div className="w-full px-[2rem] sm:px-[4rem] mb-[4rem] sm:mb-[8rem] flex flex-col items-center justify-center">
      <Title>contact</Title>
      <div className="w-full flex justify-center items-center gap-[1rem] sm:gap-[3rem]">
        <div
          className="border cursor-pointer"
          onClick={() => window.open("mailto:doziechuks1010@gmail.com?", "_blank")}
        >
          <AiOutlineMail className="text-white text-[2rem] sm:text-[4rem] md:text-[6rem] md:hover:text-[#1D2C67] ease-in-out duration-[0.5s]" />
        </div>
        <div
          className="border cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/chuka-obodozie/", "_blank")
          }
        >
          <AiFillLinkedin className="text-white text-[2rem] sm:text-[4rem] md:text-[6rem] md:hover:text-[#1D2C67] ease-in-out duration-[0.5s]" />
        </div>
        <div
          className="border cursor-pointer"
          onClick={() =>
            window.open("https://twitter.com/ObodozieChuka", "_blank")
          }
        >
          <AiFillTwitterCircle className="text-white text-[2rem] sm:text-[4rem] md:text-[6rem] md:hover:text-[#1D2C67] ease-in-out duration-[0.5s]" />
        </div>
        <div
          className="border cursor-pointer"
          onClick={() => window.open("https://github.com/Doziechuks", "_blank")}
        >
          <AiOutlineGithub className="text-white text-[2rem] sm:text-[4rem] md:text-[6rem] md:hover:text-[#1D2C67] ease-in-out duration-[0.5s]" />
        </div>
      </div>
    </div>
  );
}

export default Contact
