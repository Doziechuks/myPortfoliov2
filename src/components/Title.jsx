import React from 'react'

const Title = ({children}) => {
  return (
    <h1 className="w-full text-white text-[1.5rem] md:text-[2.5rem] font-bold mb-[1rem] uppercase select-none flex items-center justify-center">
      <span className="border bg-white w-full max-w-[4rem] mr-[0.5rem]"></span>
      {children}
      <span className="border bg-white w-full max-w-[4rem] ml-[0.5rem]"></span>
    </h1>
  );
}

export default Title
