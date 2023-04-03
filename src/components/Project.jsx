import React from 'react';
import Title from './Title';
import projectData from '../data/project.data';
import ProjectItems from './ProjectItems';

const Project = () => {
  return (
    <div className="w-full px-[2rem] sm:px-[4rem] mb-[4rem] sm:mb-[6rem] flex flex-col items-center justify-center">
      <Title>projects</Title>
      <div className="w-full grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-[1rem]">
        {
          projectData.map(items => <ProjectItems key={items.id} items={items} />)
        }
      </div>
    </div>
  );
}

export default Project
