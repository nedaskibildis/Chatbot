import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useState } from "react"


export default function Register() {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            await axios.post('http://localhost:3000/register', formData);
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            })
            navigate("/login")
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className=" h-screen flex flex-col items-center justify-center bg-gradient-to-tl from-lightBlue to-midBlue">
            <h1 className="mb-3 text-4xl text-white font-bold">Welcome To Chatbot</h1>
            <div className="min-w-[400px] w-1/3 bg-white h-[70vh] rounded-lg">
                <form action="" onChange={handleChange} onSubmit={handleSubmit} className="flex flex-col h-full w-full">
                <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="col-span-1 mt-8">
                        <h3 className="text-xl text-primaryBlack font-medium mb-2">Create an Account</h3>
                        <div className="w-[95%] h-[1px] bg-black text-center mb-4"></div>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 flex my-2 mx-auto">
                        <input type="text" name="firstname" id="firstname" className="mr-1 h-8 border-[1px] border-primaryGray p-3 flex-1" placeholder="First"/>
                        <input type="text" name="lastname" id="lastname" className="ml-1 h-8 border-[1px] border-primaryGray p-3 flex-1" placeholder="Last"/>
                    </div>
                        <input type="email" name="email" id="email" className="mx-auto h-8 border-[1px] border-primaryGray mb-2 col-span-2 p-3 w-full" placeholder="Email"/>
                        <input type="password" name="password" id="password" className="mx-auto h-8 border-[1px] border-primaryGray mb-4 col-span-2 p-3 w-full" placeholder="Password"/>
                        <p className="col-span-2 text-xs">By Creating an Account, You Agree to our <a href="/" className="underline">Terms And Conditions</a></p>
                        <button type="submit" className="col-span-2 bg-lightBlue w-full rounded-md h-16 text-3xl font-bold text-white mt-3">Register</button>
                    </div>
                    <p className=" text-xs text-center">Already Have An Account? <a  href="/login" className="underline">Click Here To Sign Up</a></p>
                </form>
            </div>
        </div>
    )
}