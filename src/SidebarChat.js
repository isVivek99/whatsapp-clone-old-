import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css' 
import { useState } from 'react'    
import { useEffect } from 'react'

function SidebarChat(props) {

    console.log(props.addNewChat);
    //console.log("sidebarchat");

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    const createChat = ()=>{
        const roomName = prompt("please enter room name for chat..")

        if(roomName){
            //db stuff
        }
    }

    return !props.addNewChat ? (
        <div className="sidebarChat">
            <Avatar src ={`https://avatars.dicebear.com/api/human/${seed}.svg`} />  
            <div className="sidebarChat__info">
                <h1>Room Name</h1>
                <p>last message...</p>

            </div>
        </div>
    ): <div className="sidebarChat" onClick={createChat}> 
            <h1>create new chat</h1>
    </div>
}

export default SidebarChat
