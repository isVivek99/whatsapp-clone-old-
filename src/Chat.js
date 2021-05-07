import { Avatar,IconButton } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import { useState } from 'react'    
import { useEffect } from 'react'
import { InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons'
import { AttachFile } from '@material-ui/icons'
import { MoreVert } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import db from './firebase'





function Chat() {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const [roomName, setRoomName] = useState('')
    const {roomId} = useParams();


    useEffect(()=>{
        if(roomId){
            console.log("roomid:"+roomId);
            db.collection('rooms').doc(roomId).
            onSnapshot(snapshot=>{
                setRoomName(snapshot.data().name)
            })
        }
    },[roomId])



    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        setInput('');

    }

    return (
        <div className="chat">
            

            <div className="chat__header">

                <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton> 
                </div>
            </div>    

            <div className="chat__body">
            
                
                <p className={`chat__message ${false && "chat__reciever"}`}>
                <span className="chat__name">Vivek </span>
                    Hey Guys
                    <span className="chat__timestamp">3:52 PM</span>
                </p>
                
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form action="">
                    <input type="text" placeholder="send a message" value = {input} onChange = {e => setInput(e.target.value)} />
                    <button type="submit" onClick={sendMessage}>send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
