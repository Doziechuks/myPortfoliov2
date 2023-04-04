import React, { useState } from "react";
import frontend from "../assets/fullbg.png";
import CustomButton from "./CustomButton";
import resume from "../assets/obodozie chuka.pdf";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfoBtn = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div
      id="a"
      className="w-full px-[2rem] sm:px-[4rem] mb-[4rem] sm:mb-[5rem] text-white flex justify-center items-center"
    >
      <div className="w-full flex flex-col-reverse lg:gap-[2rem] lg:flex-row justify-between items-center">
        <div className="w-full lg:max-w-[40rem]">
          <h1 className="w-full text-[1.5rem] md:text-[2.5rem] text-center lg:text-left mb-[1rem] font-bold capitalize">
            hi, i am chuka a frontend reactjs developer
          </h1>
          <p
            className={`w-full overflow-hidden mb-[1rem] text-justify leading-[2rem] ease-in-out duration-[1s] ${
              showInfo
                ? "h-[52rem] xl:h-[27rem] lg:h-[36rem] md:h-[26.5rem]"
                : "h-[13.5rem] xl:h-[8rem] md:h-[8rem] lg:h-[9.5rem]"
            }`}
          >
            I have a strong experience in building modern and responsive web
            applications using React. I have a strong understanding of the React
            ecosystem, including React Router, Redux, and JSX, and I'm
            comfortable using modern front-end build tools like Webpack, Babel,
            and ESLint.
            <br />
            <br className={`sm:hidden ${showInfo && "hidden"}`} />
            My passion for building user-friendly interfaces and attention to
            detail drive me to create high-quality and visually appealing
            applications. I believe that great software starts with great
            communication and collaboration, so I work closely with designers,
            product owners, and other stakeholders to ensure that every project
            I work on is a success. <br />
            In addition to my technical skills, I have experience working in
            agile environments and using version control systems like Git. I'm
            always looking to improve my skills and stay up-to-date with the
            latest front-end development trends and best practices.
            <br /> If you're looking for a dedicated and experienced frontend
            developer to help bring your ideas to life, I'd love to be that
            developer. You can reach out to me
          </p>
          <div className="w-full flex items-center justify-center sm:justify-start gap-[1rem]">
            <CustomButton onClick={handleInfoBtn}>
              {showInfo ? "show less" : "show more"}
            </CustomButton>
            <CustomButton onClick={() => window.open(`${resume}`, "_blank")}>
              download resume
            </CustomButton>
          </div>
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
