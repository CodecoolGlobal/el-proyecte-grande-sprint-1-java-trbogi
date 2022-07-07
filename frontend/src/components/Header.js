import { useState } from 'react';
import { Link } from "react-router-dom";
import {useContext} from "react";
import AuthContext from "./context/AuthContext";
import Login from './user_management/Login';
import Registration from './user_management/Registration';


const Header = () => {
    const {authTokens, setAuthTokens, user, setUser, userId, setUserId, logout} = useContext(AuthContext);
    const [registrationModalDialogConent, setRegistrationModalDialogConent] = useState("");
    const [loginModalDialogConent, setLoginModalDialogConent] = useState("");

    return (
        <div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/reservation">Reservation</Link></button>
            <button onClick={() => setRegistrationModalDialogConent(<Registration closeDialog={() => setRegistrationModalDialogConent("")}></Registration>)}>Registration</button>
            <button onClick={() => setLoginModalDialogConent(<Login closeDialog={() => setLoginModalDialogConent("")}></Login>)}>Login</button>
            <button id="logout-button">Logout</button>

            <div>{registrationModalDialogConent}</div>
            <div>{loginModalDialogConent}</div>
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