import React from "react";
import { useState } from "react";

export default function Icon ({image, message, reference}) {
    const [isHovered, setIsHovered] = useState(false)
    let enterTimeout = 150;
    let enterTimer;

    const handleMouseEnter = () => {
    enterTimer = setTimeout(() => {
      setIsHovered(true);
    }, enterTimeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimer);
    setIsHovered(false);
  };
    
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" transition-hover ease-in-out duration-300 rounded-[50%] bg-secondaryBlack h-[8.5vh] w-[8.5vh] mx-auto my-3 flex justify-center items-center text-2xl text-white hover:ml-[4.25vh] hover:rounded-[15px] hover:w-[200px] hover:bg-midBlue icon-container">
            {isHovered ? (
            <div className="ml-[4.25vh] message rounded-[15px] w-[200px] bg-midBlue absolute h-[8.5vh] text-left">
                    {message}
            </div>
            
            ) : (
            <div className="image">
                {image}
            </div>
            )}
        </div>
    )
}