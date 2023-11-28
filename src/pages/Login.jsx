import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useState } from "react";

import doubleText from "../assets/doubleText.svg";
import key from "../assets/passwordKey.svg";
import user from "../assets/userLogo.svg";

export default function Login() {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  // Function to handle input changes and update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the login endpoint with form data
      await axios.post('http://localhost:3000/login', formData);

      // Clear form data after submission
      setFormData({
        username: '',
        password: '',
      });

      navigate("/main");
      
    } catch (err) {
      // Log any errors that occur during form submission
      console.log(err);
    }
  };

  // JSX for the Login component
  return (
    <div className=" h-screen flex flex-col items-center justify-center bg-gradient-to-tl from-lightBlue to-midBlue">
      <div className=" font-Lato text-6xl mb-8 font-extrabold text-white">Welcome Back!</div>
      <div className="flex flex-col">
        <div className="w-1/4 min-w-[600px] h-[50vh] bg-[#FEFEFE] border-darkBlue  border-[3px] items-center flex rounded-3xl justify-center">
          <div>
            <img src={doubleText} alt="AHH" className="w-[250px] mr-16" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 mt-12">
            <h2 className="text-3xl font-extrabold text-primaryBlack">Login</h2>
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center pb-12">
              {/* Username input field */}
              <div className="flex">
                <label htmlFor="username" className="w-[1.6rem] bg-primaryGray h-6 rounded-l-[5px] pt-1 pl-2 justify-self-center">
                  <img src={user} alt="user" />
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="username"
                  id="username"
                  className="bg-primaryGray rounded-r-[5px] px-3 mb-3 w-[12.35rem]"
                  placeholder="Username"
                />
              </div>
              {/* Password input field */}
              <div className="flex">
                <label htmlFor="password" className="w-[2rem] bg-primaryGray h-6 rounded-l-[5px] pl-2 justify-self-center">
                  <img src={key} alt="key" />
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  id="password"
                  className="bg-primaryGray rounded-[5px] rounded-l-none px-3 mb-3 w-[12rem]"
                  placeholder="Password"
                />
              </div>
              {/* Remember Me checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-2 h-2 border-[1px] border-primaryBlack mx-1"
                />
                <p className="text-xs"> Remember Me</p>
              </div>
              {/* Login button */}
              <button
                type="submit"
                className="bg-primaryBlack text-white h-8 rounded-[5px] w-[13rem] m-3 mb-none"
              >
                Login
              </button>
              {/* Sign Up link */}
              <a href="/">
                <p className="text-xs text-center underline text-midBlue">Don't Have An Account? Sign Up Here</p>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}