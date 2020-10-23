import React, { useState } from 'react'

import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {

    const [roomName, setRoomName] = useState('')
    const [name, setName] = useState('')


    const handleRoomChange = (event) => {
        setRoomName(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div className="home-container">
            <input type="text" placeholder="Room" value={roomName} onChange={handleRoomChange} className="text-input" />
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} className="text-input" />
            <Link to={`/${roomName}/${name}`}>
                <button className="join-button">Join Room</button>
            </Link>
        </div>
    )
}

export default Home