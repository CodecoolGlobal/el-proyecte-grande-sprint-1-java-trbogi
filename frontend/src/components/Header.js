import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/reservation">Reservation</Link></button>
            <button><Link to="/register">Register</Link></button>
            <button><Link to="/login">Login</Link></button>
            <button id="logout-button">Logout</button>
        </div>
    )
}

export default Header