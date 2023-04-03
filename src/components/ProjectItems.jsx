import React from 'react'
import { AiOutlineGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";

const ProjectItems = ({items}) => {
  const { title, imageUrl, gitLink, liveUrl } = items;
  return (
    <div className="w-full xl:max-w-[21rem] max-w-[20rem] rounded-[0.3rem] bg-[#1D2C67] p-[1rem] flex flex-col items-center justify-center select-none">
      <h2 className="w-full mb-[0.5rem] text-white text-[1rem] lg:text-[1.8rem] text-center capitalize">
        {title}
      </h2>
      <img
        src={imageUrl}
        alt="/"
        className="block w-full h-[8rem] mb-[0.5rem] lg:h-[17rem] rounded-[0.3rem]"
      />
      <div className="w-full flex justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={() => window.open(`${gitLink}`, "_blank")}
        >
          <AiOutlineGithub size={30} className="text-[#0C122C]" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => window.open(`${liveUrl}`, "_blank")}
        >
          <TbExternalLink size={30} className="text-[#0C122C]" />
        </div>
      </div>
    </div>
  );
}

export default ProjectItems
