import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from "@material-ui/core"
import { DonutLarge } from '@material-ui/icons'
import { Chat } from '@material-ui/icons'
import { MoreVert } from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            

            <div className="sidebar__header ">
                <Avatar />
                <div className="sidebar__headerRight">
                    <DonutLarge />
                    <Chat />
                    <MoreVert />

                </div>
            </div>

            <div className="sidebar__search">

            </div>

            <div className="sidebar__chats">

            </div>


        </div>
    )
}

export default Sidebar
