import React from "react";
import doubleText from "../assets/doubleText.svg"
import key from"../assets/passwordKey.svg"
import user from "../assets/userLogo.svg"

export default function Login() {
    return (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-r from-darkBlue to-lightBlue">
            <div className=" font-Lato text-6xl mb-8 font-extrabold text-lightestBlue">Welcome Back!</div>
            <div className="flex flex-col">
                <div className="w-1/4 min-w-[600px] h-[50vh] bg-[#FEFEFE] border-darkBlue  border-[3px] items-center flex rounded-3xl justify-center">
                    <div>
                        <img src={doubleText} alt="AHH" className="w-[250px] mr-16"/>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-6 mt-12">
                    <h2 className="text-3xl font-extrabold text-primaryBlack">Login</h2>
                        <form action="" className="flex flex-col justify-center pb-12">
                            <div className="flex">
                                <label htmlFor="password" className="w-[1.6rem] bg-primaryGray h-6 rounded-l-[5px] pt-1 pl-2 justify-self-center"><img src={user}></img></label>
                                <input type="text" name="username" id="username" className="bg-primaryGray rounded-r-[5px] px-3 mb-3 w-[12.35rem]" placeholder="Username"/>
                            </div>
                            <div className="flex">
                                <label htmlFor="password" className="w-[2rem] bg-primaryGray h-6 rounded-l-[5px] pl-2 justify-self-center"><img src={key}></img></label>
                                <input type="password" name="password" id="password" className="bg-primaryGray rounded-[5px] rounded-l-none px-3 mb-3 w-[12rem]" placeholder='Password'/>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="w-2 h-2 border-[1px] border-primaryBlack mx-1"></input>
                                <p className="text-xs"> Remember Me</p>
                            </div>
                            <button className="bg-primaryBlack text-white h-8 rounded-[5px] w-[13rem] m-3 mb-none">Login</button>
                            <a href=""><p className="text-xs text-center underline text-midBlue">Dont Have An Account? Sign Up Here</p></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}