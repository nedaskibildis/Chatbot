import React from "react";
import hero from "../assets/landingHero.jpg"
import logo from "../assets/chatbotLogo.png"
import {useNavigate} from "react-router-dom"

export default function Landing() {
    const navigate = useNavigate();

    const signUpNavigate = () => {
        navigate("/register")
    }

    const loginNavigate = () => {
        navigate("/login")
    }

  return (
    <div className="h-[100vh] items-center grid grid-rows-6 grid-cols-10 gap-4" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}>
        <div className="absolute -top-16 left-0" style={{backgroundImage: `url(${logo})`, backgroundSize: "contain"}}>
            <img src={logo}></img>
        </div>
        <div className="col-span-10" style={{gridRowStart: "1", gridRowEnd: "3"}}></div>
        <div className="col-span-1"></div>
        <h1 className="text-white text-5xl col-span-4 mt-auto" >Discover A New Era Of Seamless Communication</h1>
        <div className="col-span-1" style={{gridRowStart: "4"}}></div>
        <h3 className="col-span-3 mb-auto text-midBlue text-2xl font-bold" style={{gridRowStart: "4"}}>Simple. Social. Connected.</h3>
        <div style={{gridRowStart: "5"}}></div>
        <button onClick={loginNavigate} className="-translate-y-16 mb-auto rounded-xl hover:border-midBlue hover:bg-midBlue hover:text-lightestBlue text-2xl mr-2 h-12 border-lightestBlue border-[2px] text-lightestBlue" style={{gridRowStart: "5"}}>Login</button>
        <button onClick={signUpNavigate} className="mb-auto rounded-xl ml-2 h-12 text-2xl w-[100%] hover:border-midBlue hover:bg-midBlue hover:text-lightestBlue  border-lightestBlue border-[2px] text-lightestBlue -translate-y-16" style={{gridRowStart: "5"}}>Sign Up</button>
    </div>
  );
}