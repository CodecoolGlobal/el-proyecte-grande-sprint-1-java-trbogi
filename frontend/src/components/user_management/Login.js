import React from 'react';
import '../../style/modal.css';
import React, {useContext} from 'react'
import {useState} from "react";
import AuthContext from "../context/AuthContext";

const Login = (props) => {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        login(username, password);
    }


    return (
        <div id="modal-container">
            <div id="modal-fade">
                <div id="modal-dialog">
                    <div id="modal-header">
                        <div id="modal-title">Login</div>
                        <div id="modal-close" onClick={props.closeDialog}>x</div>
                    </div>
                    <div id="modal-content">
                        <div><div>E-mail Address:</div><input /></div>
                        <div><div>Password:</div><input /></div>
                    </div>
                    <div id="modal-footer">
                        <div id="modal-button" onSubmit={submit}>Log in</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login