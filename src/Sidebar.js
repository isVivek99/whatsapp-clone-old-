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
import { useStateValue } from './StateProvider'

function Sidebar() {

    const [rooms, setRooms] = useState([]);
    const [ { user }, dispatch] = useStateValue();

    useEffect( ()=>{

       const unsub =  db.collection('rooms').onSnapshot((snap)=>{
            setRooms(snap.docs.map(doc=>{
      
                return(
                {
                    id : doc.id,
                    data : doc.data(),
                }
                );
            }

            ))
        });
        return () => {
            unsub();
        }

    },[])

    
    

    return (
        <div className="sidebar">
            

            <div className="sidebar__header ">
                <Avatar src = {user?.photoURL} />
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
                {rooms.map(room=>{
                    return(
                        <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                    );    
                }
                
                )}
            </div>

        </div>
    )
}

export default Sidebar
