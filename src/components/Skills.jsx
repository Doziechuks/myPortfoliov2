import React from 'react';
import Title from './Title';
import skillsData from '../data/skills.data';
import SkillsItems from './SkillsItems';


const Skills = () => {
  return (
    <div className="w-full px-[2rem] sm:px-[4rem] mb-[2rem] flex flex-col items-center justify-center">
      <Title>skills</Title>
      <div className='w-full grid grid-cols-3 sm:flex lg:justify-between sm:items-center justify-center gap-[3rem]'>
        {
          skillsData.map((skill) => <SkillsItems key={skill.id} skill={skill} />)
        }
      </div>
    </div>
  );
}

export default Skills

