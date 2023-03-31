import React, { useState } from "react";
import frontend from "../assets/fullbg.png";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfoBtn = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="w-full px-[2rem] sm:px-[4rem] mb-[2rem] text-white flex justify-center items-center">
      <div className="w-full flex flex-col-reverse lg:gap-[2rem] lg:flex-row justify-between items-center">
        <div className="w-full lg:max-w-[40rem]">
          <h1 className="w-full text-[1.5rem] md:text-[2.5rem] text-center lg:text-left mb-[1rem] font-bold capitalize">
            hi, i am chuka a frontend reactjs developer
          </h1>
          <p
            className={`w-full overflow-hidden mb-[1rem] text-justify leading-[2rem] ease-in-out duration-[1s] ${
              showInfo
                ? "h-[42rem] xl:h-[22rem] lg:h-[30rem] md:h-[22rem]"
                : "h-[12rem] xl:h-[6rem] md:h-[6rem] lg:h-[8.5rem]"
            }`}
          >
            Solving problems, innovations, team work, and collaboration has
            always been things I have a penchant for. I realised that the
            software enginnering space gives me a great opportunity to maximize
            my potentials in these areas...
            <br />
            <br className={`sm:hidden ${showInfo && 'hidden'}`} />
            As a frontend developer, I have strong skills and expertise in
            JavaScript, React.js, HTML, CSS, and web standards. <br />I am very
            enthusiastic and meticulous about my job, and I give in my best and
            never give up on tasks and projects until fully executed to clients
            taste and standard. I am also a passionate programmer, and I enjoy
            bringing ideas and solutions that help humanity. I always add value
            to any place or system I find myself in. <br /> Due to my love and
            passion for learning and growth, I am always open to new learning
            opportunities, as that in turn enhances my growth.
          </p>
          <button
            className="block w-full max-w-[6rem] sm:max-w-[8rem] mx-auto lg:mx-0 bg-red-400 py-[0.6rem] sm:py-[0.7rem] px-[0.7rem] sm:px-[1rem] text-[0.8rem] sm:text-[1rem] cursor-pointer rounded-md"
            onClick={handleInfoBtn}
          >
            {showInfo ? "show less" : "show more"}
          </button>
        </div>
        <img
          src={frontend}
          alt="/"
          className="w-full md:max-w-[20rem] lg:max-w-[25rem] xl:max-w-[43rem]"
        />
      </div>
    </div>
  );
};

export default Header;
