import { useState } from 'react';
import { Link } from "react-router-dom";
import {useContext} from "react";
import AuthContext from "./context/AuthContext";
import Login from './user_management/Login';
import Registration from './user_management/Registration';
import '../style/header.css';


const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const [registrationModalDialogContent, setRegistrationModalDialogContent] = useState("");
    const [loginModalDialogContent, setLoginModalDialogContent] = useState("");

    return (
        <div className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/shop">Shop</Link>
            <Link className="link" to="/reservation">Reservation</Link>
            {user ?
                (<>
                    <span>Welcome {user['sub']}!</span>
                    <Link className="link" to="/cart">Cart</Link>
                    <span className="link" onClick={() => logout()}>Logout</span>
                </>) :
                (<>
                    <span className="link" onClick={() => setRegistrationModalDialogContent(<Registration closeDialog={() => setRegistrationModalDialogContent("")}></Registration>)}>Registration</span>
                    <span className="link" onClick={() => setLoginModalDialogContent(<Login closeDialog={() => setLoginModalDialogContent("")}></Login>)}>Login</span>
                    <div>{registrationModalDialogContent}</div>
                    <div>{loginModalDialogContent}</div>
                </>)
            }
        </div>
         )
}

export default Header