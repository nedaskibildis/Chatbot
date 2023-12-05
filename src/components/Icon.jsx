import React from "react";

export default function Icon ({image, message, reference}) {
    return (
        <div className=" transition-hover ease-in-out duration-300 rounded-[50%] bg-secondaryBlack h-[8.5vh] w-[8.5vh] mx-auto my-3 flex justify-center items-center text-4xl text-white hover:rounded-[25%] hover:bg-midBlue">
            {image}
        </div>
    )
}