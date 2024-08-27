import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to='/'><h2>BrainyLingo</h2></Link>
            <ul>
                <li>Home</li>
                <li>Leaderboard</li>
                <li>Daily Quote</li>
                <li>Genre</li>
            </ul>
            <button>Sign Out</button>
        </nav>
    )
}

export default Navbar
