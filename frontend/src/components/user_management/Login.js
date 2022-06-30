import React, {useContext} from 'react'
import {SyntheticEvent, useState} from "react";
import AuthContext from "../context/AuthContext";
import jwtDecode from "jwt-decode";

const Login = () => {
    const [authTokens, setAuthTokens, user, setUser, userId, setUserId] = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/user/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
                "username": username,
                "password": password
            })
        }).then(r => r.json()).then(data => {
            console.log('Success:', data);
            setAuthTokens(data);
            const userData = jwtDecode(data['access_token']);
            setUser(userData['sub']);
            setUserId(userData['userId']);
        })
        console.log(authTokens)
        console.log(user)
        }


    return (
        <div>
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