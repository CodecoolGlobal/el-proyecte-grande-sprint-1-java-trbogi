import React, {useContext} from 'react'
import {useState} from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        login(username, password);
        }


    return (
        <div className="container">
            <form onSubmit={submit}>
                    <h1>Please sign in</h1>
                    <div>
                        <label htmlFor="floatingInput">Username</label>
                        <input type="text" id="floatingInput" placeholder="Username" onChange={event => setUsername(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="floatingPassword">Password</label>
                        <input type="password"  id="floatingPassword" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Login