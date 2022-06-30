import React from 'react';
import { Link } from "react-router-dom";
import {useContext} from "react";
import AuthContext from "./context/AuthContext";

const Header = () => {
    const {authTokens, setAuthTokens, user, setUser, userId, setUserId, logout} = useContext(AuthContext);
    return (
        <div>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/reservation">Reservation</Link></button>
            {user ? (<div>
                        <span>Welcome {user['sub']}!</span>
                        <button onClick={() => logout()}>Logout</button>
                    </div>):
                (<>
                    <button><Link to="/register">Register</Link></button><button><Link to="/login">Login</Link></button>
                </>)}
        </div>
    )
}

export default Header