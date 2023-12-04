import React from "react";
import hero from "../assets/landingHero.jpg"

export default function Landing() {
  return (
    <div className="h-[100vh] items-center grid grid-rows-6 grid-cols-10 gap-4" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}>
        <div className="col-span-10" style={{gridRowStart: "1", gridRowEnd: "3"}}></div>
        <div className="col-span-1"></div>
        <h1 className="text-white text-5xl col-span-4 mt-auto" >Discover A New Era Of Seamless Communication</h1>
        <div className="col-span-1" style={{gridRowStart: "4"}}></div>
        <h3 className="col-span-3 mb-auto text-midBlue text-2xl font-bold" style={{gridRowStart: "4"}}>Simple. Social. Connected.</h3>
        <button className="" style={{gridRowStart: "5"}}>Login</button>
        <button className="" style={{gridRowStart: "5"}}>Create Account</button>
    </div>
  );
}