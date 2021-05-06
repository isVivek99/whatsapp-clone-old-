import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from "@material-ui/core"
import { DonutLarge, SearchOutlined } from '@material-ui/icons'
import { Chat } from '@material-ui/icons'
import { MoreVert } from '@material-ui/icons'
import SidebarChat from './SidebarChat';



function Sidebar() {
   // console.log("sidebar");
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
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>


        </div>
    )
}

export default Sidebar
