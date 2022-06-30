import { useState } from 'react';
import { Link } from "react-router-dom";
import Login from './user_management/Login';
import Registration from './user_management/Registration';


const Header = () => {

    const [registrationModalDialogConent, setRegistrationModalDialogConent] = useState("");
    const [loginModalDialogConent, setLoginModalDialogConent] = useState("");

    return (
        <div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/reservation">Reservation</Link></button>
            <button onClick={() => setRegistrationModalDialogConent(<Registration closeDialog={() => setRegistrationModalDialogConent("")}></Registration>)}>Registration</button>      {/* TODO: Megkérdezni miért kell a () => ... */}
            <button onClick={() => setLoginModalDialogConent(<Login closeDialog={() => setLoginModalDialogConent("")}></Login>)}>Login</button>
            <button id="logout-button">Logout</button>

            <div>{registrationModalDialogConent}</div>
            <div>{loginModalDialogConent}</div>  
        </div>
    )
}

export default Header