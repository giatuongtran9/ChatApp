import React, { useState, useEffect, useRef } from 'react'
import socketIOClient from 'socket.io-client'

import './ChatRoom.css'


const ChatRoom = (props) => {

    const roomId = props.match.params.roomId; 
    const name = props.match.params.name

    const [mess, setMess] = useState([])
    const [newuser, setNewUser] = useState([])
    const socketRef = useRef()
    const [newMessage, setNewMessage] = useState('')

    const sendMessage = (message) => {
        socketRef.current.emit("newChatMessage", {
            body: message,
            senderId: socketRef.current.id,
            user: name
        })
    }

    useEffect(() => {
        socketRef.current = socketIOClient('http://localhost:5000', {
            query: { roomId }
        })
        console.log(socketRef.current)

        socketRef.current.on('newChatMessage', (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            }
            setMess((mess) => [...mess, incomingMessage])
        })

        socketRef.current.emit('new-user', `Welcome ${name}`)
        socketRef.current.on('new-user', (a) => {
            const welcome = [...a]
            setNewUser(a => [...a, welcome])
        })
        // eslint-disable-next-line
    }, [roomId])

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value)
    }

    const handleSendMessage = () => {
        sendMessage(newMessage)
        setNewMessage('')
    }

    return (
        <div className="chat-room-container">
            <h1 className="room-name">Room: {roomId}</h1>
            <div className="messages-container">
                <ol className="message-list">
                    {newuser.map((user, i) => (<h4 key={i}>{user}</h4>))}
                    {mess.map((message, i) => (
                        <li key={i} className={`message-item ${message.ownedByCurrentUser ? 'my-message' : 'received-message'}`}>
                            {message.body}
                            <h5>{message.user}</h5>
                        </li>
                    ))}
                </ol>
            </div>
            <textarea value={newMessage} onChange={handleNewMessageChange} placeholder="Write message..." className="send-field" />
            <button className="send-button" onClick={handleSendMessage}>Send</button>
        </div>
    )
}

export default ChatRoom