import React from 'react';
import '../../style/modal.css';
import {useState} from "react";
import {AiFillCloseCircle} from "react-icons/ai";

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("MEMBER");

    const submitRegistration = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/api/user/create-user", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": username,
                "password": password,
                "role": role
            })
        }).then(r => {
            console.log("status" + r.status);
        })
        props.closeDialog();

    }

    return (
        <div id="modal-container">
            <div id="modal-fade">
                <div id="modal-dialog">
                    <div id="modal-header">
                        <div id="modal-title">Registration</div>
                        <div id="modal-close" onClick={props.closeDialog}><AiFillCloseCircle size={20}/></div>
                    </div>
                    <div id="modal-content">
                        <div><div>Username:</div><input type="text" placeholder="Username" onChange={event => setUsername(event.target.value)} /></div>
                        <label>Who are you?</label>
                        <select onChange={event => setRole(event.target.value)}>
                            <option value="MEMBER">Member</option>
                            <option value="COACH">Coach</option>
                        </select>
                        <div><div>Password:</div><input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/></div>
                    </div>
                    <div id="modal-footer">
                        <button id="modal-button" onClick={submitRegistration}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register