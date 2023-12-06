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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" transition-hover ease-in-out duration-300 rounded-[50%] bg-secondaryBlack h-[8.5vh] w-[8.5vh] mx-auto my-3 flex justify-center items-center text-2xl text-white ml-[4vh] hover:rounded-[15px] hover:w-[200px] hover:bg-midBlue icon-container">
            {isHovered ? (
            <div className="ml-[1.25vh] text-left rounded-[15px] w-[150px] bg-midBlue absolute h-[8.5vh] text-xl">
                        <div className="mt-5">
                            {message}
                        </div>
            </div>
            
            ) : (
            <div className="image">
                {image}
            </div>
            )}
        </div>
    )
}