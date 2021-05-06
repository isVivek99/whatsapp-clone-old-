import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from "@material-ui/core"
import {  DonutLarge, SearchOutlined } from '@material-ui/icons'
import { Chat } from '@material-ui/icons'
import { MoreVert } from '@material-ui/icons'
import SidebarChat from './SidebarChat';
import { useState } from 'react';
import { useEffect } from 'react';
import db from './firebase';

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect( ()=>{
        db.collection('rooms').onSnapshot((snap)=>{
            setRooms(snap.docs.map(doc=>{
      
                return(
                {
                    id : doc.id,
                    data : doc.data
                }
                );
            }

            ))
        })

    },[])
    if(rooms){
        console.log(rooms);
    }

    

    return (
        <div className="sidebar">
            

            <div className="sidebar__header ">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>

                    <IconButton>
                        <Chat />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar__search">

                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="search or start new chat" />
                </div>
                
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                )
                
                )}
            </div>

        </div>
    )
}

export default Sidebar
