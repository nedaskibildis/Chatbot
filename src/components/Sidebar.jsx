import React, { useEffect, useState } from "react";
import Icon from "./Icon"
import axios from "axios";

export default function Sidebar () {

    const [friends, setFriends] = useState([])

    const getFriends = async () => {
        try {
            const response = await axios.post('http://localhost:3000/Sidebar');
            const {friends: fetchedFriends} = response.data
            setFriends(fetchedFriends);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getFriends()
    }, []);

    return (
        <div className="bg-primaryBlack w-1/12 h-screen overflow-scroll hide-scrollbar">
            <div className="grid grid-rows-8 grid-cols-1">
                    {friends.map((friend, index) => (
                        <Icon key={index} image={`${friend.firstName[0]}`} message={`${friend.firstName} ${friend.lastName}`} />
                    ))}
                    <Icon image="N" message="Hello There"/>
            </div>
        </div>
    )
}