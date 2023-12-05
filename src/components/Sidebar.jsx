import React from "react";
import Icon from "./Icon"

export default function Sidebar () {
    return (
        <div className="bg-primaryBlack w-1/12 h-screen ">
            <div className="grid grid-rows-8 grid-cols-1">
                    <Icon image="N" message="Hello There"/>
            </div>
        </div>
    )
}