import React from 'react';
import { Link } from "react-router-dom";
import {useContext} from "react";
import AuthContext from "./context/AuthContext";


const Header = () => {
    const [user] = useContext(AuthContext);
    return (
        <div>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/reservation">Reservation</Link></button>
            <button><Link to="/register">Register</Link></button>
            {user ? (<span>Welcome {user}!</span>):
                (<button><Link to="/login">Login</Link></button>)}
        </div>
    )
}

export default Header