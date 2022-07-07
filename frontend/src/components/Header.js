import { useState } from 'react';
import { Link } from "react-router-dom";
import {useContext} from "react";
import AuthContext from "./context/AuthContext";
import Login from './user_management/Login';
import Registration from './user_management/Registration';


const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const [registrationModalDialogContent, setRegistrationModalDialogContent] = useState("");
    const [loginModalDialogContent, setLoginModalDialogContent] = useState("");

    return (
        <div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/reservation">Reservation</Link></button>
            {user ?
                (<>
                    <span>Welcome {user['sub']}!</span>
                    <button onClick={() => logout()}>Logout</button>
                </>) :
                (<>
                    <button onClick={() => setRegistrationModalDialogContent(<Registration closeDialog={() => setRegistrationModalDialogContent("")}></Registration>)}>Registration</button>
                    <button onClick={() => setLoginModalDialogContent(<Login closeDialog={() => setLoginModalDialogContent("")}></Login>)}>Login</button>
                    <div>{registrationModalDialogContent}</div>
                    <div>{loginModalDialogContent}</div>
                </>)
            }
        </div>
         )
}

export default Header