import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css' 
import { useState } from 'react'    
import { useEffect } from 'react'
import db from './firebase'
import { Link } from "react-router-dom";

function SidebarChat(props) {

    //console.log(props.name);
    //console.log("sidebarchat");

    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');


    useEffect( () => {
        if(props.id){
            db.collection('rooms').doc(props.id)
            .collection('messages').orderBy('timestamp','desc')
            .onSnapshot( snapshot => {
                setMessages(snapshot.docs.map((doc)=>        
                 doc.data()))
            });
        }
    
    },[props.id])

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    const createChat = ()=>{
        const roomName = prompt("please enter room name for chat..")

        if(roomName){
            db.collection('rooms').add({name:roomName });
        }
    }

    return !props.addNewChat ? (
        <Link to={`/rooms/${props.id}`}>
            <div className="sidebarChat">
                <Avatar src ={`https://avatars.dicebear.com/api/human/${seed}.svg`} />  
                <div className="sidebarChat__info">
                    <h3>{props.name}</h3>
                    <p>{messages[0]?.message}</p>

                </div>
            </div>
        </Link>
    ): <div className="sidebarChat" onClick={createChat}> 
            <h1>create new chat</h1>
    </div>
}

export default SidebarChat
