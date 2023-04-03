import React from 'react'

const SkillsItems = ({skill}) => {
  return (
    <div className=' w-full max-w-[6rem]'>
      <img src={skill.imageUrl} alt="/" className='text-white aspect-[3/3] object-contain' />
    </div>
  )
}

export default SkillsItems
