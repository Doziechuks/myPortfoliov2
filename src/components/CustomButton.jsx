import React from 'react'

const CustomButton = ({children, ...otherProps}) => {
  return (
    <button
      className="block w-full max-w-max lg:mx-0 bg-[#FF4F5A] hover:bg-[#f52c39] ease-in-out duration-[0.5s] py-[0.6rem] sm:py-[0.7rem] px-[0.7rem] sm:px-[1rem] text-[0.8rem] sm:text-[1rem] cursor-pointer rounded-md"
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton
